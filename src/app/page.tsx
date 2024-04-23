import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Feature2 } from "@/components/feature2";
import Link from "next/link";
import { Feature3 } from "@/components/feature3";
import Feature1 from "@/components/feature1";
import Feature4 from "@/components/feature4";
import Feature5 from "@/components/feature5";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Feature1 />
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Feature2 />
      </div>
    </main>
  );
}
