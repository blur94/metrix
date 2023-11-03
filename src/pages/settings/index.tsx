import withLayout from "@/layouts/appLayout";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Settings", href: "/settings" },
];

function Settings() {
  return <div>Settings</div>;
}

export default withLayout(Settings, "Settings", "Settings", breadcrumbsItem);
