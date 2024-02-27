"use client";

import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1
            className={cn("text-xl font-bold font-sans", montserrat.className)}
          >
            GenAi
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.path}
                key={route.path}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium hover:bg-zinc-400 rounded-md transition duration-150 ease-in-out",
                  pathName === route.path && "bg-zinc-600"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon
                    className={cn("h5 w5 mr-3", route.color)}
                  ></route.icon>
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
