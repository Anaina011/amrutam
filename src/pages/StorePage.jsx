import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiShoppingBag,
  FiGrid,
  FiDroplet,
  FiSmile,
  FiActivity,
  FiShield,
  FiArrowRight,
  FiPlus,
  FiStar,
  FiMessageCircle,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


import storeBg from "../assets/store-bg.png";
import HairSpaImg from "../assets/products/hair-spa.png";
import HerbalShampooImg from "../assets/products/herbal-shampoo.png";
import NariMaltImg from "../assets/products/nari-malt.png";

import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";
import appPromoImg from "../assets/app-promo-right.png";


const CATEGORIES = [
  { id: "All", label: "All", labelShort: "All", icon: <FiGrid className="w-6 h-6 text-[#3A643B]" /> },
  { id: "Hair", label: "Hair", icon: <FiDroplet className="w-6 h-6 text-[#3A643B]" /> },
  { id: "Skin", label: "Skin", icon: <FiSmile className="w-6 h-6 text-[#3A643B]" /> },
  { id: "Digestion", label: "Digestion", icon: <FiActivity className="w-6 h-6 text-[#3A643B]" /> },
  { id: "Bones", label: "Bones", icon: <FiActivity className="w-6 h-6 text-[#3A643B]" /> },
  { id: "Immunity", label: "Immunity", icon: <FiShield className="w-6 h-6 text-[#3A643B]" /> },
  { id: "More", label: "More", icon: <FiArrowRight className="w-6 h-6 text-[#3A643B]" /> },
];

const PRODUCTS = [
  {
    id: 1,
    title: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹ 649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
    category: "Hair",
    image: HairSpaImg,
  },
  {
    id: 2,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹ 649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
    category: "Hair",
    image: HerbalShampooImg,
  },
  {
    id: 3,
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹ 649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
    category: "Immunity",
    image: NariMaltImg,
  },
  {
    id: 4,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹ 649.00",
    size: "200 ml",
    rating: 5,
    reviews: 52,
    category: "Hair",
    image: HerbalShampooImg,
  },
];

function ProductCarouselSection({ title, products }) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setStartIndex(0);
  }, [products]);

  const visibleProducts = [];
  for (let i = 0; i < 3; i++) {
    if (products.length === 0) break;
    const index = (startIndex + i) % products.length;
    visibleProducts.push(products[index]);
  }

  const handleNext = () => {
    if (products.length === 0) return;
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section className="bg-[#FFF7E2]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#222222] mb-6">
          {title}
        </h2>

        <div className="flex items-center gap-6">
       <div className="flex-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {visibleProducts.map((product) => (
    <Link
      key={product.id}
      to={`/product/${product.id}`}
      className="bg-[#FFF7E2] flex flex-col"
    >
      <article className="flex flex-col">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="mt-4 flex-1 flex flex-col">
          <h3 className="text-base sm:text-lg font-medium text-[#222222] leading-snug text-center">
            {product.title}
          </h3>

          <p className="mt-2 text-sm text-[#555555] text-center">
            {product.price} • {product.size}
          </p>

          <div className="mt-3 flex items-center">
            <div className="flex items-center gap-1 text-[#F5A623] mx-auto">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar
                  key={i}
                  className={
                    i < product.rating
                      ? "fill-[#F5A623] text-[#F5A623]"
                      : "text-[#E0E0E0]"
                  }
                />
              ))}
              <span className="ml-1 text-sm text-[#555555]">
                ({product.reviews})
              </span>
            </div>

            <button
              type="button"
              className="w-9 h-9 rounded-md bg-[#3A643B] flex items-center justify-center ml-4"
            >
              <FiPlus className="text-white" />
            </button>
          </div>
        </div>
      </article>
    </Link>
  ))}
