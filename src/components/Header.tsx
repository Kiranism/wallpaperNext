"use client";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/shared/theme-toggle";
// import UserNav from "../user-nav";

export default function Header() {
  const scrolled = useScroll(50);

  return (
    <header
      className={cn(
        "sticky top-0 z-30  w-full bg-transparent ",
        scrolled
          ? " h-16 border-b backdrop-blur-xl  transition-all duration-300 ease-in-out"
          : " h-20"
      )}
    >
      <div className="container h-full">
        <div className="flex h-full  items-center justify-between">
          <Link href="/" className="flex items-center text-2xl font-bold">
            {/* <Image
              src="/chad-next.png"
              alt="WallpaperNext logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm object-contain"
            /> */}
            <p>WN</p>
          </Link>
          <div className=" flex items-center gap-x-2">
            <ThemeToggle />
            {/* {currentUser ? (
              <UserNav user={currentUser} />
            ) : (
              <Link href="/signin" className={buttonVariants()}>
                Sign In
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
}
