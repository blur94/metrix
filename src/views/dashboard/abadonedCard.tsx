import { Group, ThemeIcon, Select, Flex, Text, Paper } from "@mantine/core";
import { IconChevronDown, IconShoppingCart } from "@tabler/icons-react";

export default function AbandonedCard() {
  return (
    <Paper withBorder p="md" radius="md" h={133}>
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

      <Group align="flex-end" position="apart" spacing="xs" mt={20} pr={30}>
        <Flex direction="column">
          <Text c="red" fz={14}>
            Abandoned Cart
          </Text>
          <Flex align="center" gap={10}>
            <Text fw={500}>20%</Text>
            <Text color="teal" fz={12}>
              +0.00%
            </Text>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Text c="dimmed" fz={14}>
            Customers
          </Text>
            <Text fw={500}>30</Text>
        </Flex>
      </Group>
    </Paper>
  );
}
