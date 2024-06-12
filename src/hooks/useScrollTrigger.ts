import { useEffect } from "react";

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

/**
 *
 * @param parentRef ref of parent whose child require intersection observation
 * @param eventScrolledTOEnd function trigger an event when the scroll is finished
 */
export function useScrollTrigger(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  eventScrolledTOEnd?: (state: boolean) => void,
  isVertical = false
) {
  const direction = scrollDirection[`${isVertical}`];
  useEffect(() => {
    if (!eventScrolledTOEnd) {
      //only read scroll if there's a receiver function
      return;
    }

    parentRef.current?.addEventListener("scroll", (e) => {
      const element = e.target as HTMLDivElement;
      const scrollLeft = element[direction["scrollLeft"]];
      const scrollWidth = element[direction.scrollWidth];
      const clientWidth = element[direction.clientWidth];
      const offset = scrollLeft + clientWidth + 50;
      console.log({ offset, scrollWidth, isTrue: offset >= scrollWidth });
      if (offset >= scrollWidth) {
        // Trigger only when the user scrolled to the end
        eventScrolledTOEnd(true);
      } else {
        eventScrolledTOEnd(false);
      }
    });
  }, [direction, eventScrolledTOEnd, parentRef]);
}
