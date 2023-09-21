import { loginInitialValues, loginSchema, loginType } from "@/utils/auth";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import Link from "next/link";

export default function Login() {
  const form = useForm<loginType>({
    initialValues: loginInitialValues,
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async (values: loginType) => {};

  return (
    <Box w="70%" sx={{ margin: "0 auto" }}>
      <Text fz={12} mt={50}>
        Welcome back to Metrix!
      </Text>
      <Text fz={12} mb={40} mt={10}>
        Unlock your personalized experience by logging in. We're excited to have
        you back with us.
      </Text>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          placeholder="Enter your Email Address"
          label={<Text my={7}>Email Address</Text>}
          radius="md"
          mt={20}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          placeholder="Enter your Password"
          label={<Text my={7}>Password</Text>}
          radius="md"
          mt={20}
          {...form.getInputProps("password")}
        />

        <Flex mt={20} justify="space-between">
          <Checkbox
            label={<Text fz={12}>Remember me</Text>}
            radius="sm"
            checked={form.values.remember}
            {...form.getInputProps("remember")}
          />
          <Link href="/auth/forgot-password" style={{ fontSize: "12px" }}>
            Forgot Password?
          </Link>
        </Flex>

        <Flex justify="flex-end" mt={30}>
          <Button radius="lg" w="40%" size="xs" type="submit">
            Login
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
