"use client";

import { databases } from "@/lib/appwrite/config";

import projects from "./projects.json";

import * as React from "react";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";
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
              <Card className="flex flex-col flex-grow w-full">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repoLink} target="_blank" rel="noreferrer">
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
                          <Badge variant="secondary">
                            {"+" + item.stackSecondary.length}
                          </Badge>
                        </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    <Button variant="ghost" asChild>
                      <Link
                        href={"/projects/websites/" + item.index}
                      >
                        More
                        <ArrowRight />
                      </Link>
                    </Button>
                    {item.deploymentLink && (
                      <Button asChild>
                        <Link
                          href={item.deploymentLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
                          <ExternalLink />
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
  )
}

function CardWebistes() {
  return (
    <Card className="w-full border-none shadow-none">
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

function CarouselTools() {
  const data = projects.tools;
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 xl:basis-1/2 2xl:basis-1/3">
            <div className="p-1 h-full flex">
              <Card className="flex flex-col flex-grow w-full">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repoLink} target="_blank" rel="noreferrer">
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
                        <Badge variant="secondary">
                          {"+" + item.stackSecondary.length}
                        </Badge>
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    <Button variant="ghost" asChild>
                      <Link
                        href={"/projects/tools/" + item.index}
                      >
                        More
                        <ArrowRight />
                      </Link>
                    </Button>
                    {item.docsLink && (
                      <Button asChild>
                        <Link
                          href={item.docsLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docs
                          <ExternalLink />
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

function CardTools() {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle>Tools</CardTitle>
        <CardDescription>Small but usefull utilities</CardDescription>
      </CardHeader>
      <CardContent>
        <CarouselTools />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

function CarouselRice() {
  const data = projects.rice;
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 xl:basis-1/2 2xl:basis-1/3">
            <div className="p-1 h-full flex">
              <Card className="flex flex-col flex-grow w-full">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repoLink} target="_blank" rel="noreferrer">
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
                        <Badge variant="secondary">
                          {"+" + item.stackSecondary.length}
                        </Badge>
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    <Button variant="ghost" asChild>
                      <Link
                        href={"/projects/rice/" + item.index}
                      >
                        More
                        <ArrowRight />
                      </Link>
                    </Button>
                    {item.docsLink && (
                      <Button asChild>
                        <Link
                          href={item.docsLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docs
                          <ExternalLink />
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

function CardRice() {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle>Linux Rice</CardTitle>
        <CardDescription>Rices & Configs for Linux, specifically NixOS</CardDescription>
      </CardHeader>
      <CardContent>
        <CarouselRice />
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
              <Card className="flex flex-col flex-grow w-full">
                <CardHeader>
                  <div className="flex flex-row justify-between">
                    <div className="pr-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="text-pretty">
                        {item.description}
                      </CardDescription>
                    </div>
                    <Link href={item.repoLink} target="_blank" rel="noreferrer">
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
                        <Badge variant="secondary">
                          {"+" + item.stackSecondary.length}
                        </Badge>
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-row items-center justify-between">
                    <Button variant="ghost" asChild>
                      <Link
                        href={"/projects/misc/" + item.index}
                      >
                        More
                        <ArrowRight />
                      </Link>
                    </Button>
                    {item.docsLink && (
                      <Button asChild>
                        <Link
                          href={item.docsLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docs
                          <ExternalLink />
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
    <Card className="w-full border-none shadow-none">
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
        <div className="relative w-full md:px-10 pb-20 flex flex-col justify-start gap-10">
          <CardWebistes />
          <CardTools />
          <CardRice />
          <CardMisc />
        </div>
      </div>
    </div>
  );
}