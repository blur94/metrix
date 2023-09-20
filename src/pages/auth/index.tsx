import {
  BackgroundImage,
  Box,
  Flex,
  Paper,
  SegmentedControl,
  Text,
  Title,
} from "@mantine/core";
import LoginImg from "@/assets/login.png";
import { useState } from "react";

export default function AuthPage() {
  const [value, setValue] = useState("login");
  return (
    <Paper p={20}>
      <Flex h="calc(100vh - 40px)" gap={10} justify="space-between">
        <Box sx={{ flexGrow: 1 }}>
          <BackgroundImage src={LoginImg.src} h="100%" bgp="center">
            <Flex
              justify="flex-end"
              h="100%"
              p={40}
              direction="column"
              c="white"
            >
              <Title>Login</Title>
              <Text>Hello World</Text>
            </Flex>
          </BackgroundImage>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Flex align="center" direction="column" gap={20}>
            <Title>Welcome to Metrix</Title>

            <SegmentedControl
              value={value}
              onChange={setValue}
              radius="lg"
              size="sm"
              w="30%"
              color="brown.9"
              c="brown.9"
              bg="brown.2"
              data={[
                { label: "Login", value: "login" },
                { label: "Register", value: "register" },
              ]}
            />
          </Flex>
        </Box>
      </Flex>
    </Paper>
  );
}
