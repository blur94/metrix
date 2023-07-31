import { Group, ThemeIcon, Select, Flex, Text, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { TwoUsers } from "react-iconly";

export default function CustomerCard() {
  return (
    <Paper withBorder p="md" radius="md" h={133}>
      <Group position="apart">
        <ThemeIcon variant="light" color="gray" size="xl" radius="md">
          <TwoUsers set="light" primaryColor="black" />
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
            Customers
          </Text>
          <Flex align="center" gap={10}>
            <Text fw={500}>1,250</Text>
            <Text color="teal" fz={12}>
              +15.80%
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            Active
          </Text>
          <Flex align="center" gap={10}>
            <Text fw={500}>1,180</Text>
            <Text color="teal" fz={12}>
              +85%
            </Text>
          </Flex>
        </Flex>
      </Group>
    </Paper>
  );
}
