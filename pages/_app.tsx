/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "../providers/AppProvider";
import AppLayout from "../providers/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  );
}

export default MyApp;
