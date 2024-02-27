"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    path: "/conversation",
    icon: MessageSquare,
    color: "text-violet-500",
  },
  {
    label: "Image generation",
    path: "/image",
    icon: ImageIcon,
    color: "text-pink-500",
  },
  {
    label: "Video generation",
    path: "/video",
    icon: VideoIcon,
    color: "text-orange-700",
  },
  {
    label: "Music generation",
    path: "/music",
    icon: MusicIcon,
    color: "text-emerald-500",
  },
  {
    label: "Code generation",
    path: "/code",
    icon: Code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const SideBar = () => {
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
                className="text-sm group flex p-3 w-full justify-start font-medium hover:bg-zinc-400 rounded-md transition duration-150 ease-in-out"
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
