import Image from "next/image";
import React from "react";

const Story = ({ name, src }) => {
  return (
    <div className=" w-16 text-center">
      <Image
        className="rounded-full"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p className="text-sm truncate">{name}</p>
    </div>
  );
};

export default Story;
