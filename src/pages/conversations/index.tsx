import withLayout from "@/layouts/appLayout";
import Contacts from "@/views/conversations/contacts";
import Message from "@/views/conversations/message";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Group,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Conversations", href: "/conversations" },
];

function Conversations() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    <Box>
      <Group position="apart">
        <Title order={5} fz={{ base: 14, md: 16 }}>
          Conversations with Customers
        </Title>
        <Button
          sx={{
            [theme.fn.smallerThan("sm")]: {
              fontSize: "10px",
            },
          }}
          radius="md"
        >
          New Message
        </Button>
      </Group>

      <Grid mt={10}>
        <Grid.Col md={4} sm={12}>
          <Contacts toggle={open} />
        </Grid.Col>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Grid.Col md={8} sm={12}>
            <Message />
          </Grid.Col>
        </MediaQuery>
      </Grid>

      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        transitionProps={{
          transition: "slide-left",
          duration: 300,
          timingFunction: "ease-in-out",
        }}
        size="100%"
      >
        <Message />
      </Drawer>
    </Box>
  );
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
