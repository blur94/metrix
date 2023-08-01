import { orders } from "@/constants/orders";
import { Group, Flex, Text, Paper, Select } from "@mantine/core";
import DashboardChart from "./chart";
import { IconChevronDown } from "@tabler/icons-react";

export default function ChartCard() {
  return (
    <Paper withBorder p="md" radius="md">
      <Flex justify="space-between" align="center">
        <Select
          label={<Text mb={5}>Summary</Text>}
          data={["This Week", "This Month", "This Year"]}
          defaultValue="This Week"
          variant="filled"
          rightSection={<IconChevronDown size={13} />}
          w={310}
          size="xs"
          radius="md"
          h={75}
          fz={8}
          sx={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            border: "none",
          }}
        />

        <Select
          data={["Last 7 Days", "Last 1 Month", "Last 1 Year"]}
          defaultValue="Last 7 Days"
          variant="unstyled"
          rightSection={<IconChevronDown size={13} />}
          w={110}
          size="xs"
          radius="md"
          fz={8}
        />
      </Flex>

      <DashboardChart />
    </Paper>
  );
}
