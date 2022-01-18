import {
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";

const Footer = () => {
  return (
    <div className="flex p-3 shadow-md sticky bottom-0 z-10 bg-white border-t-2 items-center justify-evenly">
      <HomeIcon className="h-7" />
      <SearchIcon className="h-7" />
      <PlayIcon className="h-7" />
      <ShoppingBagIcon className="h-7" />
      <UserCircleIcon className="h-7" />
    </div>
  );
};

export default Footer;
