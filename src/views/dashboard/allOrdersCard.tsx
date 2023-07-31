import { Group, ThemeIcon, Select, Flex, Text, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Bag } from "react-iconly";

export default function AllOrdersCard() {
  return (
    <Paper withBorder p="md" radius="md" h={133}>
      <Group position="apart">
        <ThemeIcon variant="light" color="gray" size="xl" radius="md">
          <Bag set="light" primaryColor="black" />
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

      <Group align="flex-end" position="apart" spacing="xs" mt={20} pr={30}>
        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            All Orders
          </Text>
          <Text fw={500}>450</Text>
        </Flex>

        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            Pending
          </Text>
          <Text fw={500}>5</Text>
        </Flex>

        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            Completed
          </Text>
          <Text fw={500}>445</Text>
        </Flex>
      </Group>
    </Paper>
  );
}
