import withLayout from "@/layouts/appLayout";
import React from "react";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Conversations", href: "/conversations" },
];

function Conversations() {
  return <div>index</div>;
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
