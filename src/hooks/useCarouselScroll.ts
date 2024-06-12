const scrollDirection = {
  true: {
    clientWidth: "clientHeight",
    scrollWidth: "scrollHeight",
    scrollLeft: "scrollTop",
    left: "top",
  },
  false: {
    clientWidth: "clientWidth",
    scrollWidth: "scrollWidth",
    scrollLeft: "scrollLeft",
    left: "left",
  },
} as const;

import { useEffect, useRef } from "react";
/**
 * A hook to automate the carousel scroll
 * @param parentRef ref of parent element whole child need to be automated
 * @param animated animation executed only if true
 * @param delayInSeconds delay per child card. Default to 5 seconds
 */
export function useCarouselScroll({
  delayInSeconds = 5,
  isVertical = false,
  parentRef,
  animated,
}: {
  parentRef: React.MutableRefObject<HTMLDivElement | null>;
  animated?: boolean;
  delayInSeconds: number;
  isVertical: boolean;
}) {
  const indexOfCurrentChildInView = useRef(1);
  const directions = scrollDirection[`${isVertical}`];
  useEffect(() => {
    if (!animated) {
      return;
    }

    //get all child nodes
    const childNodes = parentRef.current?.childNodes;
    const interval = setInterval(() => {
      //select a child node which is next in the list of elements
      const child = childNodes?.item(
        indexOfCurrentChildInView.current
      ) as HTMLDivElement;

      if (
        parentRef.current &&
        parentRef.current[directions.scrollWidth] >
          parentRef.current[directions.clientWidth]
      ) {
        const childRect = child.getBoundingClientRect();
        const parentCarouselRect = parentRef.current.getBoundingClientRect();
        const parentOffset = parentRef.current[directions.scrollLeft] || 0;
        const scrollOffset =
          childRect[directions.left] -
          parentCarouselRect[directions.left] +
          parentOffset;

        //scroll parent element to next child element with smooth behavior
        parentRef.current.scrollTo({
          [directions.left]: scrollOffset,
          behavior: "smooth",
        });
      }
      indexOfCurrentChildInView.current += 1;
      //bounce back to first card if there are no more cards in the list
      if (indexOfCurrentChildInView.current + 1 >= (childNodes?.length || 0)) {
        indexOfCurrentChildInView.current = 0;
      }
    }, delayInSeconds * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [animated, delayInSeconds, parentRef]);
}
