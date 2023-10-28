import withLayout from "@/layouts/appLayout";
import dynamic from "next/dynamic";

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Inventory", href: "/inventory" },
];

const Renderer = dynamic(() => import("../../views/inventory/renderer"), {
  ssr: false,
});

function Inventory() {
  return (
    <div>
      <Renderer />
    </div>
  );
}

export default withLayout(Inventory, "Inventory", "Inventory", breadcrumbsItem);
