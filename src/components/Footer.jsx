import React from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaHouse,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // pattern overlay (similar to screenshot)
  const patternStyle = {
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27240%27 height=%27240%27%3E%3Cg fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%272%27 opacity=%270.35%27%3E%3Cpath d=%27M30 50h48l-8 18H38z%27/%3E%3Ccircle cx=%27180%27 cy=%2755%27 r=%2720%27 opacity=%270.35%27/%3E%3Cpath d=%27M160 120h36l-6 55h-24z%27 opacity=%270.28%27/%3E%3Cpath d=%27M45 165c24 0 24-36 48-36s24 36 48 36%27 opacity=%270.28%27/%3E%3Cpath d=%27M165 175l30 30m0-30l-30 30%27 opacity=%270.25%27/%3E%3C/g%3E%3C/svg%3E")',
    backgroundSize: "220px 220px",
  };

  const accent = "#f6a400";

  return (
    <footer className="w-full">
      {/* TOP BLUE SECTION */}
      <div className="relative bg-[#0b5a93] text-white">
        {/* Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={patternStyle}
        />

        <Container>
          <div className="relative z-10 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
              {/* Column 1 (CENTER like pic) */}
              <div className="text-center">
                <div className="mx-auto w-[88px] h-[88px] bg-white rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png" // ✅ change
                    alt="Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <p className="mt-4 text-[13px] leading-7 text-white/90 font-semibold">
                  তাহাদের বৃটা সরকার ফাঁসি তাহার <br />
                  পরিবর্তে ইংরেজি ব্রাহ্মণতা করার পর <br />
                  তাহাদের মুসলমানরা ইংরেজি বর্জন <br />
                  করে। ফলে{" "}
                  <span className="font-bold" style={{ color: accent }}>
                    শিক্ষিত জন
                  </span>
                </p>

                {/* Social (black circles like pic) */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-white text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-white text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center"
                    aria-label="Google Plus"
                  >
                    <FaGooglePlusG className="text-white text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition flex items-center justify-center"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="text-white text-lg" />
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold text-lg">Important Websites</h3>

                <ul className="mt-4 space-y-3 text-[13px] text-white/90 font-semibold">
                  {[
                    "কর্মপথ",
                    "ই-বুক",
                    "শিক্ষা বাতায়ন",
                    "শিক্ষা মন্ত্রণালয়",
                    "শিক্ষাবোর্ড কুমিল্লা",
                    "শিক্ষা অধিদপ্তর",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaAngleRight style={{ color: accent }} />
                      <Link to="#" className="hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>

                <div className="mt-4 h-[150px] w-full rounded-md overflow-hidden border border-white/20 bg-white/10">
                  <iframe
                    title="Google Map"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    // ✅ change to your embed
                    src="https://www.google.com/maps?q=Niaz%20Mohammad%20High%20School&output=embed"
                  />
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-semibold text-lg">Contact Us</h3>

                <ul className="mt-4 space-y-3 text-[13px] text-white/90 font-semibold">
                  <li className="flex gap-3">
                    <FaHouse className="mt-1" style={{ color: accent }} />
                    <span>Niaz Mohammad High School</span>
                  </li>

                  <li className="flex gap-3">
                    <FaPhone className="mt-1" style={{ color: accent }} />
                    <a className="hover:underline" href="tel:02334427466">
                      02334427466
                    </a>
                  </li>

                  <li className="flex gap-3">
                    <FaEnvelope className="mt-1" style={{ color: accent }} />
                    <span>
                      Email:{" "}
                      <a
                        className="hover:underline break-all"
                        href="mailto:s103218@yahoo.com"
                      >
                        s103218@yahoo.com
                      </a>
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <FaGlobe className="mt-1" style={{ color: accent }} />
                    <span>
                      website:{" "}
                      <a
                        className="hover:underline"
                        href="https://nmdhs.edu.bd"
                        target="_blank"
                        rel="noreferrer"
                      >
                        nmdhs.edu.bd
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#062b44] text-white">
        <Container>
          <div className="py-5 text-center text-sm font-semibold">
            Copyright © 2026, nmdhs.edu.bd. All Rights Reserved.{" "}
            <span style={{ color: accent }}>
              Design & Developed by Cyberdyne Technology Ltd.
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
