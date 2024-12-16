import { dishes } from "@/data";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SearchParamProps = {
  searchParams: { query: string };
};

export default async function SearchResultPage({
  searchParams,
}: SearchParamProps) {
  const { query } = await searchParams;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-medium">Seach results for {`"${query}"`}</h2>

      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dishes.map((dish) => (
          <Link
            href={"/"}
            key={dish.name}
            className="flex items-center space-x-4 mt-8 bg-gray-100 p-4 rounded-lg"
          >
            <Image
              className="w-24 h-24 object-cover rounded-lg"
              width={1024}
              height={1024}
              src={dish.imgUrl}
              alt={dish.name}
            />

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">{dish.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-1">
                {dish.description}
              </p>
              <p className="text-gray-600">
                ${dish.price} • {dish.time}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <Link
        href="/"
        className="text-primary font-medium flex items-center justify-end gap-3"
      >
        View More <ChevronRightIcon className="size-5" />
      </Link>
    </div>
  );
}
