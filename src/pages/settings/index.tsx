import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Settings", href: "/settings" },
];

function Conversations() {
  return <div>Settings</div>;
}

export default withLayout(
  Conversations,
  "Conversations",
  "Conversations",
  breadcrumbsItem
);
