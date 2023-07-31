import {
  createStyles,
  Button,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Flex,
  Paper,
  Card,
  Title,
  Menu,
  ThemeIcon,
  Avatar,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import { IconSearch, IconChevronDown, IconBell } from "@tabler/icons-react";
import { IconBellFilled } from "@tabler/icons-react";
import ProfileImg from "@/assets/profile.png"

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

export default function HeaderComponent({ title }: { title: string }) {
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
      <Paper
        h={60}
        px="md"
        pos="fixed"
        top={0}
        left={300}
        w="calc(100vw - 300px)"
      >
        <Flex
          justify="space-between"
          align="center"
          sx={{ height: "100%", width: "100%" }}
        >
          <Link href="/" className={classes.logoSection}>
            <Title order={4}>{title}</Title>
          </Link>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.hiddenDesktop}
            // mr="xl"
          />

          <Flex
            align="center"
            gap={10}
            className={classes.hiddenMobile}
            sx={{ height: "100%" }}
          >
            <Menu>
              <Menu.Target>
                <Button
                  variant="light"
                  rightIcon={<IconChevronDown />}
                  c="dark.5"
                  color="yellow"
                  size="xs"
                >
                  Nancy's Shop
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconSearch size={rem(14)} />} disabled>
                  Search
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <ThemeIcon variant="default" sx={{ border: "none" }}>
              <IconBellFilled size={15} color="#5570F1" />
            </ThemeIcon>
            <Avatar src={ProfileImg.src} alt="Profile Image" size={30} />
          </Flex>
        </Flex>
      </Paper>

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
