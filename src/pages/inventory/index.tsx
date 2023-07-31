import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Inventory", href: "/inventory" },
];

function Conversations() {
  return <div>Inventory</div>;
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
