import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // const rect = (lastChild as HTMLElement).getBoundingClientRect();
        const rect = ref.current.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        setInView(isVisible);
      } else {
        setInView(false);
      }
    };

    parentRef.current?.addEventListener("scroll", handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, inView, parentRef };
}
