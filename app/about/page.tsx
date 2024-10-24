"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

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

function DotBackgroundAbout() {
  return (
    <div className="h-full w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <LinkPreviewAbout />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="h-full w-full">
      <DotBackgroundAbout />
    </div>
  );
}
