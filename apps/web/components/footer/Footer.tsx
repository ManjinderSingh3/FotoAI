"use client";
import Link from "next/link";
import { GithubIcon } from "./GithubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { TwitterIcon } from "./TwitterIcon";
import { FOOTER_ITEMS } from "./Footer-Items";
import { motion } from "framer-motion";
import { LogoIcon } from "../navbar/LogoIcon";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="mt-10 relative z-10 border-t border-gray-200 py-8 backdrop-blur-lg max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="space-y-8 md:col-span-2 ml-6">
          <div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-90"
              >
                <LogoIcon className="h-8 w-8 text-black dark:text-white" />
                <span className="hidden font-bold font-mono text-xl sm:inline-block mt-1.5">
                  FotoAI
                </span>
              </Link>
            </motion.div>
          </div>
          <p className="text-sm text-primary">
            Experience the Future of Image Creation with AI !
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/Manjindersinghw"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 px-0"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-5 w-5 " />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://github.com/ManjinderSingh3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
            >
              <span className="sr-only">Github</span>
              <GithubIcon className="h-5 w-5" />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://www.linkedin.com/in/manjinder-singh-dal/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid l:ml-10">
          <div className="grid grid-cols-2 sm:col-span-2 md:gap-8 ">
            <div className="lg:ml-16">
              <h3 className="text-sm font-semibold text-primary">Features</h3>
              <ul role="list" className="mt-4 space-y-4">
                {FOOTER_ITEMS.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:mt-0 lg:ml-16">
              <h3 className="text-sm font-semibold text-primary">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {FOOTER_ITEMS.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
            <p className="text-sm text-primary">
              © {year ?? ""} FotoAI. All rights reserved
            </p>
          </div>
    </div>
  );
};
