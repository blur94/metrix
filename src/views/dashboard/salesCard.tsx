import { Group, ThemeIcon, Select, Flex, Text, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { formatPrice } from "formatnumber-to-naira";
import { Graph } from "react-iconly";

export default function SalesCard() {
  return (
    <Paper withBorder p="md" radius="md" h={133}>
      <Group position="apart">
        <ThemeIcon variant="light" color="gray" size="xl" radius="md">
          <Graph set="light" primaryColor="blueviolet" />
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
            Sales
          </Text>
          <Text fw={500}>{formatPrice(4000000)}</Text>
        </Flex>

        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            Volume
          </Text>
          <Flex align="center" gap={10}>
            <Text fw={500}>450</Text>
            <Text color="teal" fz={12}>
              +20.00%
            </Text>
          </Flex>
        </Flex>
      </Group>
    </Paper>
  );
}
