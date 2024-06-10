import { useEffect } from "react";

/**
 *
 * @param parentRef ref of parent whose child require intersection observation
 * @param eventScrolledTOEnd function trigger an event when the scroll is finished
 */
export function useScrollTrigger(
  parentRef: React.MutableRefObject<HTMLDivElement | null>,
  eventScrolledTOEnd?: (state: boolean) => void
) {
  useEffect(() => {
    if (!eventScrolledTOEnd) {
      //only read scroll if there's a receiver function
      return;
    }
    parentRef.current?.addEventListener("scroll", (e) => {
      const element = e.target as HTMLDivElement;
      const scrollLeft = element.scrollLeft;
      const scrollWidth = element.scrollWidth;
      const clientWidth = element.clientWidth;
      const offset = scrollLeft + clientWidth;
      if (offset >= scrollWidth) {
        // Trigger only when the user scrolled to the end
        eventScrolledTOEnd(true);
      } else {
        eventScrolledTOEnd(false);
      }
    });
  }, [eventScrolledTOEnd, parentRef]);
}
