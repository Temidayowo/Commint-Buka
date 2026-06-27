import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { image1, image2, image3 } from "../assets/hero_imgs/HeroImages";
import {
  MenuImage1,
  MenuImage2,
  MenuImage3,
  MenuImage4,
} from "../assets/Menu/MenuImages";
import FoodCard from "../components/FoodCard";
import LocationCard from "../components/home/LocationCard";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All Dishes");

  const categories = [
    "All Dishes",
    "Rice Dishes",
    "Soups & Swallows",
    "Proteins",
  ];

  return (
    <main>
      {/* Hero Section Container */}
      <section className="relative bg-[#9e1212] w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-28 sm:py-24 md:py-28 lg:py-32 xl:py-36 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden">
        {/* The Self-Closing Background Dot Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(#ffffff20 1.5px, transparent 1.5px)",
            backgroundSize: "38px 38px",
            pointerEvents: "none",
          }}
        />

        {/* Left Column Content (Text) */}
        <div className="relative z-10">
          <h1 className="font-playfair  md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white text-center lg:text-left lg:block hidden">
            Delicious Nigerian Cuisine
            <br />
            <span className="text-[#fba512] italic">
              Delivered to Your Doorstep
            </span>
          </h1>

          <h1 className="font-playfair text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-center lg:text-left lg:hidden">
            Delicious Nigerian Cuisine&nbsp;
            <span className="text-[#fba512] italic">
              Delivered to Your Doorstep
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 lg:pr-14 font-jakarta text-center lg:text-left">
            Experience the authentic taste of home with our rich, slow-cooked
            soups, perfectly paired swallows, and savory rice dishes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
            <NavLink
              className="bg-[#fba512] text-[#9e1212] px-8 py-3 rounded-4xl hover:bg-[#e09a0f] font-semibold text-base transition-colors cursor-pointer flex justify-center items-center gap-2 w-full sm:w-auto"
              to="/order"
            >
              Order via Chowdeck <ArrowRight />
            </NavLink>

            <NavLink
              className="bg-transparent text-white px-8 py-3 rounded-4xl hover:bg-white/10 font-semibold text-base transition-colors cursor-pointer flex items-center justify-center gap-2 border border-white/60 hover:border-white w-full sm:w-auto"
              to="/menu"
            >
              View Menu
            </NavLink>
          </div>
        </div>

        {/* Right Column Content (Visual Placeholder Card) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-48 sm:h-56 md:h-64 lg:h-80 xl:h-112 2xl:h-128">
          {/* Big left image - spans both rows */}
          <div className="row-span-2 rounded-2xl overflow-hidden">
            <img
              src={image1}
              alt="Jollof rice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top right */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={image2}
              alt="Fufu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={image3}
              alt="Fish"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="bg-[#f9fafb] relative w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-20 sm:py-24 md:py-26 lg:py-28 xl:py-30 overflow-hidden">
        <h3 className="text-sm font-bold font-jakarta text-center text-[#9e1212] uppercase">
          Our Menu
        </h3>
        <h1 className="text-4xl font-extrabold font-playfair text-center">
          Popular Categories
        </h1>
        <div>
          <div className="flex overflow-x-auto md:justify-center pb-2 gap-10 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-4xl font-normal text-base transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  activeCategory === category
                    ? "bg-[#9e1212] text-white hover:bg-[#8a0f0f]"
                    : "bg-transparent text-gray-700 hover:bg-[#9e1212]/10 border border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 mt-10">
            <FoodCard
              image={MenuImage1}
              name="Classic Jollof Rice"
              price="3,500"
              description="Smoky party jollof served with fried plantain and your choice of protein."
              popular={true}
            />
            <FoodCard
              image={MenuImage2}
              name="Egusi Soup and Pounded Yam"
              price="3,500"
              description="Smoky party jollof served with fried plantain and your choice of protein."
              popular={false}
            />
            <FoodCard
              image={MenuImage3}
              name="Ofada Rice & Ayamase"
              price="3,500"
              description="Smoky party jollof served with fried plantain and your choice of protein."
              popular={false}
            />
            <FoodCard
              image={MenuImage4}
              name="Special Fried Rice"
              price="3,500"
              description="Smoky party jollof served with fried plantain and your choice of protein."
              popular={true}
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="flex gap-2 items-center border border-gray-700 px-6 py-2 rounded-4xl font-medium justify-center cursor-pointer">
            View Full Menu
            <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64 py-20 sm:py-24 md:py-26 lg:py-28 xl:py-30 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="text-[42px] font-extrabold font-playfair">
            Find a Commint Buka near you
          </h1>
          <p className="font-jakarta text-lg tracking-wide text-gray-700">
            Visit us for a dine-in experience or call to place a direct pickup
            order. We're open daily from 8:00 AM to 10:00 PM.
          </p>
          <LocationCard
            Outlet="Ikeja Outlet"
            Branch="Mainland Branch"
            Phone="0909 000 5472"
          />

          <LocationCard
            Outlet="Surulere Outlet"
            Branch="Central Branch"
            Phone="0808 390 2555"
          />
        </div>
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src="/src/assets/gen_0f5c0ef6ae_d28026d1aa3bb4b7.png"
            alt="Location"
            className="w-full h-full object-cover shadow-lg rounded-2xl"
          />
          <div className="absolute rounded-xl m-auto w-10/12 bg-white flex flex-col items-center justify-center shadow-lg px-6 py-4 gap-2">
            <h3 className="text-lg font-bold mb-2 font-jakarta">Prefer Delivery?</h3>
            <p className="font-jakarta text-center">Get it hot and fresh through our delivery partners.</p>
            <button className="bg-[#fba512] text-white font-jakarta py-2 px-4 rounded-lg hover:bg-[#e5980f] w-full transition-colors cursor pointer">
              Order on Chowdeck
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
