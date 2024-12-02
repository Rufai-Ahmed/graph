"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselCard, iCard } from "@/components/ui/carousel-card";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselSize() {
  const arrCard: iCard[] = [
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
    {
      img: "/images/1.png",
      text: "LoRaWAN to Ethernet",
    },
    {
      img: "/images/2.png",
      text: "Curtain & Blind Control",
    },
  ];

  return (
    <div className="flex w-full justify-center items-center h-screen">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1000px]"
      >
        <CarouselContent>
          {arrCard.map((el: iCard, index: number) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-[160px]">
              <CarouselCard {...el} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
