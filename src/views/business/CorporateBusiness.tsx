import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  LoadingOverlay,
  Paper,
  TextInput,
  NumberInput,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import { IconAlertCircle } from "@tabler/icons-react";
import { IoAddCircleOutline } from "react-icons/io5";
import {  useState } from "react";

import {
  CBusinessProp,
  CBusinessSchema,
  corporateBusinessValues,
  directorsValue,
} from "@/utils/business";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
  },

  logoContainer: {
    padding: "0px 50px",
    height: rem(50),
    display: "flex",
    alignItems: "center",

    [theme.fn.smallerThan("lg")]: {
      padding: "0px 15px",
    },
  },

  form: {
    padding: "0 15px",
    maxWidth: rem(500),
    paddingTop: rem(50),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  innerForm: {
    minWidth: rem(450),

    [theme.fn.smallerThan("sm")]: {
      minWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  description: {
    maxWidth: rem(600),
  },

  tlWrapper: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  tlChild: {
    position: "relative",
  },

  addDirector: {
    color: theme.colors.grape,
  },

  directorHead: {
    marginBlock: theme.spacing.md,
    borderBlockEnd: "1px solid gray.3",
    paddingBlockEnd: theme.spacing.xs,
  },
}));

export default function CorporateBusiness() {
  const { classes } = useStyles();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<CBusinessProp>({
    initialValues: corporateBusinessValues,
    validate: zodResolver(CBusinessSchema),
  });

  console.log(form.errors);
  console.log(form.values);

  const handleAddDirector = () => {
    if (form.values.directors.length < 2) {
      form.setFieldValue("directors", [
        ...form.values.directors,
        directorsValue,
      ]);
    } else {
      setError("You can only have two directors");
    }
  };

  const handleSubmit = async () => {
    // const token = Cookies.get("auth");
    // try {
    //   form.validate();
    //   const { errors, values } = form;
    //   if (Object.keys(errors).length) return;
    //   const { data: res } = await axios.post(`${auth}/update/`, values, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     return setError(error?.response?.data.message);
    //   }
    //   setError("Something went wrong while processing your request");
    // }
  };

  return (
    <Container>
      <Center mx="auto">
        <Paper className={classes.form} radius={0}>
          <Box className={classes.innerForm} pos="relative" mb={30}>
            <LoadingOverlay visible={visible} overlayBlur={2} />
            <Center>
              <Title order={5} className={classes.title} mt="md" mb={30}>
                Corporate Business Information
              </Title>
            </Center>

            {error && (
              <Alert
                icon={<IconAlertCircle size="1rem" />}
                title="An error occurred!"
                color="red"
                mb={30}
                withCloseButton
                closeButtonLabel="Close alert"
                onClose={() => setError("")}
              >
                {error}
              </Alert>
            )}

            <form onSubmit={form.onSubmit(() => handleSubmit())}>
              <Container
                mb={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxBlockSize: "40%",
                  overflowY: "scroll",

                  "&::-webkit-scrollbar": {
                    width: 0,
                    background: "transparent",
                  },
                }}
              >
                <NumberInput
                  label={
                    <Text size={"xs"} mb={10} fw={500}>
                      RC Number
                    </Text>
                  }
                  placeholder="Enter RC Number"
                  mb="md"
                  size="sm"
                  type="number"
                  hideControls
                  {...form.getInputProps("rcNum")}
                />

                {form.values.directors.map((director, index) => {
                  return (
                    <Paper key={index}>
                      <Text className={classes.directorHead}>
                        Director {index + 1}:
                      </Text>
                      <TextInput
                        label={
                          <Text size={"xs"} fw={500} mb={10}>
                            Full Name
                          </Text>
                        }
                        placeholder="Enter Full Name"
                        mb="md"
                        size="sm"
                        {...form.getInputProps(`directors.${index}.name`)}
                      />

                      <TextInput
                        label={
                          <Text size={"xs"} fw={500} mb={10}>
                            Email Address
                          </Text>
                        }
                        placeholder="Enter Email Address"
                        mb="md"
                        size="sm"
                        {...form.getInputProps(`directors.${index}.email`)}
                      />
                      <TextInput
                        label={
                          <Text size={"xs"} fw={500} mb={10}>
                            Phone Number
                          </Text>
                        }
                        placeholder="Enter Phone Number"
                        mb="md"
                        size="sm"
                        {...form.getInputProps(`directors.${index}.phoneNum`)}
                      />
                    </Paper>
                  );
                })}

                {form.values.directors.length !== 2 && (
                  <Box>
                    <Text c="red" fz={12}>
                      {form.errors.directors && form.errors.directors}
                    </Text>
                    <Button
                      size="xs"
                      variant="unstyled"
                      pl={0}
                      onClick={handleAddDirector}
                      leftIcon={
                        <IoAddCircleOutline
                          fontSize={25}
                          className={classes.addDirector}
                        />
                      }
                    >
                      Add Director
                    </Button>
                  </Box>
                )}

                <Button
                  fullWidth
                  mt="xl"
                  size="md"
                  type="submit"
                  // onClick={handleSubmit}
                  mb={50}
                >
                  Submit
                </Button>
              </Container>
            </form>
          </Box>
        </Paper>
      </Center>
    </Container>
  );
}
