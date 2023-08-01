import { Box, Card, Paper, Text } from "@mantine/core";
import Message from "@/store/message.store";
import { MessageInput } from "./messageInput";

export default function MessageBody() {
  const { conversations } = Message();

  return (
    <Box
      h="calc(100vh - 270px)"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        {conversations.map((item) => {
          return (
            <Card
              // radius="md"
              // color="indigo"
              sx={{
                display: "flex",
                flexDirection:
                  item.sender === "currentUser" ? "row-reverse" : "row",
              }}
            >
              <Paper
                radius="lg"
                bg={item.sender === "currentUser" ? "#FFEAD1" : "indigo"}
                c={item.sender === "currentUser" ? "#000" : "#fff"}
                p="sm"
                fz={12}
                sx={{
                  borderBottomRightRadius:
                    item.sender !== "currentUser" ? "none" : 5,
                  borderBottomLeftRadius:
                    item.sender === "currentUser" ? "none" : 5,
                }}
              >
                {item.content}
              </Paper>
            </Card>
          );
        })}
      </Box>

      <Box>
        <MessageInput />
      </Box>
    </Box>
  );
}
