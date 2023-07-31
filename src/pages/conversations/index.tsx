import withLayout from "@/layouts/appLayout";
import Contacts from "@/views/conversations/contacts";
import Message from "@/views/conversations/message";
import { Box, Button, Grid, Group, Paper, Title } from "@mantine/core";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Conversations", href: "/conversations" },
];

function Conversations() {
  return (
    <Box>
      <Group position="apart">
        <Title order={5}>Conversations with Customers</Title>
        <Button radius="md">New Message</Button>
      </Group>

      <Grid mt={10}>
        <Grid.Col span={4}>
          <Contacts />
        </Grid.Col>
        <Grid.Col span={8}>
          <Message />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
