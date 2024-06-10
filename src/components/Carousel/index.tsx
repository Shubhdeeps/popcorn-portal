import { useCarouselScroll } from "@/hooks/useCarouselScroll";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import React, { useRef } from "react";

export default function Carousel({
  children,
  direction = "horizontal",
  animated = false,
  eventScrolledTOEnd,
}: {
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  animated?: boolean;
  eventScrolledTOEnd?: (reachedEnd: boolean) => void;
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  useScrollTrigger(carouselRef, eventScrolledTOEnd);
  useCarouselScroll(carouselRef, animated);

  return (
    <div ref={carouselRef} className={`carousel carousel__${direction}`}>
      {children.map((child, index) => {
        const newElement = React.createElement("div", {
          className: "carousel__slide",
          children: child,
          key: index,
          ref: React.createRef<HTMLDivElement>(),
        });
        return newElement;
      })}
    </div>
  );
}

// Deprecated -> better approach implemented
// function Slide({
//   children,
//   index,
//   totalChild,
//   animated,
// }: {
//   children: React.ReactNode;
//   index: number;
//   totalChild: number;
//   animated?: boolean;
// }) {
//   const elemRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!animated) {
//       //skip animation if not animated
//       return;
//     }
//     const jumpTime = index * CAROUSAL_TIMER_SECONDS * 1000;
//     // const firstLoad = setTimeout(() => {
//     //   elemRef.current?.scrollIntoView({
//     //     behavior: "smooth",
//     //     inline: "start",
//     //   });
//     // }, jumpTime);
//     const totalJumpTime = totalChild * CAROUSAL_TIMER_SECONDS * 1000;
//     let timeout: NodeJS.Timeout;

//     const interval = setInterval(() => {
//       timeout = setTimeout(() => {
//         elemRef.current?.scrollIntoView({
//           behavior: "smooth",
//           inline: "start",
//         });
//       }, jumpTime);
//     }, totalJumpTime);

//     return () => {
//       clearTimeout(timeout);
//       // clearTimeout(firstLoad);
//       clearInterval(interval);
//     };
//   }, [animated, index, totalChild]);
//   return (
//     <div ref={elemRef} className="carousel__slide">
//       {children}
//     </div>
//   );
// }
