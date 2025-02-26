import React from 'react'
import logo from "../../assets/image/logo.png"
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='xl:w-[100%] xl:h-[150px] md:w-[90%] md:h-[350px] w-[90%] h-[400px] bg-[#F9FAFB]'>
        <div className="container mx-auto">
            <div className="footer xl:w-[100%] xl:h-[150px] flex justify-between items-center">
                <div className="logo xl:w-[800px] xl:h-[150px] xl:flex xl:items-center xl:gap-5">
                    <div className="image">
                        <img src={logo} alt="" className='"xl:w-[170px] xl:h-[50px]'/>
                    </div>
                    <div className="text-inner">
                    <NavLink to="" className="text-[#6B7280] font-bold text-[18px]">Kurslar</NavLink>
                    <NavLink to="" className="text-[#6B7280] font-bold text-[18px] ml-[20px]">Online kurslar</NavLink><br />
                    <p className='text-[#6B7280] font-bold xl:mt-[15px]'>© Uchkurgan IT school - 2024. Barcha huquqlar himoyalangan</p>
                    </div>
                </div>


                <div className="icons">
                    <i className='bx bxl-instagram-alt text-[#4B5563]  text-[35px] '></i>
                    <i className='bx bxl-telegram text-[#4B5563]  text-[35px] ml-[30px]'></i>
                    <i className='bx bxl-linkedin-square text-[#4B5563]  text-[35px] ml-[30px]'></i>
                    <i className='bx bxl-facebook-circle text-[#4B5563]  text-[35px] ml-[30px]' ></i>
                    <i className='bx bxl-youtube text-[#4B5563]  text-[35px] ml-[30px]' ></i><br />
                    <p className='text-[#6B7280] font-bold text-[25px]'>+998913604254</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
