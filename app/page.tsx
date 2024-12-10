import Image from "next/image";

import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="flex flex-col max-w-screen-2xl mx-auto h-screen w-full p-6 lg:p-12">
        <Header />

        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 h-full w-full">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-semibold tracking-wide">
              Find the best food in town
            </h1>

            <div className="flex items-center gap-x-4">
              <Input
                placeholder="Enter your delivery location"
                className="lg:max-w-xl"
              />
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <Image
              src="/assets/images/food_1.png"
              alt="Food"
              width={1024}
              height={1024}
              className="h-[480px] w-auto object-cover"
            />
            <Image
              src="/assets/images/food_2.png"
              alt="Food"
              width={1024}
              height={1024}
              className="h-96 w-auto object-cover hidden lg:block"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
