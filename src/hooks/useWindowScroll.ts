import { useState, useEffect } from "react";

export const useWindowScroll = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [scrollOffset, setScrollOffset] = useState(0);
  useEffect(() => {
    let lastScrollTop = document.documentElement.scrollTop;
    const handleScroll = (e: any) => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection("up");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      setScrollOffset(lastScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollDirection, scrollOffset];
};
