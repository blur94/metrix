import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Orders", href: "/orders" },
];

function Conversations() {
  return <div>Orders</div>;
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
