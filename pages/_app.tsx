import React from "react";
import { AppProps } from "next/app";
import GlobalProvider from "@/context/globalProvider";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
