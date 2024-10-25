"use client";

import * as React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-400/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border scale-75 md:scale-100">
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
          className="text-xl font-bold text-neutral-600 dark:text-white mt-6 select-none"
        >
          Tim Hämisch
        </CardItem>
        <CardItem
          as="div"
          translateZ="50"
          className="mt-4 w-full flex flex-row justify-between select-none"
        >
          <Badge variant="outline">CompSci Student</Badge>
          <Badge variant="outline">Software Developer</Badge>
          <Badge variant="outline">Linux Enthusiast</Badge>
        </CardItem>
        <div className=" w-full flex justify-between items-center mt-8 mb-2">
          <CardItem
            translateZ={25}
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
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
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
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
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <Button asChild>
              <Link href="https://github.com/thaemisch" target="_blank">
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

function DotBackgroundDemo() {
  return (
    <div className="h-full w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <ThreeDCardDemo />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="h-full w-full">
      <DotBackgroundDemo />
    </div>
  );
}
