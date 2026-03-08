"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

type TrainingStatus = "Pending" | "Generated" | "Failed";

export function useTrainingStatus(
  trainModelId: string | null,
  getToken: () => Promise<string | null>,
  options?: { pollIntervalMs?: number; enabled?: boolean }
) {
  const [status, setStatus] = useState<TrainingStatus | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enabled = options?.enabled ?? true;
  const pollIntervalMs = options?.pollIntervalMs ?? 3000;

  const fetchStatus = useCallback(async () => {
    if (!trainModelId || !enabled) return;
    const token = await getToken();
    if (!token) return;
    const { data } = await axios.get<{ status: TrainingStatus; tensorPath?: string }>(
      `${BACKEND_URL}/v1/ai/training-status/${trainModelId}`,
      { headers: { authorization: `Bearer ${token}` } }
    );
    setStatus(data.status);
    if (data.status === "Generated") {
      setIsReady(true);
    }
    if (data.status === "Failed") {
      setError("Training failed");
    }
  }, [trainModelId, getToken, enabled]);

  useEffect(() => {
    if (!trainModelId || !enabled) {
      setStatus(null);
      setIsReady(false);
      setError(null);
      return;
    }

    fetchStatus().catch((err) => {
      setError(err?.response?.status === 404 ? "Job not found" : "Failed to fetch status");
    });

    if (isReady) return;

    const interval = setInterval(() => {
      fetchStatus().catch(() => {});
    }, pollIntervalMs);

    return () => clearInterval(interval);
  }, [trainModelId, enabled, pollIntervalMs, fetchStatus, isReady]);

  return { status, isReady, error };
}
