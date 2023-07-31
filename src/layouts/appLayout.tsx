import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/Head";
// import Navbar from '@/components/navbar';
// import { Footer } from '@/components/footer';
import HeaderComponent from "@/components/NavBar";
import { AppShell, Footer, Navbar, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "@/components/SideMenu";

interface Items {
  title: string;
  href: string;
}

export default function withLayout(
  Component: ComponentType,
  pageName: string = "",
  title: string = "",
  breadcrumbsItems: Items[],
) {
  const LayoutComponent = () => {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);

    return (
      <Fragment>
        <HeadMeta pageName={pageName} />
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          // asideOffsetBreakpoint="sm"
          p={0}
          m={0}
          navbar={<NavBar opened={opened} />}
        >
          <HeaderComponent title={title} items={breadcrumbsItems} />
          <Component />
        </AppShell>
      </Fragment>
    );
  };

  return LayoutComponent;
}
