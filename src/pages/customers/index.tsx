import withLayout from "@/layouts/appLayout";
import CorporateBusiness from "@/views/business/CorporateBusiness";
import { Box } from "@mantine/core";
import React from "react";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Customers", href: "/customers" },
];

function Customers() {
  return <Box>
    <CorporateBusiness />
  </Box>;
}

export default withLayout(
  Customers,
  "Customers",
  "Customers",
  breadcrumbsItem
);
