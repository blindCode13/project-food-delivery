"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="fixed w-full px-4 xl:px-6 z-20">
        <nav
          className={`mt-6 w-full h-16 flex items-center justify-between text-white px-4 transition-all duration-300 ${
            scrolled
              ? "bg-black/70 backdrop-blur-md rounded-full shadow-lg"
              : "bg-transparent rounded-none"
          }`}
        >
          
          <Link href="/" className="flex items-center justify-center gap-2">
            <Logo size={52}/>
            <h1 className="text-3xl font-semibold">DineDrop</h1>
          </Link>

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

          <button
            onClick={() => setMobileMenu(true)}
            className="xl:hidden"
          >
            <Menu size={32}/>
          </button>
        </nav>
      </section>

      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ${
          mobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenu(false)}
        />

        <div className="relative w-full h-full p-4">
          <div className="w-full h-full bg-black/60 text-white rounded-[2rem] p-6 flex flex-col">

            <div className="flex items-center justify-between">
              
              <Link href="/" className="flex items-center gap-2">
                <Logo size={48}/>
                <h2 className="text-3xl font-bold">
                  DineDrop
                </h2>
              </Link>

              <button onClick={() => setMobileMenu(false)}>
                <X size={32}/>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 mt-10">
              
              <Link
                href="#"
                className="text-5xl font-semibold tracking-tight"
                onClick={() => setMobileMenu(false)}
              >
                Services
              </Link>

              <Link
                href="#"
                className="text-5xl font-semibold tracking-tight"
                onClick={() => setMobileMenu(false)}
              >
                Menu
              </Link>

              <Link
                href="#"
                className="text-5xl font-semibold tracking-tight"
                onClick={() => setMobileMenu(false)}
              >
                Restaurants
              </Link>

              <Link
                href="#"
                className="text-5xl font-semibold tracking-tight"
                onClick={() => setMobileMenu(false)}
              >
                About
              </Link>

              <Link
                href="#"
                className="text-5xl font-semibold tracking-tight"
                onClick={() => setMobileMenu(false)}
              >
                Contact
              </Link>
            </div>

            <Button href="/login">
              Login
            </Button>

          </div>
        </div>
      </div>
    </>
  );
}