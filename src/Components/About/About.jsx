import React from 'react'

function About() {
  return (
 <div className="about container mx-auto flex flex-col gap-20 items-center justify-center mt-20">
        <h1 className="xl:text-[40px] text-[30px] font-[700] text-[#0B7077] md:text-[35px]">Uchkurgan IT school - bu,</h1>
        <div className="div flex xl:items-center xl:justify-between xl:w-[100%] w-[100%] flex-wrap md:justify-center gap-5 justify-center">
          <div className="item flex flex-col items-start justify-center h-[200px] w-[400px] md:w-[370px] gap-3 rounded-xl bg-slate-100 p-[10px]">
            <i className="bx bx-building-house p-[10px] bg-emerald-500 text-[20px] text-[#fff] rounded-full"></i>
            <p className="text-[20px] font-bold text-[#6B7280]">Dasturlash, dizayn va marketing kabi zamonaviy kasblar o‘rgatiladigan markaz.</p>
          </div>
          <div className="item flex flex-col items-start justify-center h-[200px] w-[400px] gap-4 rounded-xl md:w-[370px] bg-slate-100 p-[10px]">
            <i className="bx bxs-hot p-[10px] bg-emerald-500 text-[20px] text-[#fff] rounded-full"></i>
            <p className="text-[20px] font-bold text-[#6B7280]"> Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
          </div>
          <div className="item flex flex-col items-start justify-center h-[200px] w-[400px] gap-4 rounded-xl md:w-[370px] bg-slate-100 p-[10px]">
            <i className="bx bx-user p-[10px] bg-emerald-500 text-[20px] text-[#fff] rounded-full"></i>
            <p className="text-[20px] font-bold text-[#6B7280]">Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
          </div>
        </div>
      </div>
  )
}

export default About
