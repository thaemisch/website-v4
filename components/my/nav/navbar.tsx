import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { MainNav } from "@/components/my/nav/main-nav";
import { MobileNav } from "@/components/my/nav/mobile-nav";
import { ModeToggle } from "@/components/my/nav/mode-toggle";
import { Button } from "@/components/ui/button";


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-screen flex flex-row justify-evenly border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-4 flex flex-row justify-evenly h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={"https://github.com/thaemisch/website-v4"}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" className="h-8 w-8 px-0">
                <FaGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
