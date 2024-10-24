"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function CardWebistes() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Websites</CardTitle>
        <CardDescription>Some of the websites I&apos;ve built.</CardDescription>
      </CardHeader>
      <CardContent>Placeholder</CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-white dark:bg-neutral-950 md:px-10">
        <div className="w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            My Projects
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Here you can find some of my personal projects.
          </p>
        </div>
        <div className="relative w-full md:px-10 pb-20">
          <CardWebistes />
        </div>
      </div>
    </div>
  );
}
