import { useEffect, useRef } from "react";

const CAROUSAL_TIMER_SECONDS = 5;
export default function Carousel({
  children,
  direction = "horizontal",
  animated = false,
}: {
  children: React.ReactNode[];
  direction?: "horizontal" | "vertical";
  animated?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const totalChildren = children.length;
  console.log({ totalChildren });

  return (
    <div ref={carouselRef} className={`carousel carousel__${direction}`}>
      {children.map((child, index) => {
        return (
          <Slide
            animated={animated}
            totalChild={totalChildren}
            index={index}
            key={index}
          >
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
  animated,
}: {
  children: React.ReactNode;
  index: number;
  totalChild: number;
  animated?: boolean;
}) {
  const elemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!animated) {
      //skip animation if not animated
      return;
    }
    const jumpTime = index * CAROUSAL_TIMER_SECONDS * 1000;
    const firstLoad = setTimeout(() => {
      elemRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }, jumpTime);
    const totalJumpTime = totalChild * CAROUSAL_TIMER_SECONDS * 1000;
    let timeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      timeout = setTimeout(() => {
        elemRef.current?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }, jumpTime);
    }, totalJumpTime);

    return () => {
      clearTimeout(timeout);
      clearTimeout(firstLoad);
      clearInterval(interval);
    };
  }, [animated, index, totalChild]);
  return (
    <div ref={elemRef} className="carousel__slide">
      {children}
    </div>
  );
}
