"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      value={{
        normal: "normal",
        contrast: "contrast",
      }}
      defaultTheme="normal"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="ak1944-theme"
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
