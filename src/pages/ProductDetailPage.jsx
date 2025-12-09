// src/pages/ProductDetailPage.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiStar,
  FiChevronRight,
  FiChevronLeft,
  FiMinus,
  FiPlus,
  FiArrowRight,
  FiSearch,
  FiShoppingBag,
  FiGrid,
  FiDroplet,
  FiSmile,
  FiActivity,
  FiShield,
} from "react-icons/fi";

import HairSpaImg from "../assets/products/hair-spa.png";
import HerbalShampooImg from "../assets/products/herbal-shampoo.png";
import NariMaltImg from "../assets/products/nari-malt.png";
import storeBg from "../assets/store-bg.png";

// ----------------- DATA -----------------

const CATEGORIES = [
  {
    id: "All",
    label: "All",
    icon: <FiGrid className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "Hair",
    label: "Hair",
    icon: <FiDroplet className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "Skin",
    label: "Skin",
    icon: <FiSmile className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "Digestion",
    label: "Digestion",
    icon: <FiActivity className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "Bones",
    label: "Bones",
    icon: <FiActivity className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "Immunity",
    label: "Immunity",
    icon: <FiShield className="w-6 h-6 text-[#3A643B]" />,
  },
  {
    id: "More",
    label: "More",
    icon: <FiChevronRight className="w-6 h-6 text-[#3A643B]" />,
  },
];

const PRODUCT_DETAILS = {
  1: {
    id: 1,
    category: "Hair",
    title: "Amrutam Kuntal care Hair Spa | Do- it Yourself Hair Treatment",
    price: "₹ 649",
    rating: 5,
    reviews: 204,
    sizes: ["200 ml", "100 ml", "Pack of 3"],
    description: [
      "Amrutam's Kuntal Care Do-It-Yourself Hair Spa is an ayurvedic marvel filled to the brim with revitalizing herbs and essential oils like Eucalyptus oil, Triphala, Balchhad and Bhringraj.",
      "These Ayurvedic ingredients when fused together make a potent dollop that nourishes dry and frizzy hair making it soft and bouncy! This spa treatment revitalizes the roots, promotes growth, provides shine, coats hair with a moisturizing layer and is the best stress reliever!",
      "It's time to bring spa home and unwind.",
    ],
    image: HairSpaImg,
    thumbnails: [HairSpaImg, HairSpaImg, HairSpaImg],
  },
  2: {
    id: 2,
    category: "Hair",
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹ 649",
    rating: 5,
    reviews: 52,
    sizes: ["200 ml", "100 ml", "Pack of 3"],
    description: [
      "A gentle herbal shampoo formulated for healthy, dynamic hair.",
    ],
    image: HerbalShampooImg,
    thumbnails: [HerbalShampooImg, HerbalShampooImg, HerbalShampooImg],
  },
  3: {
    id: 3,
    category: "Immunity",
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹ 649",
    rating: 5,
    reviews: 52,
    sizes: ["200 ml", "Pack of 3"],
    description: [
      "A nourishing malt for women’s health and beauty, made with ayurvedic herbs.",
    ],
    image: NariMaltImg,
    thumbnails: [NariMaltImg, NariMaltImg, NariMaltImg],
  },
};

