import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Settings", href: "/settings" },
];

function Orders() {
  return <div>Settings</div>;
}

export default withLayout(
  Orders,
  "Orders",
  "Orders",
  breadcrumbsItem
);