</div>


          <button
            onClick={handleNext}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#ECECEC] shadow-sm"
          >
            <FiArrowRight className="text-xl text-[#3A643B]" />
          </button>
        </div>

        <div className="mt-6 flex md:hidden justify-center">
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#ECECEC] shadow-sm"
          >
            <FiArrowRight className="text-xl text-[#3A643B]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF7E2]">
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${storeBg})` }}
      >
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <h1 className="text-center text-3xl sm:text-4xl font-semibold text-[#2F3443] mb-8">
            Store
          </h1>

          <div className="flex items-center justify-center gap-4">

            <div className="flex-1 max-w-3xl">
              <div className="flex items-center gap-3 bg-white rounded-[14px] shadow-md px-4 sm:px-6 py-4">
                <FiSearch className="text-xl text-[#757575]" />
                <input
                  type="text"
                  placeholder="Search for Kuntal Care"
                  className="font-nunito flex-1 bg-transparent border-none outline-none text-[16px] sm:text-base text-[#222222] placeholder:text-[#8E8E8E]"
                />
              </div>
            </div>

            <button className="hidden sm:flex items-center justify-center w-11 h-11 rounded-[14px] bg-white shadow-md border border-[#F2F2F2]">
              <FiShoppingBag className="text-xl text-[#222222]" />
            </button>
          </div>

          <div className="mt-4 flex justify-center sm:hidden">
            <button className="flex items-center justify-center w-11 h-11 rounded-[14px] bg-white shadow-md border border-[#F2F2F2]">
              <FiShoppingBag className="text-xl text-[#222222]" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7E2]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-6 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col items-center gap-2 min-w-[72px]"
                >
                  <div
                    className={`flex items-center justify-center rounded-full border-4 ${isActive ? "border-[#3A643B]" : "border-white"
                      } bg-white p-1`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#E3EFE6] flex items-center justify-center">
                      {cat.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[#222222]">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ProductCarouselSection
        title="Summer Collection"
        products={filteredProducts}
      />

      <ProductCarouselSection
        title="Summer Collection"
        products={filteredProducts}
      />

      <section className="bg-[#FFF7E2]">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#275A3A] leading-tight">
              Download Amrutam Ayurveda
              <br />
              App Now
            </h2>

            <p className="mt-4 text-base text-[#555555] max-w-md leading-relaxed">
              The Amrutam Ayurveda App is your one-stop app for all things Ayurveda!
              Apart from mimicking the website, the app has added benefits
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Access To Prescriptions",
                "Track Health Efficiently",
                "Direct Chat With Doctors",
                "In-App Reminders For Consultations",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-[#E5DCC5] px-4 py-4 shadow-sm bg-transparent w-[250px]"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3A643B] flex items-center justify-center">
                    <FiMessageCircle className="text-[#3A643B]" />
                  </div>
                  <p className="text-[16px] font-medium text-[#275A3A] leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <img
                src={googlePlayBadge}
                alt="Get it on Google Play"
                className="h-16 w-auto object-contain"
              />
              <img
                src={appStoreBadge}
                alt="Download on the App Store"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>


          <div className="flex justify-center lg:justify-end">
            <img
              src={appPromoImg}
              alt="Amrutam app preview"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <footer className="bg-[#E3EFE6]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr] items-start">

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#275A3A]">
              Get in touch
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#1F3B28]">
              <p>support@amrutam.global</p>
              <p>
                Amrutam Pharmaceuticals Pvt Ltd.,<br />
                chitragupt ganj, Nai Sadak, Lashkar,<br />
                Gwalior - 474001
              </p>
              <p>+91 9713171999</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaYoutube,
                FaTwitter,
                FaLinkedinIn,
                FaWhatsapp,
              ].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-full bg-[#275A3A] flex items-center justify-center text-white"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#275A3A]">
              Information
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-[#1F3B28]">
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Privacy Policy for Mobile Apps</li>
              <li>Shipping, return and cancellation Policy</li>
              <li>International Delivery</li>
              <li>For Businesses, Hotels, and Resorts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#275A3A]">
              Subscribe to our Newsletter and join
              <br />
              Amrutam Family today!
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <div className="flex-1 flex rounded-full border border-[#275A3A] overflow-hidden bg-[#E3EFE6]">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>

    </div>
  );
}
