import Image from "next/image";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import { GrNotification } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { BsSlashSquare } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = Inter({subsets: ["latin"]})

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GrHomeRounded />,
  },
  {
    title: "Explore",
    icon: <GrSearch />,
  },
  {
    title: "Notifications",
    icon: <GrNotification />,
  },
  {
    title: "Messages",
    icon: <GrMailOption />,
  },
  {
    title: "Grok",
    icon: <BsSlashSquare />,
  },
  {
    title: "Lists",
    icon: <PiListBold />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 pt-4 scroll">
          <div className=" text-3xl hover:bg-gray-800 h-fit w-fit px-5 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-2xl">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li className=" flex justify-start items-center gap-5 hover:bg-gray-800 rounded-full px-5 py-3 w-fit cursor-pointer" key={item.title}>
                  <span>{item.icon}</span>
                  <span className="text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
            <button className=" bg-[#1d9bf0] rounded-full w-4/5 px-5 py-3 mt-1 hover:bg-[#1083d0] text-xl">Post</button>
          </div>
        </div>
        <div className="col-span-6 border border-gray-500 overflow-y-scroll no-scrollbar h-screen">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">navigation</div>
      </div>
    </div>
  );
}
