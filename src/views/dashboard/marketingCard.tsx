import {
  Group,
  Select,
  Flex,
  Text,
  Paper,
  RingProgress,
  Center,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export default function MarketingCard() {
  return (
    <Paper withBorder p="md" radius="md">
      <Group position="apart">
        <Text fz={16} fw={500}>
          Marketing
        </Text>
        <Select
          data={["This Week", "This Month", "This Year"]}
          defaultValue="This Week"
          variant="unstyled"
          rightSection={<IconChevronDown size={13} />}
          w={110}
          fz={8}
        />
      </Group>

      <Flex justify="space-between">
        <Flex align="center" gap={5}>
          <Paper w={8} h={8} bg="#5570F1" radius="xl"></Paper>
          <Text fz={11} c="dimmed">
            Acquisition
          </Text>
        </Flex>
        <Flex align="center" gap={5}>
          <Paper w={8} h={8} bg="#97A5EB" radius="xl"></Paper>
          <Text fz={11} c="dimmed">
            Purchase
          </Text>
        </Flex>
        <Flex align="center" gap={5}>
          <Paper w={8} h={8} bg="#FFCC91" radius="xl"></Paper>
          <Text fz={11} c="dimmed">
            Retention
          </Text>
        </Flex>
      </Flex>

      <Center>
        <RingProgress
          size={195}
          thickness={20}
          sections={[
            { value: 50, color: "#5570F1" },
            { value: 35, color: "#FFCC91" },
            { value: 15, color: "#97A5EB" },
          ]}
        />
      </Center>
    </Paper>
  );
}
