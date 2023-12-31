import { conversationList } from "@/constants/conversationData";
import {
  Group,
  ThemeIcon,
  Flex,
  Text,
  Paper,
  Title,
  Autocomplete,
  useMantineTheme,
  Box,
  Avatar,
  Badge,
  Divider,
  Indicator,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import dayjs from "dayjs";
import Message from "@/store/message.store";

export default function Contacts({ toggle }: { toggle: () => void }) {
  const theme = useMantineTheme();
  const { setUser, setConversations } = Message();

  return (
    <Paper withBorder p="md" radius="md" h="calc(100vh - 170px)">
      <Group position="apart" mb={15}>
        <Title order={4}>Contact</Title>
        <ThemeIcon variant="transparent" color="gray" size="xl" radius="md">
          <Text c="dimmed" fz={20} fw={500}>
            {conversationList && conversationList.length}
          </Text>
        </ThemeIcon>
      </Group>

      <Group>
        <Autocomplete
          //   className={classes.search}
          placeholder="Search"
          icon={<IconSearch size={25} stroke={1.5} color="#000" />}
          w="100%"
          radius="md"
          sx={{
            [theme.fn.smallerThan("xs")]: {
              display: "none",
            },
          }}
          data={[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "Riot.js",
            "Svelte",
            "Blitz.js",
          ]}
        />
      </Group>

      {conversationList.map((conversation) => {
        return (
          <Box
            my={20}
            onClick={() => {
              setUser(conversation.participant);
              setConversations(conversation.messages);
              toggle();
            }}
          >
            <Flex gap={20} align="center">
              <Indicator
                color={conversation.participant.online ? "blue" : "gray"}
                size={15}
                withBorder
              >
                <Avatar src={conversation.participant.image.src} size={50} />
              </Indicator>
              <Flex
                direction="column"
                w="80%"
                gap={5}
                sx={{ cursor: "pointer" }}
              >
                <Flex justify="space-between" align="center">
                  <Text fz={16} fw={500}>
                    {conversation.participant.name}
                  </Text>
                  <Badge
                    radius="xl"
                    size="xs"
                    color="orange.9"
                    c="dark"
                    tt="capitalize"
                  >
                    {conversation.participant.status}
                  </Badge>
                </Flex>
                <Flex justify="space-between" c="dimmed" align="center">
                  <Text fz={14}>
                    {
                      conversation.messages[conversation.messages.length - 1]
                        .content
                    }
                  </Text>
                  <Text c="dimmed" fz={12}>
                    {dayjs(
                      conversation.messages[conversation.messages.length - 1]
                        .timestamp
                    ).format("hh:mm a")}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Divider mt={10} />
          </Box>
        );
      })}
    </Paper>
  );
}
