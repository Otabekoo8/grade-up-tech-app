import React, { useState } from 'react';
import logo from "../../assets/image/logo.png";
import person from "../../assets/image/person.svg";
import { NavLink } from "react-router-dom";
import pause from "../../assets/image/pause.png";
import "./Header.css";


function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <div className="header xl:w-full xl:h-[60vh] bg-[#D2E6E4] rounded-b-[35px] w-[100%] h-[80vh] md:w-[100%] md:h-[40vh]">
            <div className="container mx-auto">
                <div className="header-inner xl:w-[100%] xl:h-[60vh] w-[100%] h-[60vh] md:w-[100%] md:h-[40vh]">
                    <div className="navbar xl:w-[100%] xl:h-[100px] flex xl:justify-between items-center flex-wrap  w-[100%] h-[70px] md:w-[100%] md:h-[100px] md:justify-between">
                        <div className="logo w-[150px] h-[50px]">
                            <img src={logo} alt="Logo" className="xl:w-[150px] xl:h-[50px] w-[130px] h-[40px] m-5"/>
                        </div>
                        <div className="link xl:w-[350px] hidden xl:flex gap-8 font-bold text-[16px] xl:ml-[250px]">
                            <NavLink to="">Bosh sahifa</NavLink>
                            <NavLink to="">Kariyeramiz</NavLink>
                            <NavLink to="">Biz haqimizda</NavLink>   
                        </div>
                        <div className="btn xl:w-[400px] xl:h-[100px] flex items-center gap-7 pt-[20px]">
                            <button className="xl:w-[130px] bg-[#77BF44] text-[#fff] font-bold rounded-lg w-[85px] h-[50px] ml-[45px] md:w-[120px]">Online kurs</button>
                            <i onClick={toggleMenu} className='bx bx-menu xl:hidden text-[35px] font-bold text-[#6B7280] cursor-pointer'></i>
                            <div className="phone xl:flex xl:items-center hidden">
                                <i className='bx bx-phone text-[#6B7280] font-bold text-[22px]'></i>
                                <p className="xl:text-[20px] text-[#6B7280]">+998913604254</p>
                            </div>
                        </div>
                    </div>
                    {menuOpen && (
                      <div className="mobile-menu flex flex-col gap-4 items-center mt-4">
                        <NavLink to="">Bosh sahifa</NavLink>
                        <NavLink to="">Kariyeramiz</NavLink>
                        <NavLink to="">Biz haqimizda</NavLink>
                        <div className="phone flex items-center">
                          <i className='bx bx-phone text-[#6B7280] font-bold text-[22px]'></i>
                          <p className="text-[20px] text-[#6B7280]">+998913604254</p>
                        </div>
                      </div>
                    )}
                    <div className="section xl:w-full xl:flex xl:justify-between flex flex-col md:w-full md:flex md:justify-between">
                        <div className="main1">
                            <div className="text xl:w-[400px] xl:h-[43px] bg-[#fff] text-center font-bold pt-1 xl:text-[20px] ml-[20px] mt-[80px] xl:rounded-2xl xl:m-10 w-[250px] h-[30px] rounded-lg text-[13px]">Hech qachon o`rganishni to`xtatmang!</div>
                            <h1 className="font-bold xl:w-[70%] w-full text-[#0B7077] xl:text-[75px] text-[23px] m-5 md:text-[30px] md:w-[60%]">Onlayn kurslar orqali mahoratingizni oshiring!</h1>
                            <button className="xl:w-[130px] xl:h-[35px] bg-[#F7641E] text-[#fff] font-bold rounded-lg ml-[20px] w-[120px] h-[40px]">Online kurs</button>
                        </div>
                        <div className="main2 xl:w-[70%] w-[100%] md:w-[60%]">
                            <img src={person} alt="Person" className="xl:w-[590px] w-[400px] xl:mt-[-432px] xl:ml-[900px] mt-[-60px] md:mt-[-280px] md:ml-[350px]"/>
                        </div>
                    </div>
                    <div className="img m-20 xl:w-[300px] xl:h-[300px] bg-[#D2E6E4] ml-[600px]  rounded-full hidden">
                        <img src={pause} alt="Pause" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Headers;
