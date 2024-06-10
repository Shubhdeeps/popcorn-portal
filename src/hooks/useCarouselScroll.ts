// const scrollDirection = {
//     "vertical": {

//     },
//     "horizontal": {

//     }
// }

import { useEffect, useRef } from "react";
/**
 * A hook to automate the carousel scroll
 * @param parentRef ref of parent element whole child need to be automated
 * @param animated animation executed only if true
 * @param delayInSeconds delay per child card. Default to 5 seconds
 */
export function useCarouselScroll(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  animated?: boolean,
  delayInSeconds: number = 5
) {
  const indexOfCurrentChildInView = useRef(1);

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
        parentRef.current.scrollWidth > parentRef.current.clientWidth
      ) {
        const childRect = child.getBoundingClientRect();
        const parentCarouselRect = parentRef.current.getBoundingClientRect();
        const parentOffset = parentRef.current.scrollLeft || 0;
        const scrollOffset =
          childRect.left - parentCarouselRect.left + parentOffset;

        //scroll parent element to next child element with smooth behavior
        parentRef.current.scrollTo({
          left: scrollOffset,
          behavior: "smooth",
        });
      }
      //bounce back to first card if there are no more cards in the list
      if (indexOfCurrentChildInView.current + 1 >= (childNodes?.length || 0)) {
        indexOfCurrentChildInView.current = 0;
      } else {
        indexOfCurrentChildInView.current += 1;
      }
    }, delayInSeconds * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [animated, delayInSeconds, parentRef]);
}
