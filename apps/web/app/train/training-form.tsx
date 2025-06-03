"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AIModelTrainingForm() {
  const [formData, setFormData] = useState({
    modelName: "",
    subjectType: "Person",
    ageRange: "18-25",
    gender: "Male",
    features: [],
  });

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={cn(
          "w-102 min-h-[36rem] h-[36rem] rounded-xl",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
          "p-6 flex flex-col"
        )}
      >
        <h1 className="font-bold text-2xl">Train New Model</h1>
        <p>Create your personalized AI avatar</p>
      </div>
      {/* Background Effects */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {/* Form Panel */}
          <motion.div
            variants={itemVariants}
            className="bg-zinc-600 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 h-fit sticky top-8"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <motion.h1
                className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Train New Model
              </motion.h1>
              <motion.p
                className="text-zinc-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Create your personalized AI avatar
              </motion.p>
            </motion.div>

            <div className="space-y-6">
              {/* Basic Information */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✨</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-500">
                    Basic Information
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Model Name</Label>
                    <Input id="model-name" type="text"></Input>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Gender
                    </label>
                    <motion.select
                      value={formData.subjectType}
                      onChange={(e) =>
                        handleInputChange("subjectType", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <option>Man</option>
                      <option>Woman</option>
                      <option>Others</option>
                    </motion.select>

                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Gender
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Appearance Details */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-500">
                    Appearance Details
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Age Range
                    </label>
                    <motion.select
                      value={formData.ageRange}
                      onChange={(e) =>
                        handleInputChange("ageRange", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <option>18-25</option>
                      <option>26-35</option>
                      <option>36-45</option>
                      <option>46+</option>
                    </motion.select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Gender
                    </label>
                    <motion.select
                      value={formData.gender}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      whileFocus={{ scale: 1.01 }}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Non-binary</option>
                    </motion.select>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Preview Panel 
          <motion.div
            variants={itemVariants}
            className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-2xl font-bold text-cyan-500 mb-2">
                Upload Training Images
              </h2>
              <p className="text-zinc-400">
                Add 10-30 high-quality photos for best results
              </p>
            </motion.div>

            
            <motion.div
              className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                dragActive
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-zinc-700 hover:border-zinc-600"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              whileHover={{ scale: 1.01 }}
              variants={itemVariants}
            >
              <motion.div
                className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ y: dragActive ? -5 : 0 }}
              >
                <span className="text-3xl">📸</span>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dragActive
                  ? "Drop files here"
                  : "Drag & drop your photos here"}
              </h3>
              <p className="text-zinc-400">
                or click to browse • PNG, JPG up to 10MB each
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
            </motion.div>

            
            <motion.div variants={itemVariants} className="mt-8">
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.div
                    key={i}
                    variants={imageSlotVariants}
                    whileHover="hover"
                    className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center text-sm transition-all ${
                      i < uploadedFiles.length
                        ? "border-cyan-500 bg-cyan-500/20 text-cyan-500"
                        : "border-zinc-700 text-zinc-500 hover:border-zinc-600"
                    }`}
                  >
                    {i < uploadedFiles.length ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          delay: i * 0.05,
                        }}
                        className="text-2xl"
                      >
                        ✓
                      </motion.div>
                    ) : (
                      `Photo ${i + 1}`
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-zinc-900/50 rounded-xl p-6 border border-zinc-800"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <motion.div
                    className="text-2xl font-bold text-cyan-500"
                    key={uploadedFiles.length}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                  >
                    {uploadedFiles.length}
                  </motion.div>
                  <div className="text-sm text-zinc-400">Images</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-500">~15min</div>
                  <div className="text-sm text-zinc-400">Training Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-500">20</div>
                  <div className="text-sm text-zinc-400">Credits</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          */}
        </motion.div>
      </div>

      {/* Success Modal 
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center max-w-md mx-4"
            >
              <motion.div
                className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">Training Started!</h3>
              <p className="text-zinc-400 mb-4">Your AI model is now being trained. You'll receive a notification when it's ready.</p>
              <motion.button
                onClick={() => setShowSuccess(false)}
                className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 rounded-full bg-zinc-950 px-6 py-2 ring-1 ring-white/10">
                  View Progress
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      */}
    </div>
  );
}
