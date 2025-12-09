import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logoImg from "../assets/amrutam-logo.png";
import {
  FiCreditCard,
  FiShoppingCart,
  FiBell,
  FiUsers,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Find Doctors", to: "/find-doctors" },
  { label: "Lab Tests", to: "/lab-tests" },
  { label: "Shop", to: "/shop" },
  { label: "Forum", to: "/forum" },
  { label: "About Us", to: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOP DARK STRIP – DESKTOP/TABLET ONLY */}
      <div className="hidden md:block bg-[#333333] text-white text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <p>Your first 5 minutes instant call is free.</p>

          <button className="hidden sm:inline-flex items-center gap-2 bg-[#3A643B] rounded-full px-6 py-2 text-[14px] font-medium">
            <span>📞</span>
            <span>Try Instant Free Call Now</span>
          </button>
        </div>
      </div>

      {/* ---------- DESKTOP / TABLET HEADER (md and up) ---------- */}
      <div className="hidden md:block bg-[#FFF7E2] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-3 flex flex-col gap-3">
          {/* ROW 1 */}
          <div className="flex items-center justify-between w-full py-2">
            {/* Left: phone */}
            <a
              href="tel:+919826353231"
              className="flex items-center gap-2 text-[18px] text-[#2D7A39]"
            >
              <span className="text-lg">📞</span>
              <span>+91 9826353231</span>
            </a>

            {/* Logo */}
            <Link to="/" className="flex-1 flex justify-center">
              <img
                src={logoImg}
                alt="Amrutam"
                className="h-7 md:h-9 w-auto object-contain"
              />
            </Link>

            {/* Right: balance spacer */}
            <div className="w-[120px]" />
          </div>

          {/* ROW 2 */}
          <div className="flex items-center justify-between w-full">
            {/* Left spacer (keeps nav centered) */}
            <div className="w-[120px]" />

            {/* Center: nav menu – slightly smaller on md screens */}
            <nav className="flex items-center gap-6 lg:gap-10 text-[16px] lg:text-[18px] font-semibold">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "pb-1 border-b-2 text-[#3A643B]",
                      isActive ? "border-[#3A643B]" : "border-transparent",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              {/* Wallet */}
              <button className="relative w-10 h-10 rounded-full bg-[#E3EFE6] flex items-center justify-center">
                <FiCreditCard className="w-5 h-5 text-[#3A643B]" />
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-[#3A643B] text-[10px] text-white flex items-center justify-center px-1">
                  ₹2
                </span>
              </button>

              {/* Cart */}
              <button className="relative w-10 h-10 rounded-full bg-[#E3EFE6] flex items-center justify-center">
                <FiShoppingCart className="w-5 h-5 text-[#3A643B]" />
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-[#3A643B] text-[10px] text-white flex items-center justify-center px-1">
                  1
                </span>
              </button>

              {/* Bell */}
              <button className="w-10 h-10 rounded-full bg-[#E3EFE6] flex items-center justify-center">
                <FiBell className="w-5 h-5 text-[#3A643B]" />
              </button>

              {/* Users */}
              <button className="w-10 h-10 rounded-full bg-[#E3EFE6] flex items-center justify-center">
                <FiUsers className="w-5 h-5 text-[#3A643B]" />
              </button>

              {/* Arrow */}
              <button>
                <FiChevronDown className="w-6 h-6 text-[#3A643B]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE HEADER (< md) ---------- */}
      <div className="md:hidden bg-[#FFF7E2] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: hamburger */}
          <button onClick={() => setMobileOpen((prev) => !prev)}>
            {mobileOpen ? (
              <FiX className="w-6 h-6 text-[#3A643B]" />
            ) : (
              <FiMenu className="w-6 h-6 text-[#3A643B]" />
            )}
          </button>

          {/* Center: logo */}
          <Link to="/" className="flex-1 flex justify-center">
            <img
              src={logoImg}
              alt="Amrutam"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Right: icons + login */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-[#E3EFE6] flex items-center justify-center">
              <FiCreditCard className="w-4 h-4 text-[#3A643B]" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#E3EFE6] flex items-center justify-center">
              <FiShoppingCart className="w-4 h-4 text-[#3A643B]" />
            </button>
            <button className="px-4 py-1.5 rounded-full bg-[#3A643B] text-white text-xs font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <nav className="border-t border-slate-200 bg-[#FFF7E2]">
            <ul className="flex flex-col px-4 py-2 gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-medium ${
                        isActive ? "text-[#3A643B]" : "text-slate-800"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
