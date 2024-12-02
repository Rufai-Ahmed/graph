import Image from "next/image";
import React, { FC } from "react";

export interface iCard {
  img: string;
  text: string;
}

const carouselCard: FC<iCard> = ({ img, text }) => {
  return (
    <div className="w-full border h-[160px] bg-white rounded-[15px]">
      <Image
        className="w-full h-[75%] object-contain"
        src={img}
        alt={text}
        width={100}
        height={100}
      />

      <p className="w-full py-2 px-1 text-center text-[13px] border-t-[#CCCC] border-t-[1px]">{text}</p>
    </div>
  );
};

export { carouselCard as CarouselCard };
