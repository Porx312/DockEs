import { ModeToggle } from "@/components/theme-toggle";
import { AtSign } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";
import AlgoliaSearch from "./algolia-search";
import HeaderProfileBtn from "./clerk/HeaderProfileBtn";
import BtnNavbar from "./clerk/BtnNavbar";
import { Logo } from "./Logo";

export const NAVLINKS = [
  {
    title: "Documentacion",
    href: `/docs`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>
        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <AlgoliaSearch {...algolia_props} />
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <Link
                href="https://www.threads.com/@porxd3?hl=es"
                type="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <AtSign className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
              <BtnNavbar />
              <HeaderProfileBtn />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-[14.5px] text-stone-300/85"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
