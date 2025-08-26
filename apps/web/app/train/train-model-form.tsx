"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { UploadFile } from "./upload-file";
import { TrainModelDTO } from "../../../../packages/common/types";

export default function TrainModelForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [modelData, setModelData] = useState<TrainModelDTO>({
    name: "",
    gender: "Man",
    age: 25,
    ethinicity: "White",
    eyeColor: "Brown",
    bald: false,
    zipUrl: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", modelData);
  };

  const handleCancel = () => {
    setUploadedFiles([]);
    setModelData({
      name: "",
      gender: "Man",
      age: 25,
      ethinicity: "White",
      eyeColor: "Brown",
      bald: false,
      zipUrl: "",
    });
    const fileInput = document.getElementById(
      "file-upload-handle"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
    console.log("Upload cancelled, files removed");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-18">
      {/* Left Panel - Train New Model Form */}
      <div className="flex-1">
        <div className="shadow-input rounded-2xl bg-white p-6 md:p-8 dark:bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_1px_rgba(255,255,255,0.05),0_2px_4px_rgba(255,255,255,0.02)]">
          <motion.div whileHover={{ scale: 1.02 }} className="text-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              Train New Model
            </h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Create a custom AI model with your photos
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <LabelInputContainer>
                <Label htmlFor="name">Model Name</Label>
                <Input
                  id="name"
                  placeholder="Enter model name"
                  value={modelData.name}
                  onChange={(e) =>
                    setModelData({ ...modelData, name: e.target.value })
                  }
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  placeholder="25"
                  type="number"
                  min="0"
                  max="100"
                  value={modelData.age}
                  onChange={(e) =>
                    setModelData({
                      ...modelData,
                      age: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </LabelInputContainer>
            </div>

            <div className="flex">
              <LabelInputContainer>
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={modelData.gender}
                  onValueChange={(value: "Man" | "Woman" | "Others") =>
                    setModelData({ ...modelData, gender: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Man">Man</SelectItem>
                    <SelectItem value="Woman">Woman</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="ethnicity">Ethnicity</Label>
                <Select
                  value={modelData.ethinicity}
                  onValueChange={(
                    value:
                      | "White"
                      | "Black"
                      | "AsianAmerican"
                      | "EastAsian"
                      | "SouthEastAsian"
                      | "SouthAsian"
                      | "MiddleEastern"
                      | "Pacific"
                      | "Hispanic"
                  ) => setModelData({ ...modelData, ethinicity: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="White">White</SelectItem>
                    <SelectItem value="Black">Black</SelectItem>
                    <SelectItem value="AsianAmerican">
                      Asian American
                    </SelectItem>
                    <SelectItem value="EastAsian">East Asian</SelectItem>
                    <SelectItem value="SouthEastAsian">
                      South East Asian
                    </SelectItem>
                    <SelectItem value="SouthAsian">South Asian</SelectItem>
                    <SelectItem value="MiddleEastern">
                      Middle Eastern
                    </SelectItem>
                    <SelectItem value="Pacific">Pacific</SelectItem>
                    <SelectItem value="Hispanic">Hispanic</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="eyeColor">Eye Color</Label>
                <Select
                  value={modelData.eyeColor}
                  onValueChange={(value: "Brown" | "Blue" | "Hazel" | "Gray") =>
                    setModelData({ ...modelData, eyeColor: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Brown">Brown</SelectItem>
                    <SelectItem value="Blue">Blue</SelectItem>
                    <SelectItem value="Hazel">Hazel</SelectItem>
                    <SelectItem value="Gray">Gray</SelectItem>
                  </SelectContent>
                </Select>
              </LabelInputContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <LabelInputContainer>
                <Label htmlFor="bald">Bald</Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="bald"
                    checked={modelData.bald}
                    onCheckedChange={(checked) =>
                      setModelData({ ...modelData, bald: checked })
                    }
                  />
                  <span className="text-sm">
                    {modelData.bald ? "Yes" : "No"}
                  </span>
                </div>
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="training-images">Upload Model Images</Label>
              <div className="mx-auto w-full max-w-md bg-white p-4 rounded-2xl md:p-8 dark:bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-gray-700/50 mt-2">
                <UploadFile
                  files={uploadedFiles}
                  onChange={(files) => {
                    setUploadedFiles(files);
                    // You'll need to handle zipUrl generation here
                    console.log("Files uploaded:", files);
                  }}
                />
              </div>
            </LabelInputContainer>

            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4">
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-center rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                  onClick={handleCancel}
                >
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Cancel
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className="group/btn shadow-input relative flex h-10 w-full items-center justify-center rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                >
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Train Model
                  </span>
                  <BottomGradient />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Image Preview */}
      <div className="flex-1 flex">
        <div className="shadow-input rounded-2xl bg-white p-6 md:p-8 dark:bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_1px_rgba(255,255,255,0.05),0_2px_4px_rgba(255,255,255,0.02)] w-full">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                Image Preview
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
                Preview of your uploaded images
              </p>

              {uploadedFiles.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 text-gray-400 mb-4">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    No Images uploaded
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs text-center">
                    Upload Images using the form on the left to see previews
                    here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
