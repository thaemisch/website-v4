"use client";

import projects from "./projects.json";

import * as React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function CarouselWebsites() {
  const data = projects.websites;
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 w-full">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 xl:basis-1/2 2xl:basis-1/3">
            <div className="p-1 h-full flex">
              <Card className="flex flex-col flex-grow">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repolink} target="_blank" rel="noreferrer">
                      <Button variant="ghost" className="h-10 w-10 px-0">
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-end my-0 py-0">
                  <div className="gap-2 w-full">
                    <ScrollArea className="w-96 whitespace-nowrap rounded-md">
                      <div className="flex w-max space-x-4 py-6 px-2 select-none">
                        {item.stackPrimary.map((stackP, index) => (
                          <Badge key={index}>{stackP}</Badge>
                        ))}
                        {item.stackSecondary.map((stackS, index) => (
                          <Badge variant="secondary" key={index}>
                            {stackS}
                          </Badge>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    {item.infolink && (
                      <Button variant="ghost" asChild>
                        <Link
                          href={item.infolink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          More
                          <ArrowRight />
                        </Link>
                      </Button>
                    )}
                    {item.deploymentlink && (
                      <Button asChild>
                        <Link
                          href={item.deploymentlink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
                          <ArrowRight />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="relative -bottom-10 left-6 scale-150" />
      <CarouselNext className="relative -bottom-10 left-12 scale-150" />
    </Carousel>
  );
}

function CardWebistes() {
  return (
    <Card className="w-full border-none">
      <CardHeader>
        <CardTitle>Websites</CardTitle>
        <CardDescription>Some of the websites I&apos;ve built.</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <CarouselWebsites />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

function CarouselMisc() {
  const data = projects.misc;
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 xl:basis-1/2 2xl:basis-1/3">
            <div className="p-1 h-full flex">
              <Card className="flex flex-col flex-grow">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repolink} target="_blank" rel="noreferrer">
                      <Button variant="ghost" className="h-10 w-10 px-0">
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-end my-0 py-0">
                  <div className="gap-2 w-full">
                    <ScrollArea className="w-96 whitespace-nowrap rounded-md">
                      <div className="flex w-max space-x-4  py-6 px-2 select-none">
                        {item.stackPrimary.map((stackP, index) => (
                          <Badge key={index}>{stackP}</Badge>
                        ))}
                        {item.stackSecondary.map((stackS, index) => (
                          <Badge variant="secondary" key={index}>
                            {stackS}
                          </Badge>
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    {item.infolink && (
                      <Button variant="ghost" asChild>
                        <Link
                          href={item.infolink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          More
                          <ArrowRight />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="relative -bottom-10 left-6 scale-150" />
      <CarouselNext className="relative -bottom-10 left-12 scale-150" />
    </Carousel>
  );
}

function CardMisc() {
  return (
    <Card className="w-full border-none">
      <CardHeader>
        <CardTitle>Misc</CardTitle>
        <CardDescription>Some miscellaneous projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <CarouselMisc />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default function Projects() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-background md:px-10">
        <div className="w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">
            My Projects
          </h2>
          <p className="text-sm md:text-base max-w-sm">
            Here you can find some of my personal projects.
          </p>
        </div>
        <div className="relative w-full md:px-10 pb-20 flex flex-col justify-start gap-10">
          <CardWebistes />
          <CardMisc />
        </div>
      </div>
    </div>
  );
}