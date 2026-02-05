import React, { useEffect, useState } from "react";
import Container from "../layer/Container";
import Image from "../layer/Image";
import logo from "/Logo.png";
import Li from "../layer/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { FaAngleDown, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { products } from "../pages/Products";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import LatestNews from "./LatestNews";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false); // Manage the state of the mobile menu

  let [search, setSearch] = useState("");
  let [filterData, setFilterData] = useState([]);

  console.log(filterData);

  useEffect(() => {
    if (search === "") {
      filterData === "";
    } else {
      let searcData = products.filter((item) =>
        item?.header.toLowerCase().includes(search.toLowerCase()),
      );

      setFilterData(searcData);
    }
  }, [search]);

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <nav className="z-10 fixed w-full top-0  shadow-lg ">
      <div className="max-w-full px-80 mx-auto flex items-center  bg-[#01468C]   justify-between">
        {/* Left Logo */}
        <div className="flex  items-center space-x-4 py-4">
          <Image className=" w-28 " href="/" scr={logo} alt="Logo" />
          <div>
            <h1 className="text-lg font-semibold text-white">
              Niaz Mohammad High School
            </h1>
            <p className="text-sm text-white">Brahmanbaria</p>
            <p className="text-xs text-white">
              EIIN: 103218, Institute Code: 9002
            </p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="w-full bg-white border-t border-b">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex flex-wrap items-center gap-6 py-3 text-[13px] font-semibold text-[#0b5c8f]">
            <Link href="/" className="flex items-center gap-1 text-[#f39c12]">
              <FaHome className="text-[12px]" />
              HOME
            </Link>

            <Link href="/about" className="hover:text-[#083f63]">
              ABOUT
            </Link>
            <Link href="/achievements" className="hover:text-[#083f63]">
              ACHIEVEMENTS
            </Link>
            <Link href="/administration" className="hover:text-[#083f63]">
              ADMINISTRATION
            </Link>
            <Link href="/academic" className="hover:text-[#083f63]">
              ACADEMIC
            </Link>
            <Link href="/result" className="hover:text-[#083f63]">
              RESULT
            </Link>
            <Link href="/notice" className="hover:text-[#083f63]">
              NOTICE
            </Link>
            <Link href="/admission" className="hover:text-[#083f63]">
              ADMISSION
            </Link>
            <Link href="/gallery" className="hover:text-[#083f63]">
              GALLERY
            </Link>
            <Link href="/contact" className="hover:text-[#083f63]">
              CONTACT
            </Link>

            <div className="ml-auto flex items-center gap-6">
              <Link
                href="/login"
                className="flex items-center gap-1 text-[#d32f2f] hover:opacity-80"
              >
                <FaUser className="text-[12px]" />
                LOGIN
              </Link>

              <Link
                href="/application"
                className="text-[#d32f2f] hover:opacity-80"
              >
                APPLICATION FORM
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <LatestNews />
      </div>

      <Container className="relative flex items-center justify-between gap-5 xl:gap-0 xl:py-2 py-5 px-3 xl:px-0"></Container>
    </nav>
  );
};
