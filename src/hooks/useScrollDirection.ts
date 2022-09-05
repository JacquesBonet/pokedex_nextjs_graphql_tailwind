import { useEffect, useState } from "react";

import { IDirection } from "@/types";

export const useScrollDirection = ():IDirection => {
  const [scrollDirection, setScrollDirection] = useState(IDirection.UP)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? IDirection.DOWN : IDirection.UP;
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    };
    window.addEventListener("scroll", updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection) // clean up
    }
  }, [scrollDirection])

  return scrollDirection
};
