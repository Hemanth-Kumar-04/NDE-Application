"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/assets";

// Component for individual product links
const ProductLink = ({ href, imgSrc, title, line1 }) => (
  <Link href={href} className="block py-1 flex items-start">
    <img src={imgSrc} alt={title} className="w-12 h-12 mr-2" />
    <div>
      <div className="font-bold">{title}</div>
      <div className="text-xs text-gray-500">{line1}</div>
    </div>
  </Link>
);

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const products = [
    { href: "/product1", imgSrc: "/path/to/image1.jpg", title: "Domain", line1: "Purchase & manage your own domain." },
    { href: "/product2", imgSrc: "/path/to/image2.jpg", title: "Google Workspace", line1: "Acquire & efficiently manage your workspace." },
    { href: "/product3", imgSrc: "/path/to/image3.jpg", title: "Vision Now", line1: "Powerful Customer management tools." },
    { href: "/product4", imgSrc: "/path/to/image4.jpg", title: "Spot Now", line1: "Employee tracking tool for efficient workforce." },
    { href: "/product5", imgSrc: "/path/to/image5.jpg", title: "Hosting", line1: "Obtain & oversee your hosting solution." },
    { href: "/product6", imgSrc: "/path/to/image6.jpg", title: "NDE Mail", line1: "Connect & optimize your email communication." },
    { href: "/product7", imgSrc: "/path/to/image7.jpg", title: "Chat Now", line1: "Connect and Engage with real-time chat support." },
    { href: "/product8", imgSrc: "/path/to/image8.jpg", title: "Peoples Now", line1: "Manage your employee details." },
    { href: "/product9", imgSrc: "/path/to/image9.jpg", title: "Marketing Planner", line1: "Connect & optimize your email communication." },
    { href: "/product10", imgSrc: "/path/to/image10.jpg", title: "Google Ads", line1: "Acquire & efficiently manage your workspace." },
    { href: "/product11", imgSrc: "/path/to/image11.jpg", title: "Social Media Ads", line1: "Obtain & oversee your hosting solution." },
    { href: "/product12", imgSrc: "/path/to/image12.jpg", title: "Mails Now", line1: "Purchase & manage your own domain." },
  ];

  return (
    <nav className="relative bg-gradient-light flex items-center justify-between h-[60px] xl:h-[55px]">
      {/* logo */}
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white bg-opacity-50 w-[58px] h-full rounded-br-2xl"></div>
        <Link href="/" className="px-3 h-full">
          <Image src={ICONS.logo} alt="logo" className="w-[117px] h-full" />
        </Link>
        <div className="bg-white bg-opacity-50 flex-grow justify-between pl-16 px-10 h-full rounded-b-lg flex items-center">
          <div className="flex justify-between">
            <div className="flex items-center gap-[52px] ml-36 max-lg:hidden text-[15px] text-[#000334] font-roboto font-bold">
              <div className="relative">
                <div
                  className="flex gap-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <span>Products</span>
                  <Image src={ICONS.drop} alt="Dropdown icon" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute left-[-300%] right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50 w-[1180px] p-4">
                    <div className="grid grid-cols-3 gap-4">
                      {products.map((product, index) => (
                        <ProductLink
                          key={index}
                          href={product.href}
                          imgSrc={product.imgSrc}
                          title={product.title}
                          line1={product.line1}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <span>Resources</span>
                <Image src={ICONS.drop} alt="Dropdown icon" />
              </div>
              <div>
                <span>Demo</span>
              </div>
              <div>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <div className="flex gap-4">
              <button className="bg-white border-[2px] border-[#0055FF] text-[#0055FF] px-2 py-1 rounded-[4px] text-[15px] font-bold">
                Log in
              </button>
              <button className="bg-[#0055FF] text-white px-2 py-1 rounded-[4px] text-[15px] font-bold">
                Sign Up
              </button>
              <Image src={ICONS.chart} alt="Chart icon" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
