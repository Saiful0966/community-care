import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomePage from "../components/HomePage";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div>
    {/* <Button variant={"outline"}> oii </Button> */}
    <HomePage/>
    <WhyChooseUs/>

    </div>
  );
}
