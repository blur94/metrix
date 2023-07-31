import withLayout from "@/layouts/appLayout";
import React from "react";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Customers", href: "/customers" },
];

function Conversations() {
  return <div>Customers</div>;
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
