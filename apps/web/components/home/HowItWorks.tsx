import { IconUpload, IconDownload, IconSparkles } from "@tabler/icons-react";
import { ReactNode } from "react";

// Reusable step card component
interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-900 p-6 rounded-2xl overflow-hidden max-w-xl transition-all duration-300 hover:ring-2 hover:ring-cyan-900/50 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
      {/* Background Grids Pattern */}
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
          >
            <defs>
              <pattern
                id="step-pattern"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                x="-12"
                y="4"
              >
                <path d="M.5 20V.5H20" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#step-pattern)"
            ></rect>
            <svg x="-12" y="4" className="overflow-visible">
              <rect
                strokeWidth="0"
                width="21"
                height="21"
                x="160"
                y="20"
              ></rect>
              <rect
                strokeWidth="0"
                width="21"
                height="21"
                x="140"
                y="120"
              ></rect>
              <rect
                strokeWidth="0"
                width="21"
                height="21"
                x="160"
                y="120"
              ></rect>
              <rect
                strokeWidth="0"
                width="21"
                height="21"
                x="160"
                y="20"
              ></rect>
              <rect
                strokeWidth="0"
                width="21"
                height="21"
                x="180"
                y="40"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 text-white mb-4">{icon}</div>
        <p className="text-base font-bold text-white relative z-20">{title}</p>
        <p className="text-neutral-400 mt-4 text-base font-normal relative z-20 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: <IconUpload className="h-12 w-12 text-white" />,
      title: "Upload Your Photos",
      description:
        "Upload your photos to get started with our AI-powered image processing",
    },
    {
      icon: <IconSparkles className="h-12 w-12 text-white" />,
      title: "AI Magic Happens",
      description:
        "Our advanced AI technology transforms your photos into stunning portraits with professional quality.",
    },
    {
      icon: <IconDownload className="h-12 w-12 text-white" />,
      title: "Download & Share",
      description:
        "Instantly download and share your enhanced portraits on various platforms.",
    },
  ];

  return (
    <div className="w-full px-8 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
