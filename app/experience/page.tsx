import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function ExperienceTimeline() {
  const data = [
    {
      title: "2021-2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Studying Computer Science at the University of Salzburg (PLUS).
            University itself has taught me little about the practical side of
            things, but it has given me a solid foundation in computer science.
            Therefor I used my free time to learn about new programming
            languages and technologies, which I then applied in my personal
            projects.
          </p>
        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            While in school, I joined the System Administration Club, a group of
            students led by only one teacher. Installing, configuring and
            maintaining almost 200 Linux Desktop PC&apos;s along with all
            required Networking from Ubiquiti Gear to custom firewalls were part
            of our weekly tasks.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During this time I also started selfhosting services like Nextcloud
            on an old mini PC. <br></br>I also started to learn about web
            development and built my first website, as part of a school project.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Now having some hands-on experience with Linux as a server, I
            started dual-booting Linux on my personal laptop. I haven&apos;t
            looked back since.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-full">
      <Timeline data={data} />
    </div>
  );
}

export default function Experience() {
  return (
    <div className="h-full w-full">
      <ExperienceTimeline />
    </div>
  );
}
