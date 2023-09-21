import {
  BackgroundImage,
  Box,
  Flex,
  Image,
  Paper,
  SegmentedControl,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import LoginImg from "@/assets/login.png";
import LogoImg from "@/assets/logo.png";
import { useState } from "react";
import Login from "@/views/auth/login";
import Register from "@/views/auth/register";

export default function AuthPage() {
  const theme = useMantineTheme();
  const [value, setValue] = useState("login");
  return (
    <Paper p={20}>
      <Flex h="calc(100vh - 40px)" gap={10} justify="space-between">
        <Box
          w="50%"
          sx={{
            [theme.fn.smallerThan("md")]: {
              display: "none",
            },
          }}
        >
          <BackgroundImage src={LoginImg.src} h="100%" bgp="bottom" radius="lg">
            <Flex
              justify="flex-end"
              h="100%"
              p={40}
              direction="column"
              c="white"
            >
              <Title>{value === "login" ? "Login" : "Register"}</Title>
              <Text>Hello World</Text>
            </Flex>
          </BackgroundImage>
        </Box>
        <Box
          sx={{
            width: "100%",

            [theme.fn.largerThan("md")]: {
              width: "50%",
            },
          }}
        >
          <Flex
            sx={{
                paddingLeft: "20px",

              [theme.fn.largerThan("md")]: {
                justifyContent: "flex-end",
              },
            }}
            pr={50}
          >
            <Image src={LogoImg.src} width={50} height={50} />
          </Flex>
          <Flex align="center" direction="column" gap={20}>
            <Title order={6}>Welcome to Metrix</Title>

            <SegmentedControl
              value={value}
              onChange={setValue}
              radius="lg"
              size="sm"
              sx={{
                width: "60%",

                [theme.fn.largerThan("md")]: {
                  width: "30%",
                },
              }}
              color="indigo.9"
              c="red"
              bg="indigo.2"
              data={[
                { label: "Login", value: "login" },
                { label: "Register", value: "register" },
              ]}
            />
          </Flex>

          {value === "login" && <Login />}
          {value === "register" && <Register />}
        </Box>
      </Flex>
    </Paper>
  );
}
