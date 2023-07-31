import withLayout from "@/layouts/appLayout";
import React from "react";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Customers", href: "/customers" },
];

function Customers() {
  return <div>Customers</div>;
}

export default withLayout(
  Customers,
  "Customers",
  "Customers",
  breadcrumbsItem
);
