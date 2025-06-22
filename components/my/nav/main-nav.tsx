"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2">
        <img
          src="https://avatars.githubusercontent.com/u/71187051?v=4"
          alt="Logo"
          className="w-6 h-6 rounded-lg"
        />
        <span className="hidden font-bold md:inline-block">thaemisch</span>
      </Link>
      <nav className="flex items-center gap-4 font-medium text-sm gap-6">
        <Link
          href="/projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/projects" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/skills" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Skills
        </Link>
        <Link
          href="/experience"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/experience"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Experience
        </Link>
      </nav>
    </div>
  );
}
