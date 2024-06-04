"use client";

import colors from "./colors";
import fonts from "./fonts";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors,
  fonts,
} as any;

export type ThemeInterface = typeof theme;

export default function Theme({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
