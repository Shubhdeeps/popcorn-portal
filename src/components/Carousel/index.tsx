import React, { useEffect, useRef } from "react";

type Element = React.DetailedReactHTMLElement<
  {
    className: string;
    children: React.ReactNode;
    key: number;
    ref: React.RefObject<HTMLDivElement>;
  },
  HTMLDivElement
>;
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
  const refArray = useRef<Element[]>([]);
  const indexOfCurrentChildInView = useRef(0);
  const totalChildren = children.length;

  useEffect(() => {
    if (!animated) {
      return;
    }

    const interval = setInterval(() => {
      //current element in focus
      const element = refArray.current[indexOfCurrentChildInView.current];
      //type cast the element
      const ref = element.ref as React.MutableRefObject<HTMLDivElement>;

      if (ref.current) {
        const element = ref.current;

        if (
          carouselRef.current &&
          carouselRef.current.scrollWidth > carouselRef.current.clientWidth
        ) {
          const elementRect = element.getBoundingClientRect();
          const containerRect = carouselRef.current.getBoundingClientRect();
          const parentOffset = carouselRef.current.scrollLeft || 0;
          const scrollOffset =
            elementRect.left - containerRect.left + parentOffset;

          carouselRef.current.scrollTo({
            left: scrollOffset,
            behavior: "smooth",
          });
        }
      }

      indexOfCurrentChildInView.current += 1;
      if (indexOfCurrentChildInView.current >= refArray.current.length) {
        //restart to zero
        indexOfCurrentChildInView.current = 0;
      }
    }, CAROUSAL_TIMER_SECONDS * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [animated, totalChildren]);

  return (
    <div ref={carouselRef} className={`carousel carousel__${direction}`}>
      {children.map((child, index) => {
        // const newRef = React.createRef<HTMLDivElement>();
        const newElement = React.createElement("div", {
          className: "carousel__slide",
          children: child,
          key: index,
          ref: React.createRef<HTMLDivElement>(),
        });
        if (animated) {
          refArray.current = [...refArray.current, newElement];
        }
        return newElement;
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
    // const firstLoad = setTimeout(() => {
    //   elemRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //     inline: "start",
    //   });
    // }, jumpTime);
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
      // clearTimeout(firstLoad);
      clearInterval(interval);
    };
  }, [animated, index, totalChild]);
  return (
    <div ref={elemRef} className="carousel__slide">
      {children}
    </div>
  );
}
