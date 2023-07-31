import { orders } from "@/constants/orders";
import { Group, Flex, Text, Paper, Box, Avatar, ThemeIcon, Badge, Divider } from "@mantine/core";
import dayjs from "dayjs";
import { formatPrice } from "formatnumber-to-naira";

export default function RecentOrdersCard() {
  return (
    <Paper withBorder p="md" radius="md">
      <Group position="apart" mb={20}>
        <Text fz={16} fw={500}>
          Recent Orders
        </Text>
      </Group>

      {orders.map((order, idx) => {
        return (
          <Box mb={10}>
            <Flex gap={20}>
              <ThemeIcon w={60} h={60} variant="unstyled">
                <Avatar src={order.image.src} size={50} />
              </ThemeIcon>
              <Flex direction="column" w='80%'>
                <Flex justify="space-between" align='center'>
                  <Text fz={14}>{order.title}</Text>
                  <Text c="dimmed" fz={12}>
                    {dayjs(order.createdAt).format("D MMM YYYY")}
                  </Text>
                </Flex>
                <Flex justify="space-between" align='center' mt={10}>
                  <Text fz={14}>{formatPrice(order.price)} x {order.quantity}</Text>
                  <Badge tt='capitalize' color={order.status === 'Pending' ? "red" : "green"}>
                    {order.status}
                  </Badge>
                </Flex>
              </Flex>
            </Flex>
            <Divider mt={10}/>
          </Box>
        );
      })}
    </Paper>
  );
}
