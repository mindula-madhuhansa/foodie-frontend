export default function Footer() {
  return (
    <footer className="h-auto w-full mx-auto bg-primary text-center p-20 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Foodie</h2>

        <ul className="flex items-center gap-32">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <p>Contact +94 123456789</p>
      </div>

      <div></div>
    </footer>
  );
}
