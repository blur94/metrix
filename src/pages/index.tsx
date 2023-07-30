import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layouts/appLayout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return <div className={inter.className}>Hello, Metrix</div>;
}

export default withLayout(Home, "Home")