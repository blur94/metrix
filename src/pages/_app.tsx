import "@/styles/globals.scss";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter } from "next/font/google";

import { cache } from "@/cache";
import { RouterTransition } from "@/components/RouterTransitions";
import { myColors } from "@/constants/theme";

const inter = Inter({ subsets: ["latin"] });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: `${inter.style.fontFamily}`,
        colors: {
          brown: [...myColors.paleBrown],
        },
        defaultRadius: 0,
        primaryColor: "indigo",
      }}
      emotionCache={cache}
    >
      <RouterTransition />
      <Notifications position="top-center" />
      {/* <Box> */}
      <Component {...pageProps} />
      {/* </Box> */}
    </MantineProvider>
  );
}
