import { Group, ThemeIcon, Select, Paper } from "@mantine/core";
import { IconChevronDown, IconShoppingCart } from "@tabler/icons-react";
import MessageStore from "@/store/message.store"

export default function Message() {
  const { user, conversations } = MessageStore();
  console.log(user, conversations);

  return (
    <Paper withBorder p="md" radius="md" h="calc(100vh - 170px)">
      <Group position="apart">
        <ThemeIcon variant="light" color="gray" size="xl" radius="md">
          <IconShoppingCart size={25} color="#000" />
        </ThemeIcon>
        <Select
          data={["This Week", "This Month", "This Year"]}
          defaultValue="This Week"
          variant="unstyled"
          rightSection={<IconChevronDown size={13} />}
          w={110}
          fz={8}
        />
      </Group>
    </Paper>
  );
}
