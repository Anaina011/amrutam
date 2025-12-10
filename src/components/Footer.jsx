// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E3EFE6]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr] items-start">
        {/* LEFT – contact info */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#275A3A]">
            Get in touch
          </h3>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#1F3B28]">
            <p>support@amrutam.global</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd.,
              <br />
              chitragupt ganj, Nai Sadak, Lashkar,
              <br />
              Gwalior - 474001
            </p>
            <p>+91 9713171999</p>
          </div>

          {/* social icons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaWhatsapp].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-full bg-[#275A3A] flex items-center justify-center text-white"
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            )}
          </div>
        </div>

        {/* MIDDLE – information links */}
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

        {/* RIGHT – newsletter */}
        <div>
          <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#275A3A]">
            Subscribe to our Newsletter and join
            <br />
            Amrutam Family today!
          </h3>

          {/* email input + button */}
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
  );
}
