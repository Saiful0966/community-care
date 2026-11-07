import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomePage from "../components/HomePage";
import WhyChooseUs from "../components/WhyChooseUs";
import HomePageEventCard from "../components/HomePageEventCard";
import MomentsGallery from "@/components/MomentsGallery";
import SubscribeSection from "@/components/SubscribeSection";


export default function Home() {
  return (
    <div>
    {/* <Button variant={"outline"}> oii </Button> */}
    <HomePage/>
    <WhyChooseUs/>
    <HomePageEventCard/>
    <MomentsGallery />
    <SubscribeSection />

    

    </div>
  );
}
