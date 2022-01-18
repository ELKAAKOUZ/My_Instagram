import {
  BookmarkIcon,
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Post = ({ image, name, logo }) => {
  return (
    <div className="p-3 mt-3 mb-3">
      <div className="flex mb-3 items-center space-x-2">
        <Image
          className="rounded-full"
          src={logo}
          width={40}
          height={40}
          layout="fixed"
        />
        <p className="font-bold underline">{name}</p>
      </div>
      <div className="text-center">
        <Image src={image} width={400} height={300} layout="fixed" />
      </div>
      <div className="flex p-2 items-center justify-between">
        <div className="flex items-center space-x-3">
          <ThumbUpIcon className="h-7" />
          <ChatAltIcon className="h-7" />
          <ShareIcon className="h-7" />
        </div>
        <BookmarkIcon className="h-7" />
      </div>
    </div>
  );
};

export default Post;
