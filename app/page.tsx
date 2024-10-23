"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border scale-75 md:scale-100">
        <CardItem translateZ="100" className="w-full mt-2">
          <Image
            src="https://avatars.githubusercontent.com/u/71187051?v=4"
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="75"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-6"
        >
          Tim Hämisch
        </CardItem>
        <CardItem
          as="p"
          translateZ="50"
          className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-300"
        >
          CompSci Student // Software Dev // Linux Enthusiast
        </CardItem>
        <div className="flex justify-between items-center mt-12">
          <CardItem
            translateZ={25}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Button asChild>
              <Link
                href="https://www.linkedin.com/in/tim-h%C3%A4misch-839247334"
                target="_blank"
              >
                <Linkedin />
                LinkedIn
              </Link>
            </Button>
          </CardItem>
          <CardItem
            translateZ={25}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Button asChild>
              <Link href="mailto:tim@thaemisch.net" target="_blank">
                <Mail />
                Email
              </Link>
            </Button>
          </CardItem>
          <CardItem
            translateZ={25}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Button asChild>
              <Link
                href="https://github.com/thaemisch/website-v4"
                target="_blank"
              >
                <Github />
                GitHub
              </Link>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function ParticlesBg() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "light" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>
      <ThreeDCardDemo />
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

export default function Home() {
  return (
    <div className="h-full">
      <ParticlesBg />
    </div>
  );
}
