"use client";

import { databases } from "@/lib/appwrite/config";

import Link from "next/link";
import projects from "../../projects.json";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingSlug from "../../loadingSlug";
import React from "react";

interface Params {
  slug: string[];
}

export default function Project({ params }: { params: Params }) {
  React.useEffect(() => {
    init();
  }, []);

  const databaseWebsites = process.env.NEXT_PUBLIC_AW_DATABASE_ID_WEBSITES!;
  const collectionWebsites = process.env.NEXT_PUBLIC_AW_COLLECTION_ID_WEBSITES!;

  const [item, setItem] = React.useState<any>(null);
  const [contributors, setContributors] = React.useState<any>(null);

  const init = async () => {
    const response = await databases.listDocuments(databaseWebsites, collectionWebsites);
    const foundItem = response.documents.find((doc) => doc.index === params.slug[0]);
    setItem(foundItem);
    if (foundItem) {
      try {
        const contributorsX = foundItem.advancedContributors.map((item: string) => {
          const parsedItem = JSON.parse(item.replace(/'/g, '"'));
          return {
            github: parsedItem.github,
            role: parsedItem.role
          };
        });
        setContributors(contributorsX);
      } catch (e) {
        console.error("Failed to parse contributors JSON:", e);
      }
    }
  };

  if (!item) {
    return <LoadingSlug />;
  }

  return (
    <div className="w-full h-full">
      <div className="w-full bg-background md:px-10">
        <div className="w-full mx-auto py-20 px-4 md:px-8 lg:px-10 min-h-96">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl flex flex-row items-center align-middle gap-1">
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
                  <ArrowRight />
                </Button>
              </Link>
            )}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
            {item.description}
          </p>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 py-6 select-none">
              {item.stackPrimary.map((stackP: string, index: string) => (
                <Badge key={index}>{stackP}</Badge>
              ))}
              {item.stackSecondary.map((stackS: string, index: string) => (
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
            {item.advancedDescription}
          </div>
          <div className="w-full flex flex-col gap-10">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Contributors</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                {contributors.map((contributor: { github: string; role?: string }, index: any) => (
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
            {item.advancedNote && (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Note</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                  {item.advancedNote}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
