import { Group, ThemeIcon, Select, Flex, Text, Paper } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Folder } from "react-iconly";

export default function ProductsCard() {
  return (
    <Paper withBorder p="md" radius="md" h={133} bg="#5570F1">
      <Group position="apart">
        <ThemeIcon variant="light" color="#5570F1" size="xl" radius="md">
          <Folder set="light" primaryColor="white" />
        </ThemeIcon>
      </Group>

      <Group align="flex-end" position="apart" spacing="xs" mt={20} pr={30}>
        <Flex direction="column" color="white">
          <Text c="white" fz={14}>
            All Products
          </Text>
          <Text c="white" fw={500}>
            45
          </Text>
        </Flex>

        <Flex direction="column">
          <Text c="white" fz={14}>
            Active
          </Text>
          <Flex align="center" c="white" gap={10}>
            <Text fw={500}>32</Text>
            <Text fz={12}>+24%</Text>
          </Flex>
        </Flex>
      </Group>
    </Paper>
  );
}
