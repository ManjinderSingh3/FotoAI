"use client";

import React, { useState, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTrainingStatus } from "@/hooks/useTrainingStatus";
import { BACKEND_URL } from "../config";
import axios from "axios";
import TrainModelForm from "./train-model-form";
import type { TrainModelDTO } from "common/types";

export default function Train() {
  const { getToken, user } = useAuth();
  const [trainModelId, setTrainModelId] = useState<string | null>(null);
  const { status, isReady, error } = useTrainingStatus(trainModelId, getToken, {
    enabled: !!trainModelId,
    pollIntervalMs: 3000,
  });

  const handleTrainSubmit = useCallback(
    async (data: TrainModelDTO): Promise<string | null> => {
      const token = await getToken();
      if (!token) return null;
      const res = await axios.post<{ trainModelId: string }>(
        `${BACKEND_URL}/v1/ai/train-model`,
        data,
        { headers: { authorization: `Bearer ${token}` } }
      );
      return res.data.trainModelId ?? null;
    },
    [getToken]
  );

  const handleTrainSuccess = useCallback((id: string) => {
    setTrainModelId(id);
  }, []);

  return (
    <div className="space-y-4">
      {trainModelId && (
        <div
          className="rounded-lg border p-4 text-sm"
          role="status"
          aria-live="polite"
        >
          {error && (
            <p className="text-destructive">{error}</p>
          )}
          {!error && status === "Pending" && (
            <p className="text-muted-foreground">
              Training in progress… We’ll update when your model is ready.
            </p>
          )}
          {!error && isReady && (
            <p className="font-medium text-green-600 dark:text-green-400">
              Training complete. You can now generate images with this model.
            </p>
          )}
        </div>
      )}
      <TrainModelForm
        onTrainSubmit={handleTrainSubmit}
        onTrainSuccess={handleTrainSuccess}
      />
    </div>
  );
}
