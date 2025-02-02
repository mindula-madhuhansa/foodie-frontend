import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to **Foodie**! We are your go-to platform for discovering the best food in town. 
      </p>
      <Link href="/" className="text-primary font-medium hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
