import "@/styles/globals.scss";

import { AppProps } from "next/app";
import { Box, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Poppins, Inter } from "next/font/google";

import { cache } from "@/cache";
import { RouterTransition } from "@/components/RouterTransitions";
import HeadMeta from "@/components/Head";
import HeaderComponent from "@/components/NavBar";
// import { NavHeader } from "@/components/NavBar";

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
        colors: {},
        defaultRadius: 0,
        primaryColor: "lime",
      }}
      emotionCache={cache}
    >
      <RouterTransition />
      <Notifications position="top-center" />
      <Box>
        <Component {...pageProps} />
      </Box>
    </MantineProvider>
  );
}
