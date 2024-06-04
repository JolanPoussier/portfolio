import type { Metadata } from "next";
import "./globals.scss";
import StyledComponentsRegistry from "@/libs/styledComponents/registry";
import Theme from "@/theme/provider";

export const metadata: Metadata = {
  title: "Jolan Poussier",
  description: "Portfolio présenté par Jolan Poussier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
