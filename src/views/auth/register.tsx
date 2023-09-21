import {
  registerInitialValues,
  registerSchema,
  registerType,
} from "@/utils/auth";
import {
  Box,
  Button,
  Flex,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

export default function Register() {
  const form = useForm<registerType>({
    initialValues: registerInitialValues,
    validate: zodResolver(registerSchema),
  });

  const handleSubmit = async (values: registerType) => {};

  return (
    <Box w="70%" sx={{ margin: "0 auto" }}>
      <Text fz={12} mt={50}>
        Join Metrix - Where Exciting Adventures Await!
      </Text>
      <Text fz={12} mb={30} mt={10}>
        Create an account to embark on your journey with us. Be part of our
        growing community and discover what's in store for you.
      </Text>

      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          placeholder="Enter your Email Address"
          label={<Text my={7}>Email Address</Text>}
          radius="md"
          mt={20}
          {...form.getInputProps("email")}
        />

        <TextInput
          placeholder="Enter your User Name"
          label={<Text my={7}>User Name</Text>}
          radius="md"
          mt={20}
          {...form.getInputProps("userName")}
        />

        <PasswordInput
          placeholder="Enter your Password"
          label={<Text my={7}>Password</Text>}
          radius="md"
          mt={20}
          {...form.getInputProps("password")}
        />

        <Flex justify="flex-end" mt={30}>
          <Button radius="lg" w="40%" size="xs" type="submit">
            Register
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
