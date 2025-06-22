"use client";

import { databases } from "@/lib/appwrite/config";

import Link from "next/link";
import projects from "../../projects.json";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface Params {
  slug: string[];
}

export default function Project({ params }: { params: Params }) {
  const project = projects.websites.findIndex(
    (project) => project.index === params.slug[0]
  );
  if (project === -1) {
    return <div>Not found</div>;
  }
  const item = projects.websites[project];

  return (
    <div className="w-full h-full">
      <div className="w-full bg-background px-4 md:px-10">
        <div className="w-full mx-auto py-20 md:px-8 lg:px-10 min-h-96">
          <h2 className="text-4xl mb-4 text-black dark:text-white max-w-4xl flex flex-row items-center align-middle gap-1">
            {item.title}
            <Link
              className="align-middle"
              href={item.repoLink}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost">
                <FaGithub />
              </Button>
            </Link>
            {item.deploymentLink && (
              <Link
                className="align-middle"
                href={item.deploymentLink}
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  <ExternalLink />
                </Button>
              </Link>
            )}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
            {item.description}
          </p>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 py-6 select-none">
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
        <div className="w-full flex flex-col xl:flex-row md:px-10 gap-10">
          <div className="w-full flex flex-col gap-10">
            {item.advanced?.description}
          </div>
          <div className="w-full flex flex-col gap-10">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Contributors</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                {item.advanced?.contributors.map((contributor: { github: string; role?: string }, index: any) => (
                  <Link
                    key={index}
                    className="align-middle"
                    href={"https://github.com/" + contributor.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="ghost">
                      <FaGithub />
                      {contributor.github + " "}
                      {contributor.role && (
                        <Badge variant="outline" className="select-none">
                          {contributor.role}
                        </Badge>
                      )}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
            {item.advanced?.note && (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Note</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                  {item.advanced?.note}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
