import withLayout from "@/layouts/appLayout";
import dynamic from "next/dynamic";
// import Renderer from "@/views/orders/renderer";

const Renderer = dynamic(() => import("../../views/orders/renderer"), {
  ssr: false,
});

const breadcrumbsItem = [
  { title: "", href: "/" },
  { title: "Orders", href: "/orders" },
];

function Orders() {
  return (
    <div>
      <Renderer />
    </div>
  );
}

export default withLayout(Orders, "Orders", "Orders", breadcrumbsItem);
