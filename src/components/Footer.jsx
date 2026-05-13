import Logo from "@/components/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12">
      
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={64}/>

              <h2 className="text-3xl font-bold text-black">
                DineDrop
              </h2>
            </div>

            <p className="mt-5 text-gray-600 leading-7 max-w-xs">
              Bringing flavor and elegance to every occasion since 2014.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline transition"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline transition"
                >
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline transition"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li className="text-gray-600">Wedding Catering</li>
              <li className="text-gray-600">Corporate Events</li>
              <li className="text-gray-600">Private Parties</li>
              <li className="text-gray-600">Custom Menus</li>
              <li className="text-gray-600">Event Planning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              
              <div className="flex items-start gap-3">
                <Phone className="mt-1" size={18} />

                <p className="text-gray-600">
                  (555) 123-4567
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1" size={18} />

                <p className="text-gray-600">
                  hello@caterly.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1" size={18} />

                <p className="text-gray-600">
                  123 Culinary Lane <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
              >
                <BsInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition"
              >
                <BsTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm leading-6">
            © 2026 Dinedrop. All rights reserved. Crafted with passion for
            exceptional food experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}