// Simple experts data for the carousel
const EXPERTS = [
  {
    id: 1,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialty: "Skin Specialist",
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const PRODUCT_HIGHLIGHTS = [
  "Helps with Dry, Frizzy Hair",
  "Relaxes the scalp, improves hair health",
  "Makes the hair smooth and shiny",
  "Reduces hairfall, repairs damaged hair",
];

const KEY_INGREDIENTS = [
  {
    name: "Shatavari",
    desc: "Naturally enhances brain and relieves pain",
  },
  {
    name: "Shatavari",
    desc: "Naturally enhances brain and relieves pain",
  },
  {
    name: "Shatavari",
    desc: "Naturally enhances brain and relieves pain",
  },
  {
    name: "Shatavari",
    desc: "Naturally enhances brain and relieves pain",
  },
];

const REVIEWS = [
  {
    id: 1,
    initials: "SJ",
    name: "Sabarinath J",
    date: "20 January 2023",
    rating: 5,
    text: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
  },
  {
    id: 2,
    initials: "SJ",
    name: "Sabarinath J",
    date: "20 January 2023",
    rating: 5,
    text: "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
  },
];

const ALSO_BOUGHT = [
  {
    id: 1,
    title: "Amrutam Kuntal care Hair Spa | Do- it yourself Hair Treatment",
    price: "₹ 649.00",
    size: "200 ml",
    image: HairSpaImg,
    reviews: 52,
  },
  {
    id: 2,
    title:
      "Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural and Dynamic Hair",
    price: "₹ 649.00",
    size: "200 ml",
    image: HerbalShampooImg,
    reviews: 52,
  },
  {
    id: 3,
    title:
      "Amrutam Nari Sondarya Malt | Complete Care For Women's Health And Beauty",
    price: "₹ 649.00",
    size: "200 ml",
    image: NariMaltImg,
    reviews: 52,
  },
];

// ----------------- EXPERTS SECTION -----------------
function ExpertsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const perView = 3;
  const total = EXPERTS.length;

  const totalGroups = Math.ceil(total / perView);
  const activeGroup = Math.floor(startIndex / perView);

  const visibleExperts = [];
  for (let i = 0; i < perView; i++) {
    const idx = (startIndex + i) % total;
    visibleExperts.push(EXPERTS[idx]);
  }

  const handlePrev = () => {
    setStartIndex((prev) => {
      const next = prev - perView;
      return next < 0 ? (totalGroups - 1) * perView : next;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + perView) % total);
  };

  return (
    <section className="bg-[#FFFFFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#222222] mb-10">
          Meet our Experts
        </h2>

        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#E0E0E0] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.06)] mr-4"
          >
            <FiChevronLeft className="text-xl text-[#275A3A]" />
          </button>

          {/* Cards */}
          <div className="flex-1 grid gap-6 md:grid-cols-3">
            {visibleExperts.map((doc) => (
              <article
                key={doc.id}
                className="rounded-[32px] bg-[#FFF6E2] shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex flex-col items-center pt-10 pb-6 px-6"
              >
                <div className="relative mb-6">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-[0_6px_15px_rgba(0,0,0,0.2)]"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold rounded-full px-3 py-1 flex items-center gap-1">
                    <span>{doc.rating.toFixed(1)}</span>
                    <FiStar className="w-3 h-3 text-[#F5A623]" />
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#222222] text-center">
                  {doc.name}
                </h3>
                <p className="mt-1 text-sm text-[#777777] text-center">
                  {doc.title}
                </p>

                <p className="mt-3 text-sm text-[#333333] flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <span>{doc.experience}</span>
                </p>

                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF3E6] border border-[#C5D7C4] px-4 py-1.5 text-xs font-medium text-[#275A3A]">
                    <span>🔗</span>
                    <span>{doc.specialty}</span>
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-8 w-full rounded-b-[32px] rounded-t-[0] bg-[#275A3A] text-white text-sm font-semibold py-4 -mx-6 px-6"
                >
                  Book a session
                </button>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#E0E0E0] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.06)] ml-4"
          >
            <FiChevronRight className="text-xl text-[#275A3A]" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 rounded-full ${
                idx === activeGroup
                  ? "bg-[#275A3A]"
                  : "border border-[#C7D7C5] bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* Find more experts */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#275A3A] bg-white text-sm font-semibold text-[#275A3A] shadow-[0_10px_22px_rgba(0,0,0,0.07)]"
          >
            <span>Find more experts</span>
            <FiArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ----------------- MAIN PAGE -----------------
export default function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCT_DETAILS[id] || PRODUCT_DETAILS[1];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    product.category || "All"
  );

  const activeImage = product.thumbnails[activeIndex];

  const handleDecrease = () => setQty((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQty((q) => q + 1);

  const handleNextImage = () => {
    setActiveIndex((prev) => (prev + 1) % product.thumbnails.length);
  };

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#FFF7E2] min-h-screen">
      {/* ========== STORE HERO + CATEGORY BAR (same as shop) ========== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${storeBg})` }}
      >
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-14 lg:py-16">
          <h1 className="text-center text-3xl sm:text-4xl font-semibold text-[#2F3443] mb-8">
            Store
          </h1>

          {/* Search + bag */}
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

          {/* Bag icon mobile */}
          <div className="mt-4 flex justify-center sm:hidden">
            <button className="flex items-center justify-center w-11 h-11 rounded-[14px] bg-white shadow-md border border-[#F2F2F2]">
              <FiShoppingBag className="text-xl text-[#222222]" />
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR (only visual, no filtering here) */}
      <section className="bg-[#FFF7E2]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-6 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col items-center gap-2 min-w-[72px]"
                >
                  <div
                    className={`flex items-center justify-center rounded-full border-4 ${
                      isActive ? "border-[#3A643B]" : "border-white"
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

      {/* ========== MAIN PRODUCT HERO SECTION (2 columns on desktop) ========== */}
      <section className="max-w-6xl mx-auto px-4 pt-6 lg:pt-10 pb-12 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT: images */}
          <div>
            <div className="relative rounded-[32px] overflow-hidden bg-white">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-[420px] md:h-[460px] object-cover"
              />
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute top-1/2 -right-6 -translate-y-1/2 w-14 h-14 rounded-full bg-[#3A643B] flex items-center justify-center shadow-lg"
              >
                <FiChevronRight className="text-white text-2xl" />
              </button>
            </div>

            <div className="mt-5 flex gap-4">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleThumbClick(idx)}
                  className={`rounded-2xl overflow-hidden border transition ${
                    activeIndex === idx
                      ? "border-[#3A643B]"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    className="w-[210px] h-[210px] object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: info */}
          <div className="space-y-5 lg:pt-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#2F3A3C] leading-snug">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center text-[#F5A623]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
                  />
                ))}
              </div>
              <span className="text-[#333] font-medium">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[#777]">({product.reviews} reviews)</span>
            </div>

            <p className="text-xl font-semibold text-[#2F3A3C]">
              {product.price}
            </p>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full text-sm border transition ${
                    selectedSize === size
                      ? "bg-[#3A643B] text-white border-[#3A643B]"
                      : "bg-white text-[#333] border-[#E0E0E0]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center border border-[#E0E0E0] rounded-full overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <FiMinus className="text-[#333]" />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <FiPlus className="text-[#333]" />
                </button>
              </div>

              <button
                type="button"
                className="flex-1 px-6 py-3 rounded-full bg-[#3A643B] text-white text-sm font-semibold"
              >
                Add to cart
              </button>
            </div>

            <div className="text-sm leading-relaxed text-[#555] space-y-2">
              {product.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT HIGHLIGHTS (right side from middle) ========== */}
      <section className="bg-[#FFF7E2] pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🥣</span>
              <h2 className="text-xl md:text-2xl font-semibold text-[#222222]">
                Product Highlights
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {PRODUCT_HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] bg-[#FDEAD2] px-5 py-6 text-sm leading-relaxed text-[#333]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY INGREDIENTS */}
      <section className="bg-[#FFF7E2] pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🥣</span>
                <h2 className="text-xl md:text-2xl font-semibold text-[#222222]">
                  Key Ingredients
                </h2>
              </div>
              <button className="text-sm font-semibold text-[#3A643B]">
                View All Ingredients
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {KEY_INGREDIENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-[24px] bg-[#FDEAD2] px-5 py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E4D2B8]" />
                  <div>
                    <p className="text-sm font-semibold text-[#222222]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-[#444444] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE / GENERAL / FAQ / TRUST THE VOICE */}
      <section className="bg-[#FFF7E2] pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#222222]">
                How to use
              </h3>
              <div className="rounded-[24px] bg-[#FDEAD2] px-5 py-5 text-sm text-[#444444] leading-relaxed">
                Mix one or two tablespoons of Herbal Child Care Malt with milk
                or 100–200ml warm water and then consume twice a day or consult
                our Ayurvedic Expert to find the right Ayurvedic recipe for you.
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#222222]">
                General Instructions
              </h3>
              <div className="rounded-[24px] bg-[#FDEAD2] px-5 py-5 text-sm text-[#444444] leading-relaxed">
                Store in a cool and dry place away from direct sunlight. Not
                advisable for diabetic patients
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#222222]">
                Commonly Asked Questions
              </h3>
              <div className="space-y-3">
                <div className="rounded-[24px] bg-[#FDEAD2] px-5 py-5 text-sm text-[#444444] leading-relaxed">
                  <p className="font-semibold">
                    Who should be using Amrutam Child Care Malt | Herbal
                    Supplement for Child Care
                  </p>
                  <p className="mt-1">
                    This product is ideal for growing babies and kids to nurture
                    their health in a holistic manner
                  </p>
                </div>

                <div className="rounded-[24px] bg-[#FDEAD2] px-5 py-5 text-sm text-[#444444] leading-relaxed">
                  <p className="font-semibold">
                    Why choose Amrutam Child Care Malt | Herbal Supplement for
                    Child Care
                  </p>
                  <p className="mt-1">
                    Amrutam&apos;s Child Care Malt helps improve immunity and is
                    useful in enhancing vitality and vigor in children. This
                    100% natural Ayurvedic jam is extremely effective in
                    fighting chronic diseases. Giving your little one
                    Amrutam&apos;s Child Care Malt daily will help them improve
                    their appetite and digestion.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#222222]">
                Trust the voice
              </h3>
              <div className="rounded-[24px] overflow-hidden bg-[#FDEAD2]">
                <div className="w-full h-[260px] md:h-[320px] flex items-center justify-center text-sm text-[#555555]">
                  Video placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS & RATINGS */}
      <section className="bg-[#FFF7E2] pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#222222]">
            Reviews and Ratings
          </h2>

          <div className="mt-8 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6">
            <div className="w-full md:w-[320px] rounded-[24px] bg-[#FDEAD2] px-6 py-6 flex flex-col justify-center">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-[#222222]">
                  5.0
                </span>
                <div className="flex items-center text-[#F5A623]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-xs text-[#555555]">Based on 20 reviews</p>
            </div>

            <div className="flex gap-4 justify-center md:justify-end">
              <button
                type="button"
                className="px-8 py-3 rounded-[18px] bg-[#FFF7E2] border border-[#F3DEC5] shadow-[0_6px_14px_rgba(0,0,0,0.05)] text-sm font-medium text-[#275A3A] transition-transform duration-150 hover:-translate-y-[2px]"
              >
                See More Reviews
              </button>
              <button
                type="button"
                className="px-8 py-3 rounded-[18px] bg-[#FFF7E2] border border-[#F3DEC5] shadow-[0_6px_14px_rgba(0,0,0,0.05)] text-sm font-medium text-[#275A3A] transition-transform duration-150 hover:-translate-y-[2px]"
              >
                Write a review
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="rounded-[24px] bg-[#FDEAD2] px-6 py-5 flex flex-col md:flex-row items-start gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-[#222222]">
                    {review.initials}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-[#222222]">{review.text}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#555555]">
                    <span>{review.name}</span>
                    <span className="text-[10px]">•</span>
                    <span>{review.date}</span>
                    <span className="text-[10px]">•</span>
                    <div className="flex items-center text-[#F5A623]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-3 h-3 text-[#F5A623] fill-[#F5A623]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE HAS ALSO BOUGHT + EXPERTS */}
      <section className="bg-[#FFF7E2] pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#222222]">
            People has also bought
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {ALSO_BOUGHT.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-[32px] shadow-md overflow-hidden flex flex-col"
              >
                <div className="w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] md:h-[360px] object-cover"
                  />
                </div>

                <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
                  <h3 className="text-[16px] md:text-[18px] font-medium text-[#222222] leading-snug text-center">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] text-center">
                    <span className="font-semibold">{item.price}</span>
                    <span className="mx-1">•</span>
                    <span>{item.size}</span>
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center text-[#F5A623]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#777777]">
                      ({item.reviews})
                    </span>
                    <div className="flex-1" />
                    <button
                      type="button"
                      className="w-9 h-9 rounded-full bg-[#3A643B] flex items-center justify-center"
                    >
                      <FiPlus className="text-white" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ExpertsSection />
      </section>
    </div>
  );
}
