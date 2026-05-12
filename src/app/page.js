import Image from "next/image";
import BannerBg from "@/assets/images/banner-bg.jpg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <section className="p-2 md:p-4">
        <div className="w-full h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] rounded-3xl relative overflow-hidden">
          <div className="w-full h-full absolute bg-black/40 backdrop-blur-xs -z-10"></div>
          <div className="absolute w-full h-full -z-20">
            <Image src={BannerBg} alt="Banner" fill className="object-cover" />
          </div>

          <div className="flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-center text-5xl md:text-8xl font-bold max-w-5xl tracking-tight">
              Bringing Fresh Flavors Straight To You
            </h1>
            <p className="text-center mt-2 md:mt-4 tracking-tight text-base md:text-xl max-w-2xl font-medium">Discover tasty meals, fast delivery, and an effortless ordering experience with DineDrop — your go-to destination for fresh food anytime, anywhere.</p>
            <div className="flex flex-col md:flex-row mt-6 gap-4">
              <Button>Order Now</Button>
              <Button className="bg-transparent border-2 border-white">Explore Menu</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}