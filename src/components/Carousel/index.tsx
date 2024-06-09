import { useEffect, useRef } from "react";

enum DirectionAndFlex {
  horizontal = "flex-row",
  vertical = "flex-col",
}

const CAROUSAL_TIMER_SECONDS = 5;
export default function Carousel({
  children,
  direction = "horizontal",
}: {
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
}) {
  const directionClx = DirectionAndFlex[direction];
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const totalChildren = children.length;
  console.log({ totalChildren });

  return (
    <div ref={carouselRef} className={`carousel ${directionClx}`}>
      {children.map((child, index) => {
        return (
          <Slide totalChild={totalChildren} index={index} key={index}>
            {child}
          </Slide>
        );
      })}
    </div>
  );
}

function Slide({
  children,
  index,
  totalChild,
}: {
  children: React.ReactNode;
  index: number;
  totalChild: number;
}) {
  const elemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const jumpTime = index * CAROUSAL_TIMER_SECONDS * 1000;
    const firstLoad = setTimeout(() => {
      elemRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }, jumpTime);
    const totalJumpTime = totalChild * CAROUSAL_TIMER_SECONDS * 1000;
    let timeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      timeout = setTimeout(() => {
        elemRef.current?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }, jumpTime);
    }, totalJumpTime);

    return () => {
      clearTimeout(timeout);
      clearTimeout(firstLoad);
      clearInterval(interval);
    };
  }, [index, totalChild]);
  return (
    <div ref={elemRef} className="carousel__slide">
      {children}
    </div>
  );
}
