import Form from "next/form";
import Image from "next/image";
import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FoodSection from "@/components/food-section";

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-semibold tracking-wide">
            Find the best food
          </h1>

          <Form action="/search" className="flex items-center gap-x-4">
            <Input
              name="query"
              placeholder="Search food item..."
              className="lg:max-w-xl"
            />
            <Button type="submit">
              <SearchIcon className="w-6 h-6" />
              <span className="hidden md:block">Search</span>
            </Button>
          </Form>
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

      <FoodSection />
    </>
  );
}
