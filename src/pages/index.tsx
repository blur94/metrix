import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layouts/appLayout";
import { IconHome } from "@tabler/icons-react";
import { Box, Breadcrumbs, Card, Divider, Paper, Text } from "@mantine/core";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

const breadcrumbsItem = [{ title: "", href: "/" }]

function Home() {
  return (
    <Box m={0}>
     
      <Text>Hi, Metrix</Text>
    </Box>
  );
}

export default withLayout(Home, "Home", "Dashboard", breadcrumbsItem);
