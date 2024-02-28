"use client";

import { ThemeProvider } from "@material-tailwind/react";
import theme from "@material-tailwind/react/theme";

const AppThemeProvider = ({children})  => {
   const customTheme = {
         primary: "blue"
    };

  return (
       <ThemeProvider value={customTheme}>
          {children}
       </ThemeProvider>
       );
}

export default AppThemeProvider;