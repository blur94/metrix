import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layouts/appLayout";
import {
  IconDotsVertical,
  IconGraph,
  IconGraphOff,
  IconHome,
  IconUsersGroup,
} from "@tabler/icons-react";
import {
  Box,
  Breadcrumbs,
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { Fragment } from "react";
import { formatPrice } from "formatnumber-to-naira";
import {Graph} from 'react-iconly'

const inter = Inter({ subsets: ["latin"] });

const breadcrumbsItem = [{ title: "", href: "/" }];

function Home() {
  return (
    <Grid>
      <Grid.Col span={8}>
        <Grid>
          <Grid.Col span={6}>
            <Paper withBorder p="md" radius="md">
              <Group position="apart">
                <ThemeIcon variant="light" color="gray" size="xl" radius="md">
                  {/* <IconGraphOff size="25" stroke={2} /> */}
                  <Graph set="light" primaryColor="blueviolet" />
                </ThemeIcon>
                <IconDotsVertical size="1rem" stroke={2} />
              </Group>

              <Group
                align="center"
                position="apart"
                spacing="xs"
                mt={7}
                pr={30}
              >
                <Flex direction="column">
                  <Text c="dimmed" fz={14}>
                    Sales
                  </Text>
                  <Text fw={500}>{formatPrice(4000000)}</Text>
                </Flex>

                <Flex direction="column">
                  <Text c="dimmed" fz={14}>
                    Volume
                  </Text>
                  <Flex align="center" gap={10}>
                    <Text fw={500}>450</Text>
                    <Text color="teal" fz={12}>
                      +20.00%
                    </Text>
                  </Flex>
                </Flex>
              </Group>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card>A lot</Card>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card>A lot</Card>
      </Grid.Col>
    </Grid>
  );
}

export default withLayout(Home, "Home", "Dashboard", breadcrumbsItem);
