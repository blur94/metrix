import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  ThemeIcon,
  Flex,
  Button,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft, IconPlus } from "@tabler/icons-react";
import { Send } from "react-iconly";
import { BsEmojiSmile } from "react-icons/bs";

export function MessageInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={
        <ActionIcon color="orange.1" variant="filled" radius="md">
          <IconPlus size="1.1rem" stroke={1.5} color="black" />
        </ActionIcon>
      }
      radius="sm"
      size="md"
      rightSection={
        <Flex pr={90}>
          <ActionIcon
            size={32}
            radius="xl"
            color={theme.primaryColor}
            variant="subtle"
          >
            <BsEmojiSmile />
          </ActionIcon>
          <Button
            size='xs'
            radius="sm"
            color='orange.1'
            variant="light"
            c='black'
            rightIcon={<Send set='bulk' primaryColor='black' size='small' />}
          >
            Send
          </Button>
        </Flex>
      }
      placeholder="Your message"
      rightSectionWidth={42}
      {...props}
    />
  );
}
