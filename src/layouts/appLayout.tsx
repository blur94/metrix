import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/Head";
// import Navbar from '@/components/navbar';
// import { Footer } from '@/components/footer';
import NavHeader from "@/components/NavBar";


export default function withLayout(
  Component: ComponentType,
  pageName: string = ""
) {
  const LayoutComponent = () => {
    return (
      <Fragment>
        <HeadMeta pageName={pageName} />
        <NavHeader />
        <Component />
        {/* <Footer /> */}
      </Fragment>
    );
  };

  return LayoutComponent;
}
