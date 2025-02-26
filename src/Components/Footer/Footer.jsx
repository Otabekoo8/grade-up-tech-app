import React from "react";
import logo from "../../assets/image/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-[#F9FAFB] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Logo va linklar qismi */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <img src={logo} alt="Logo" className="w-[150px] h-auto" />
            <div>
              <NavLink to="" className="text-[#6B7280] font-bold text-lg block md:inline">
                Kurslar
              </NavLink>
              <NavLink to="" className="text-[#6B7280] font-bold text-lg ml-0 md:ml-5 block md:inline">
                Online kurslar
              </NavLink>
              <p className="text-[#6B7280] font-bold mt-4 md:mt-2 text-sm md:text-base">
                © Uchkurgan IT school - 2024. Barcha huquqlar himoyalangan
              </p>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar va telefon */}
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
            <div className="flex gap-4">
              <i className="bx bxl-instagram-alt text-[#4B5563] text-2xl md:text-3xl"></i>
              <i className="bx bxl-telegram text-[#4B5563] text-2xl md:text-3xl"></i>
              <i className="bx bxl-linkedin-square text-[#4B5563] text-2xl md:text-3xl"></i>
              <i className="bx bxl-facebook-circle text-[#4B5563] text-2xl md:text-3xl"></i>
              <i className="bx bxl-youtube text-[#4B5563] text-2xl md:text-3xl"></i>
            </div>
            <p className="text-[#6B7280] font-bold text-lg mt-3">+998913604254</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
