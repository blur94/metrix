import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Orders", href: "/orders" },
];

function Orders() {
  return <div>Orders</div>;
}

export default withLayout(
  Orders,
  "Orders",
  "Orders",
  breadcrumbsItem
);
