"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

function ParticlesBg() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "light" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>
      <LinkPreviewAbout />
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={20}
        color={color}
        refresh
      />
    </div>
  );
}

function LinkPreviewAbout() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Based on{" "}
        <LinkPreview url="https://nextjs.org/" className="font-bold">
          Next.js
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://ui.shadcn.com/" className="font-bold">
          shadcn/ui,
        </LinkPreview>{" "}
        making a great UI possible without being a designer.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Refined with awesome effects by{" "}
        <LinkPreview url="https://magicui.design/" className="font-bold">
          Magic UI
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://ui.aceternity.com/" className="font-bold">
          Aceternity UI.
        </LinkPreview>{" "}
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Built by{" "}
        <LinkPreview
          url="https://www.github.com/thaemisch/"
          className="font-bold"
        >
          thaemisch
        </LinkPreview>{" "}
        with source code available on{" "}
        <LinkPreview
          url="https://github.com/thaemisch/website-v4"
          className="font-bold"
        >
          GitHub.
        </LinkPreview>{" "}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="h-full">
      <ParticlesBg />
    </div>
  );
}
