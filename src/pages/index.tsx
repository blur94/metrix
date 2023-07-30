import Image from "next/image";
import { Inter } from "next/font/google";
import withLayout from "@/layouts/appLayout";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <div className={inter.className} style={{display: 'flex'}}>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
      <p>Hello, Metrix</p>
    </div>
  );
}

export default withLayout(Home, "Home")