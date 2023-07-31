import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Inventory", href: "/inventory" },
];

function Inventory() {
  return <div>Inventory</div>;
}

export default withLayout(
  Inventory,
  "Inventory",
  "Inventory",
  breadcrumbsItem
);
