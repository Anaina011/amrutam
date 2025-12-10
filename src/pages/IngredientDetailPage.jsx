// src/pages/IngredientDetailPage.jsx
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft, FiPlus } from "react-icons/fi";

import GokhruImg from "../assets/Gokhru.png";
import HairSpaImg from "../assets/products/hair-spa.png";
import HerbalShampooImg from "../assets/products/herbal-shampoo.png";

import DownloadAppSection from "../components/DownloadAppSection";
import Footer from "../components/Footer";

// ------------ DATA ------------
const INGREDIENTS = {
  gokhru: {
    slug: "gokhru",
    name: "Gokhru",
    image: GokhruImg,
    description:
      "Also known as Tribulus, it's used to prevent infections and manage diabetes. It's known for its potential to boost testosterone levels and improve reproductive health.",
  },
};

const INGREDIENT_PRODUCTS = {
  gokhru: [
    {
      id: 1,
      title:
        "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
      price: "₹ 649.00",
      image: HerbalShampooImg,
    },
    {
      id: 2,
      title: "Amrutam Kuntal care Hair Spa | Do- it Yourself Hair Treatment",
      price: "₹ 649.00",
      image: HairSpaImg,
    },
    {
      id: 3,
      title:
        "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
      price: "₹ 649.00",
      image: HerbalShampooImg,
    },
    {
      id: 4,
      title:
        "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
      price: "₹ 649.00",
      image: HerbalShampooImg,
    },
  ],
};

// ------------ PAGE ------------
export default function IngredientDetailPage() {
  const { slug } = useParams();

// Make a pretty version of the slug for display, e.g. "shatavari" -> "Shatavari"
const prettyName =
  slug && slug.length
    ? slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase()
    : "Gokhru";

// Always use Gokhru's data for image + description
const gokhruData = INGREDIENTS.gokhru;

// If slug is "gokhru" -> show full gokhru data
// Otherwise -> same data but with only the name changed
const ingredient =
  slug === "gokhru"
    ? gokhruData
    : {
        ...gokhruData,
        slug,
        name: prettyName, // only name is different
      };

// For now, always show Gokhru-related products
const products = INGREDIENT_PRODUCTS.gokhru || [];


  return (
    <div className="bg-[#FFF7E2] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-8 lg:py-10">
        {/* Back button */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-full border border-[#E0D4B8] bg-white px-4 py-2 text-xs font-medium text-[#275A3A] shadow-sm hover:shadow-md transition"
        >
          <FiChevronLeft className="text-sm" />
          <span>Back</span>
        </Link>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* LEFT: ingredient image + text */}
          <div className="flex flex-col items-start">
            {/* image card */}
            <div className="w-[260px] h-[260px] rounded-[24px] bg-white overflow-hidden flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* name + description */}
            <h1 className="mt-6 text-xl md:text-2xl font-semibold text-[#222222]">
              {ingredient.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[#555555] max-w-md">
              {ingredient.description}
            </p>
          </div>

          {/* RIGHT: products list */}
          <div>
            <h2 className="text-sm md:text-base font-semibold text-[#222222] mb-6">
              Products with{" "}
              <span className="italic">&quot;{ingredient.name}&quot;</span> as
              primary ingredient
            </h2>

            <div className="space-y-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-[24px] bg-white px-4 py-4 md:px-5 md:py-5 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                >
                  {/* product image */}
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-[20px] overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-medium text-[#222222] leading-snug">
                      {product.title}
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-[#555555]">
                      {product.price}
                    </p>
                  </div>

                  {/* plus button */}
                  <button
                    type="button"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#3A643B] flex items-center justify-center flex-shrink-0"
                  >
                    <FiPlus className="text-white text-sm" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DownloadAppSection />
      <Footer />
    </div>
  );
}
