import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className="fixed w-full px-6 py-2 z-20">
      <nav className="mt-6 w-full h-16 rounded-full flex items-center justify-between text-white px-4">
        <div className="flex items-center justify-center gap-2">
          <Logo size={56}/>
          <h1 className="text-3xl font-semibold">DineDrop</h1>
        </div>
        <ul className="hidden xl:flex items-center justify-center font-medium text-lg [&_a]:hover:bg-white [&_a]:hover:text-black [&_a]:px-4 [&_a]:py-1 [&_a]:rounded-full">
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Menu</Link></li>
          <li><Link href="#">Restaurants</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
        <div className="hidden xl:flex">
          <Button href="/login">Login</Button>
        </div>
        <Menu className="xl:hidden"/>
      </nav>
    </section>
  );
}