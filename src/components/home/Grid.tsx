import React from "react";
import PageWrapper from "../PageWrapper";
import Image from "next/image";
import { HometestimonialData } from "@/constants/Data";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  backgroundColor: string;
  image: string;
}

interface GridProps {
  testimonials?: Testimonial[];
}

const Grid: React.FC<GridProps> = () => {
  return (
    <PageWrapper container="full" padding="none">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-0">
        {HometestimonialData.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Image with overlay */}
            <div
              className={`
                group relative w-full h-full overflow-hidden
                ${index === 0 ? "order-1 md:order-1 lg:order-1 xl:order-1" : ""}
                ${index === 1 ? "order-3 md:order-4 lg:order-3 xl:order-3" : ""}
                ${index === 2 ? "order-5 md:order-5 lg:order-4 xl:order-6" : ""}
                ${index === 3 ? "order-7 md:order-8 lg:order-6 xl:order-8" : ""}
              `}
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={`Background image for ${item.author}'s testimonial`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority={index === 0}
              />

              {/* Black overlay + text */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <q className="text-white text-sm lg:text-base italic animate-fadeInUp">
                  {item.quote}
                </q>
                <p className="text-white mt-3 text-base lg:text-lg font-semibold uppercase animate-fadeInUp delay-200">
                  - {item.author}
                </p>
              </div>
            </div>

            {/* Original testimonial block (kept, but optional) */}
            <div
              className={`
                h-full w-full p-4 lg:p-6 2xl:p-8 flex flex-col items-start justify-center gap-4 text-left
                ${index === 0 ? "order-2 md:order-2 lg:order-2 xl:order-2" : ""}
                ${index === 1 ? "order-4 md:order-3 lg:order-4 xl:order-4" : ""}
                ${index === 2 ? "order-6 md:order-6 lg:order-5 xl:order-5" : ""}
                ${index === 3 ? "order-8 md:order-7 lg:order-7 xl:order-7" : ""}
              `}
              style={{ backgroundColor: item.backgroundColor }}
            >
              <q className="text-sm lg:text-base">{item.quote}</q>
              <p className="text-lg text-left w-full uppercase">
                - {item.author}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Grid;
