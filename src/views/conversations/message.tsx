import { Paper, Divider, Text, Flex, useMantineTheme } from "@mantine/core";
import MessageHead from "./messageHead";
import MessageBody from "./messageBody";
import MessageStore from "@/store/message.store";

export default function Message() {
  const theme = useMantineTheme();
  const { user, conversations } = MessageStore();
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      h="calc(100vh - 170px)"
      sx={{
        [theme.fn.smallerThan("md")]: {
          height: "calc(100vh - 70px)",
        },
      }}
    >
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
