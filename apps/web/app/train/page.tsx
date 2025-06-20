"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { UploadFile } from "./upload-file";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AIModelTrainingForm } from "./training-form";


export default function Train() {
  const { getToken } = useAuth();
  const [files, setFiles] = useState<File[]>([]);

  const trainModel = async () => {
    const token = getToken;
    await axios.post(`${BACKEND_URL}/v1/ai/train-model`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
  return (
    <div>
      <AIModelTrainingForm />
      {/*
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg m-5">
        <UploadFile onChange={handleFileUpload} />
      </div>
      <Button onClick={trainModel}>Upload File</Button>

       <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />
      </ul> */}
    </div>
  );
}

// interface GridItemProps {
//   area: string;
//   icon: React.ReactNode;
//   title: string;
//   description: React.ReactNode;
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2 ">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
//                 {title}
//               </h3>
//               <h2
//                 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem]
//               md:text-base/[1.375rem]  text-black dark:text-neutral-400"
//               >
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };
