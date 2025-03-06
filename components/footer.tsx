import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-auto w-full mx-auto bg-primary text-center p-20 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Foodie</h2>

        <ul className="flex items-center gap-32">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <p>Contact +94 757979938</p>
      </div>
    </footer>
  );
}
