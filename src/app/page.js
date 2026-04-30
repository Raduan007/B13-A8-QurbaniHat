import Banner from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import QurBaniTips from "@/components/QurBaniTips";
import TopBreeds from "@/components/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
        <div>
          <Banner></Banner>
          <FeaturedAnimals></FeaturedAnimals>
          <QurBaniTips></QurBaniTips>
          <TopBreeds></TopBreeds>
        </div>
  );
}
