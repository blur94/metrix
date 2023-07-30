import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Flex,
  Paper,
  Card,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(35),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(60),
      display: "flex",
      alignItems: "center",
      // width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Card
      withBorder
      pos="relative"
      w="calc(100vw - 300px)"
      // w="100%"
      className={inter.className}
    >
      {/* <Header height={60} px="md" pos="fixed" top={0}> */}
      <Paper
        h={60}
        // justify="space-between"
        // align="center"
        px="md"
        pos="fixed"
        top={0}
        left={300}
        // right={0}
        w="calc(100vw - 300px)"
        // w="100%"
        // display="flex"
      >
        <Flex
          justify="space-between"
          align="center"
          // pos="fixed"
          // top={0}
          sx={{ height: "100%", width: "100%" }}
        >
          <Link href="/" className={classes.logoSection}>
            <MantineLogo size={30} />
          </Link>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.hiddenDesktop}
            // mr="xl"
          />

          <Flex
            sx={{ height: "100%" }}
            // spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/tickets" className={classes.link}>
              Tickets
            </Link>
            <Link href="/delivery" className={classes.link}>
              Delivery
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
          </Flex>

          <Flex
            align="center"
            gap={10}
            className={classes.hiddenMobile}
            sx={{ height: "100%" }}
          >
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Flex>
        </Flex>
      </Paper>
      {/* </Header> */}

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        transitionProps={{
          transition: "slide-left",
          duration: 300, // You can adjust the duration as needed (in milliseconds)
          timingFunction: "ease-in-out", // You can try different timing functions like 'linear', 'ease-in', 'ease-out', etc.
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/tickets" className={classes.link}>
            Tickets
          </Link>
          <Link href="/delivery" className={classes.link}>
            Delivery
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Flex justify="center" pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Flex>
        </ScrollArea>
      </Drawer>
    </Card>
  );
}
