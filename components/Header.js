import Image from "next/image";
import React from "react";
import {
  BeakerIcon,
  ChatIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="flex bg-white  sticky top-0 z-10 items-center justify-between p-3 ">
      <Image src="/instagram_logo.png" width={120} height={40} layout="fixed" />
      <div className="flex items-center space-x-3">
        <PlusCircleIcon className="h-7  text-gray-400 " />
        <HeartIcon className="h-7 text-gray-400" />
        <ChatIcon className="h-7 text-gray-400" />
      </div>
    </div>
  );
};

export default Header;
