import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search food item or restaurant..."
            className="w-[480px] hidden md:flex"
          />
          <Button size="icon">
            <SearchIcon className="w-6 h-6" />
          </Button>
        </div>

        <ShoppingBagIcon className="w-8 h-8" />

        <Button>Sign In</Button>
      </div>
    </header>
  );
}
