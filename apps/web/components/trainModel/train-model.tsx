"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
//import { BACKEND_URL } from "../config";
import axios from "axios";
import TrainingForm from "./training-form";

export default function Train() {
  console.log("FRONTEND : Train Model start");
  const { getToken, user } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  const trainModel = async () => {
    console.log("FRONTEND : Inside Train Model Function");
    const token = await getToken();
    console.log("USER: ", user);
    console.log("TOKEN: ", token);
    await axios.post(
      `http://localhost:8080//v1/ai/train-model`,
      //`${BACKEND_URL}/v1/ai/train-model`,
      {
        /* Empty Request Body*/
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("FRONTEND : Train Mode ends");
  };

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
  return (
    <div>
      <TrainingForm />
    </div>
  );
}
