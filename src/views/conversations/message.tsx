import { Paper, Divider, Text, Flex } from "@mantine/core";
import MessageHead from "./messageHead";
import MessageBody from "./messageBody";
import MessageStore from "@/store/message.store";

export default function Message() {
  const { user, conversations } = MessageStore();
  return (
    <Paper withBorder p="md" radius="md" h="calc(100vh - 70px)">
      {conversations.length ? (
        <>
          <MessageHead />
          <Divider mt={10} />
          <MessageBody />
        </>
      ) : (
        <Flex justify="center" align="center" h="100%">
          <Text>No Selected Chat</Text>
        </Flex>
      )}
    </Paper>
  );
}
