import { StarIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import Icons from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
// import { nFormatter } from "@/lib/utils";

export default async function Hero() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/moinulmoin/chadnext",
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.error(e));
  return (
    <section className="container">
      <div className="flex h-full min-h-[calc(100vh-140px)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(100vh-160px)] xl:py-24">
        <div className="mx-auto w-full max-w-2xl ">
          <a
            href="https://twitter.com/immoinulmoin/status/1661645764697919489"
            title="Follow Updates"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors duration-300 ease-linear animate-in slide-in-from-top hover:bg-blue-200"
          >
            <Icons.twitter className="h-5 w-5 text-blue-700" />
            <p className="text-sm font-semibold text-blue-700">
              Introducing WallpaperNext
            </p>
          </a>
          <h1 className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm duration-300 ease-linear animate-in zoom-in-50 dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900 md:text-7xl md:leading-[5rem]">
            <Balancer>Your Next Wallpaper is Here!</Balancer>
          </h1>
          <p className="mt-6 text-center text-muted-foreground md:text-xl">
            <Balancer>
              WallpaperNext has the best wallpapers. Daily additions of new,
              amazing, 4K HD wallpapers for desktop and phones.
            </Balancer>
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
            <Link className={buttonVariants() + " gap-x-2"} href="/signin">
              Get Started
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" }) + " gap-x-2"}
              href="https://github.com/moinulmoin/chadnext"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <span className="font-medium">{nFormatter(stars)}</span> */}
              <StarIcon width={16} />
              <span>on</span>
              <Icons.gitHub width={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
