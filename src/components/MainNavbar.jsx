import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Find Doctors", to: "/find-doctors" },
  { label: "Lab Tests", to: "/lab-tests" },
  { label: "Shop", to: "/shop" },
  { label: "Forum", to: "/forum" },
  { label: "About Us", to: "/about" },
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "text-sm font-medium hover:text-amrGreen transition-colors";
  const activeLink = "text-amrGreen";

  return (
    <header className="bg-amrBeige border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: phone on mobile */}
        <a
          href="tel:+919826353231"
          className="flex items-center gap-2 text-xs sm:hidden"
        >
          <span className="text-lg">📞</span>
          <span className="font-medium">+91 9826353231</span>
        </a>

        {/* Logo */}
        <Link to="/" className="mx-auto sm:mx-0">
          <span className="tracking-[0.4em] text-xl font-semibold text-slate-900">
            AMRUTAM
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : "text-slate-700"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Icons (cart, account, etc. simplified) */}
        <div className="hidden sm:flex items-center gap-4 text-xl">
          <button aria-label="Cart">🛒</button>
          <button aria-label="Favourites">❤️</button>
          <button aria-label="Profile">👤</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-amrBeige">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : "text-slate-800"}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
