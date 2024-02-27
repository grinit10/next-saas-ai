import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, MusicIcon, Code, Settings } from "lucide-react";

export const routes = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
      color: "text-sky-500",
      hideInDashBoard: true,
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
      hideInDashBoard: true,
    },
  ];