import {
  Flex,
  Navbar,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useState } from "react";
import {
  IconHeadphones,
  IconGift,
  IconLogout,
  IconChevronRight,
} from "@tabler/icons-react";
import {
  Folder,
  Category,
  Bag,
  Chat,
  Setting,
  TwoUsers,
  Logout,
} from "react-iconly";
import Logo from "@/assets/logo.png";
import { IconShoppingBag } from "@tabler/icons-react";
import { useRouter } from "next/router";

type CustomClassType = "link" | "active" | "gift" | "contact" | "logout";

interface NavbarLinkProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  href: string;
  onClick?(): void;
  customClass?: CustomClassType | undefined;
}

const useStyles = createStyles((theme) => ({
  link: {
    height: rem(30),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      background: "#5570F1",
      color: "#fff",
    },
  },
  active: {
    "&, &:hover": {
      background: "#5570F1",
      color: "#fff",
      height: rem(30),
    },
  },
  gift: {},
  contact: {
    background: "rgba(94, 99, 102, 0.10)",
    borderRadius: theme.radius.md,
    height: rem(30),
  },
  logout: {
    color: "#CC5F5F",
  },
}));

export default function NavBar({ opened }: { opened: boolean }) {
  const [active, setActive] = useState(0);
  const router = useRouter();

  function NavbarLink({ icon, label, active, onClick, href }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
      <Flex
        align="center"
        className={
          router.pathname === href
            ? `${classes.link} ${classes.active}`
            : `${classes.link}`
        }
        onClick={onClick}
        gap={10}
        pl={20}
      >
        {icon}
        <Text fz={14}>{label}</Text>
      </Flex>
    );
  }

  function OtherNavbarLink() {
    const { classes, cx } = useStyles();

    return (
      <Flex direction="column" gap={10}>
        <Flex align="center" className={classes.contact} gap={10} pl={20}>
          <UnstyledButton>
            <IconHeadphones size="15px" stroke={1.5} />
          </UnstyledButton>
          <Text fz={{ base: 10, md: 14 }}>Contact Support</Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          pl={20}
          h={58}
          sx={{
            backgroundColor: "rgba(255, 204, 145, 0.20)",
            borderRadius: "16px",
          }}
        >
          <Flex align="center" className={classes.gift} gap={10}>
            <UnstyledButton>
              <IconGift size="15px" stroke={1.5} className={classes.gift} />
            </UnstyledButton>
            <Text fz={{ base: 10, md: 12, lg: 14, xl: 14 }}>Free Gift Awaits You!</Text>
          </Flex>
          <Flex align="center" className={classes.gift} gap={10}>
            <Text fz={{ base: 8, md: 10 }}>Upgrade your account</Text>
            <UnstyledButton>
              <IconChevronRight
                size={13}
                stroke={1.5}
                className={classes.gift}
              />
            </UnstyledButton>
          </Flex>
        </Flex>

        <Flex align="center" className={classes.logout} gap={10} pl={20}>
          {/* <UnstyledButton> */}
          <Logout
            size="medium"
            set="bulk"
            primaryColor="red"
            // className={classes.logout}
          />
          {/* </UnstyledButton> */}
          <Text fz={14}>Logout</Text>
        </Flex>
      </Flex>
    );
  }

  const menu = [
    {
      icon: <Category set="bulk" size="small" />,
      label: "Dashboard",
      href: "/",
    },
    {
      icon: <Bag set="light" size="small" />,
      label: "Orders",
      href: "/orders",
    },
    {
      icon: <TwoUsers set="light" size="small" />,
      label: "Customers",
      href: "/customers",
    },
    {
      icon: <Folder set="light" size="small" />,
      label: "Inventory",
      href: "/inventory",
    },
    {
      icon: <Chat set="light" size="small" />,
      label: "Conversations",
      href: "/conversations",
    },
    {
      icon: <Setting set="light" size="small" />,
      label: "Settings",
      href: "/settings",
    },
  ];

  const links = menu.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        router.push(link.href);
      }}
    />
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      height="100vh"
    >
      <Flex direction="column" justify="space-between" h="calc(100vh - 120px)">
        <Stack>{links}</Stack>
        <Stack>{<OtherNavbarLink />}</Stack>
      </Flex>
    </Navbar>
  );
}
