import { Box, Flex, ThemeIcon, Avatar, Badge, Button, Paper, Text } from "@mantine/core";
import dayjs from "dayjs";
import { Bag } from "react-iconly";
import MessageStore from "@/store/message.store";


export default function MessageHead() {
      const { user, conversations } = MessageStore();
  return (
    <Box pl="md">
      <Flex gap={30} align="center">
        <ThemeIcon size={15}>
          <Avatar src={user?.image.src} size={50} />
        </ThemeIcon>
        <Flex direction="column" w="100%" gap={5}>
          <Flex justify="space-between" align="center">
            <Text fz={16} fw={500}>
              {user?.name}
            </Text>

            <Flex align="center" pr={0}>
              <Badge color="gray" bg="#FFEAD1" size="xs" tt="capitalize">
                New Customer
              </Badge>
              <Button variant="unstyled" color="blue" c="blue" size="xs" pr={0}>
                View Profile
              </Button>
            </Flex>
          </Flex>
          <Flex justify="space-between" c="dimmed" align="center">
            <Flex gap={5} align="center">
              <Paper
                w={8}
                h={8}
                bg={user?.online ? "blue" : "gray"}
                radius="xl"
              ></Paper>
              <Text size="xs" c="dimmed" tt="capitalize">
                Online
              </Text>
              <Text size="xs" c="dimmed">
                {conversations.length > 0 &&
                  dayjs(
                    conversations[conversations.length - 1].timestamp
                  ).format("hh:mm a")}
              </Text>
            </Flex>

            <Flex align="center">
              <ThemeIcon variant="transparent">
                <Bag set="bulk" size="small" />
              </ThemeIcon>
              <Text size="xs" c="dimmed" fz={8}>
                0 Orders
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
