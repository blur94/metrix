import {
  createStyles,
  Button,
  Divider,
  Burger,
  Drawer,
  rem,
  Flex,
  Title,
  Menu,
  ThemeIcon,
  Avatar,
  Breadcrumbs,
  Text,
  Box,
  Header,
  Image,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import {
  IconSearch,
  IconChevronDown,
  IconBell,
  IconHome,
  IconHome2,
} from "@tabler/icons-react";
import { IconBellFilled } from "@tabler/icons-react";
import ProfileImg from "@/assets/profile.png";
import Logo from "@/assets/logo.png";
import NavBar from "./SideMenu";

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

interface Items {
  title: string;
  href: string;
}

export default function HeaderComponent({
  title,
  items,
}: {
  title: string;
  items: Items[];
}) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Header
      height={80}
      sx={{
        display: "flex",
      }}
    >
      <Flex gap={10} align="center" w={300} pl={30}>
        <Image src={Logo.src} width={50} />
        <Text>Metrix</Text>
      </Flex>

      <Flex
        direction="column"
        w="calc(100vw - 300px)"
        pr="md"
        sx={{
          [theme.fn.smallerThan("sm")]: {
            width: "100vw",
            paddingInline: "10px",
          },
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          w="calc(100vw - 300px)"
          h="100%"
          sx={{
            width: "100%",
            [theme.fn.smallerThan("sm")]: {
              flexDirection: "column",
              // gap: 1,
              justifyContent: "flex-start",
              paddingTop: "10px",
              // paddingRight: "10px",
            },
          }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.hiddenDesktop}
          />

          <Title order={4} fz={{ base: 12, md: 20 }}>
            {title}
          </Title>

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
        <Box w="calc(100vw - 300)" pb="xs" className={classes.hiddenMobile}>
          <Divider mb={5} />
          <Breadcrumbs mb={0}>
            {items.map((item, index) => (
              <span key={index}>
                <Flex align="center" gap={10} fz={10}>
                  <Link href={item.href}>
                    {index === 0 && <IconHome size="1rem" color="#5570F1" />}
                    {item.title}
                  </Link>
                </Flex>
              </span>
            ))}
          </Breadcrumbs>
        </Box>
      </Flex>
      <Drawer opened={opened} onClose={toggle} size='100%'>
        <NavBar opened={opened} />
      </Drawer>
    </Header>
  );
}
