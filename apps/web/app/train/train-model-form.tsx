"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { UploadFile } from "./upload-file";

export default function TrainModelForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const handleCancel = () => {
    setUploadedFiles([]);
    // Clear the file input value to allow re-uploading the same file
    const fileInput = document.getElementById(
      "file-upload-handle"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
    console.log("Upload cancelled, files removed");
  };
  return (
    <div
      className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4  md:p-8 dark:bg-black
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Train New Model
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Create your personalized AI avatar
        </p>
      </motion.div>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="Age of the model"
              type="number"
              min="0"
              max="100"
              step="1"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="training-images">Training Images</Label>
          <div className="mx-auto w-full max-w-md bg-white p-4 rounded-2xl md:p-8 dark:bg-black shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none dark:border dark:border-gray-700/50 mt-2">
            <UploadFile
              files={uploadedFiles}
              onChange={(files) => {
                setUploadedFiles(files);
                console.log("Files uploaded:", files);
              }}
            />
          </div>
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

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
