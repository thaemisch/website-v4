import React from "react";

export default function Skills() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-background md:px-10">
        <div className="w-full mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">
            My Skills
          </h2>
          <p className="text-sm md:text-base max-w-sm">
            Here you can find some of my skills.
          </p>
        </div>
        <div className="relative w-full md:px-10 pb-20 flex flex-col justify-start gap-10">
          Work In Progress
        </div>
      </div>
    </div>
  );
}
