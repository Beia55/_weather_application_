import { useEffect, useState } from "react";
import { theme } from "../theme";

type Breakpoint = "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

const setBreakpoint = (width: number): Breakpoint => {
  const { breakpoints } = theme;
  let breakpoint: Breakpoint = "s";

  if (width < breakpoints.s) {
    breakpoint = "s";
  } else if (width >= breakpoints.s && width < breakpoints.m) {
    breakpoint = "m";
  } else if (width >= breakpoints.m && width < breakpoints.l) {
    breakpoint = "l";
  } else if (width >= breakpoints.l && width < breakpoints.xl) {
    breakpoint = "xl";
  } else if (width >= breakpoints.xl && width < breakpoints.xxl) {
    breakpoint = "xxl";
  } else if (width >= breakpoints.xxl) {
    breakpoint = "xxxl";
  }

  return breakpoint;
};

export const useBreakpoint = (): Breakpoint => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(setBreakpoint(window.innerWidth));

  const resize = () => {
    setCurrentBreakpoint(setBreakpoint(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  return currentBreakpoint;
};
