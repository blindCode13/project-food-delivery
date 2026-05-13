import Button from "@/components/Button";
import { ShoppingBasket } from "lucide-react";

const foodItems = [
  {
    id: 1,
    name: "Whole Wheat Loaf",
    description:
      "Nutritious, fiber-rich, and freshly baked wholesome loaves for everyday meals.",
    price: "$4.50",
    stock: "In Stock: 40",
    stockColor: "green",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    id: 2,
    name: "Sweet Berry Muffin",
    description:
      "Soft muffins filled with fresh berries and delicious creamy flavor.",
    price: "$6.50",
    stock: "In Stock: 40",
    stockColor: "green",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
  },
  {
    id: 3,
    name: "Red Velvet Treat",
    description:
      "Rich, moist red velvet layered with smooth creamy frosting.",
    price: "$7.00",
    stock: "In Stock: 40",
    stockColor: "green",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 4,
    name: "Frosted Bliss Donut",
    description:
      "Soft frosted donuts topped with colorful sweet sprinkles.",
    price: "$5.00",
    stock: "Low Stock: 10",
    stockColor: "yellow",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

export default function FoodCards() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12">

      <div className="text-center mb-14">
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-black uppercase">Our Popular Food Items</h2>
        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">Explore our freshly baked breads, tasty desserts, and sweet treats crafted with premium ingredients and delivered with care.</p>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row gap-8 flex-wrap justify-center">

        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[30px] p-5 shadow-sm hover:shadow-lg transition duration-300 w-full lg:w-[48%]"
          >

            <div className="flex flex-col md:flex-row items-center gap-6">

              <div className="w-full md:w-[180px] h-[160px] overflow-hidden rounded-3xl flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 w-full">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="text-2xl font-bold text-black">
                    {item.name}
                  </h3>

                  <span
                    className={`text-sm font-semibold px-4 py-1 rounded-full w-fit ${item.stockColor === "green"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                      }`}
                  >
                    {item.stock}
                  </span>
                </div>

                <p className="mt-3 text-gray-500 leading-7">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-black">
                    {item.price}
                  </span>

                  <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition cursor-pointer">
                    <ShoppingBasket size={24} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="flex items-center justify-center mt-8">
        <Button className="bg-black text-white">Explore More</Button>
      </div>
    </section>
  );
}