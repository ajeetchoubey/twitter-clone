import React from "react";
import Image from "next/image";
import { LuMessageCircle } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { PiUploadSimpleBold } from "react-icons/pi";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-l-0 border-b-0 border-r-0 border-gray-500 p-5 hover:bg-slate-950 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
        <div className=" col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/76274453?v=4"
            alt="user-image"
            height={50}
            width={50}
            className=" rounded-full"
          />
        </div>
        <div className=" col-span-11">
          <h1 className=" font-bold">Ajeet choubey</h1>
          <p>
            Hello Everyone, i am very very happy telling you that i am making
            clone of twitter
          </p>
          <div className=" mt-3">
            <div className=" flex flex-row justify-between items-center text-lg">
              <LuMessageCircle className=" text-slate-600" />
              <FaRetweet className=" text-slate-600" />
              <FaRegHeart className=" text-slate-600" />

              <div className="flex flex-row gap-5">
                <FaRegBookmark className=" text-slate-600" />
                <PiUploadSimpleBold className=" text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
