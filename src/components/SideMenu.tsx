import {
  Divider,
  Flex,
  Image,
  Navbar,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useState } from "react";
import {
  IconUsers,
  IconSettings,
  IconFolder,
  IconCategory,
  IconMessageCircle,
  IconHeadphones,
  IconGift,
  IconLogout,
  IconChevronRight,
} from "@tabler/icons-react";
import Logo from "@/assets/logo.png";
import { IconShoppingBag } from "@tabler/icons-react";

type CustomClassType = "link" | "active" | "gift" | "contact" | "logout";

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
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

  function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
      <Flex
        align="center"
        className={cx(classes.link, { [classes.active]: active })}
        onClick={onClick}
        gap={10}
        pl={20}
      >
        <UnstyledButton
          className={cx(classes.link, { [classes.active]: active })}
        >
          <Icon size="15px" stroke={1.5} />
        </UnstyledButton>
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
            <IconHeadphones
              size="15px"
              stroke={1.5}
              className={classes.contact}
            />
          </UnstyledButton>
          <Text fz={14}>Contact Support</Text>
        </Flex>

        <Flex
        direction="column"
        justify='center'
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
            <Text fz={14}>Free Gift Awaits You!</Text>
          </Flex>
          <Flex align="center" className={classes.gift} gap={10}>
            <Text fz={12}>Upgrade your account</Text>
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
          <UnstyledButton>
            <IconLogout size="15px" stroke={1.5} className={classes.logout} />
          </UnstyledButton>
          <Text fz={14}>Logout</Text>
        </Flex>
      </Flex>
    );
  }

  const menu = [
    { icon: IconCategory, label: "Dashboard" },
    { icon: IconShoppingBag, label: "Orders" },
    { icon: IconUsers, label: "Customers" },
    { icon: IconFolder, label: "Inventory" },
    { icon: IconMessageCircle, label: "Conversations" },
    { icon: IconSettings, label: "Settings" },
  ];

  const otherMenu = [
    { icon: IconHeadphones, label: "Contact Support", customClass: "contact" },
    { icon: IconGift, label: "Free Gift Awaits You!", customClass: "gift" },
    { icon: IconLogout, label: "Logout", customClass: "logout" },
  ];

  const links = menu.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  const otherLinks = otherMenu.map((link, index) => (
    <OtherNavbarLink {...(link as NavbarLinkProps)} key={link.label} />
  ));
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      height="100vh"
    >
      <Flex gap={10} align="center">
        <Image src={Logo.src} width={50} />
        <Text>Metrix</Text>
      </Flex>
      <Divider my={20} />
      <Flex direction="column" justify="space-between" h="calc(100vh - 50px)">
        <Stack>{links}</Stack>
        <Stack>{<OtherNavbarLink />}</Stack>
      </Flex>
    </Navbar>
  );
}
