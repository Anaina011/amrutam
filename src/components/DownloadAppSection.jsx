import { FiMessageCircle } from "react-icons/fi";

import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.png";
import appPromoImg from "../assets/app-promo-right.png";

export default function DownloadAppSection() {
  return (
    <section className="bg-[#FFF7E2]">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#275A3A] leading-tight">
            Download Amrutam Ayurveda
            <br />
            App Now
          </h2>

          <p className="mt-4 text-base text-[#555555] max-w-md leading-relaxed">
            The Amrutam Ayurveda App is your one-stop app for all things
            Ayurveda! Apart from mimicking the website, the app has added
            benefits
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
  );
}
