import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import person from "../../assets/image/person.svg";
import pause from "../../assets/image/pause.png";
import "./Header.css";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#D2E6E4] rounded-b-[35px] w-full h-[50vh] md:h-[40vh] xl:h-[69vh]">
      <div className="container mx-auto p-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center h-[70px] md:h-[80px] xl:h-[100px]">
          <div className="w-[150px]">
            <img src={logo} alt="Logo" className="w-full h-auto" />
          </div>
          <div className="hidden xl:flex gap-8 font-bold text-[16px]">
            <NavLink to="">Bosh sahifa</NavLink>
            <NavLink to="">Kariyeramiz</NavLink>
            <NavLink to="">Biz haqimizda</NavLink>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#77BF44] text-white font-bold rounded-lg px-4 py-2 md:px-6 md:py-2">Online kurs</button>
            <i onClick={toggleMenu} className='bx bx-menu xl:hidden text-[35px] text-[#6B7280] cursor-pointer'></i>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col items-center gap-4 mt-4 xl:hidden">
            <NavLink to="">Bosh sahifa</NavLink>
            <NavLink to="">Kariyeramiz</NavLink>
            <NavLink to="">Biz haqimizda</NavLink>
          </div>
        )}

        {/* Main Section */}
        <div className="flex flex-col xl:flex-row xl:justify-between items-center mt-8">
          <div className="text-center xl:text-left xl:max-w-[50%]">
            <p className="bg-white text-center font-bold text-[14px] md:text-[18px] xl:text-[20px] px-4 py-2 rounded-lg inline-block">Hech qachon o‘rganishni to‘xtatmang!</p>
            <h1 className="text-[#0B7077] font-bold text-[25px] md:text-[35px] xl:text-[75px] mt-4">Onlayn kurslar orqali mahoratingizni oshiring!</h1>
            <button className="bg-[#F7641E] text-white font-bold rounded-lg px-6 py-2 mt-4">Online kurs</button>
          </div>
          <div className="w-[80%] md:w-[60%] xl:w-[40%] mt-8 xl:mt-0">
            <img src={person} alt="Person" className="w-full xl:block hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headers;
