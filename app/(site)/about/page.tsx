import Link from "next/link";
import Image from "next/image";
import { ClockIcon, MapPinIcon, UtensilsIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 lg:p-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          About <span className="text-primary">Foodie</span>
        </h1>
        <p className="text-lg text-gray-700">
          Welcome to <b>Foodie</b>, your trusted <b>local food guide!</b>
          We provide up-to-date information on{" "}
          <b>food availability, prices, and opening times </b>
          of restaurants, hotels, and canteens in and around the{" "}
          <b>University of Kelaniya</b>.
        </p>
      </div>

      <div className="mt-8">
        <Image
          src="/assets/images/FOODIE.png"
          alt="Local Food in Kelaniya"
          width={800}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to make it <b>easier for students and locals </b> to
          find <b>affordable and quality food</b> in the University of Kelaniya
          area. We help you discover:
        </p>
        <ul className="list-disc pl-0 space-y-0 text-lg text-gray-700 mt-2  max-w-fit mx-auto text-left">
          <li className="leading-tight">
            Where to buy your favorite local dishes{" "}
          </li>
          <li className="leading-tight">
            Which restaurants and canteens are open now{" "}
          </li>
          <li className="leading-tight">The latest food prices </li>
        </ul>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <MapPinIcon className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-medium">Find Nearby Food</h3>
          <p className="text-gray-600">
            Discover the best food spots within and around Kelaniya University.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ClockIcon className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-medium">Check Opening Hours</h3>
          <p className="text-gray-600">
            Stay updated on restaurant and canteen opening and closing times.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <UtensilsIcon className="text-primary text-4xl mb-4" />
          <h3 className="text-xl font-medium">Compare Food Prices</h3>
          <p className="text-gray-600">
            Get the latest price updates to find budget-friendly meals.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Why People Love Foodie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              {`"Foodie has helped me find affordable lunch spots near campus. Now
              I know where to get the best rice & curry!"`}
            </p>
            <span className="text-primary font-medium mt-4 block">
              - Nishan K, University Student
            </span>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              {`"I love how easy it is to check which canteens are open. No more guessing if the place is closed!"`}
            </p>
            <span className="text-primary font-medium mt-4 block">
              - Sanduni P, Lecturer
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">
          Have questions? Reach out to us:
        </p>
        <p className="text-lg font-medium text-primary mt-2">
          📞 +94 123456789
        </p>
        <p className="text-lg font-medium text-primary mt-2">
          📧 support@foodie.com
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
