"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import Sarah from "@/public/sarah.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", icon: "fa-solid fa-house", label: "Dashboard" },
    { href: "/resume-builder", icon: "fa-solid fa-file-pdf", label: "Resume Builder" },
    { href: "/portfolio-builder", icon: "fa-regular fa-id-card", label: "Portfolio Builder" },
    { href: "/template", icon: "fa-solid fa-briefcase", label: "Templates" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl p-2 rounded bg-gray-200"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-screen bg-[#FAFAFBFF] w-64 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:w-[20%]`}
      >
        <div className="flex flex-col items-center h-full">
          <Image src={Logo} alt="logo" width={200} height={200} className="mt-5" />

          <section className="flex flex-col w-full flex-1 mt-10 px-3">
            <nav className="flex-1 flex flex-col items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} className="w-full">
                    <h4
                      className={`w-full py-3 rounded-sm cursor-pointer px-2 mb-3 flex items-center ${
                        isActive
                          ? "bg-[#3DA8F5FF] text-white"
                          : "hover:bg-[#565D6DFF] hover:text-white"
                      }`}
                    >
                      <i className={`${item.icon} mr-2`}></i>
                      {item.label}
                    </h4>
                  </Link>
                );
              })}
            </nav>

            <footer className="border-t-2 border-solid border-gray-100 py-4 w-full flex justify-center">
              <Link href="/settings">
                <Image src={Sarah} alt="profile" width={60} height={60} className="cursor-pointer" />
              </Link>
              
            </footer>
          </section>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
