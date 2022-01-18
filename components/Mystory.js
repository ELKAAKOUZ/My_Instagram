import { PlusCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Mystory = () => {
  return (
    <div className="relative text-center w-20 p-2">
      <Image
        className=" rounded-full border-red-700"
        src="/myphoto.jpeg"
        width={50}
        height={50}
        layout="fixed"
      />
      <PlusCircleIcon className="h-7 text-blue-600 absolute top-9 right-4" />
      <p className="truncate text-sm">My Story</p>
    </div>
  );
};

export default Mystory;
