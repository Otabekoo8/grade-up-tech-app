import React from 'react'

function Consultation() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10">
        {/* Left Section */}
        <div className="bg-[#F3EBDF] rounded-lg p-6 xl:p-10 xl:w-1/2 text-center xl:text-left">
          <h1 className="text-[#967851] font-bold text-2xl xl:text-4xl">
            1 yil ichida talabgir va daromadli mutaxassis bo‘ling!
          </h1>
          <p className="text-[#93764F] font-medium text-lg xl:text-xl mt-4">
            “Uchkurgan IT school”da dasturlash, dizayn, kompyuter savodxonligi va 8 yoshdan 16 yoshgacha bo‘lgan bolalar uchun Robototexnika yo‘nalishlarini 4 oydan 1 yilgacha o‘rganib, bozorda talabgir kasb egasi bo‘ling.
          </p>
        </div>
        
        {/* Right Section */}
        <div className="bg-[#F9F7F3] rounded-lg p-6 xl:p-10 xl:w-2/5 w-full max-w-lg">
          <h2 className="text-[#000] font-bold text-2xl">Bepul konsultatsiya</h2>
          <p className="text-[#000] font-medium text-md mt-3">
            Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.
          </p>
          
          <form className="mt-6 space-y-4">
            <label className="block text-[#6B728E] font-medium text-lg">Ismingiz:</label>
            <input type="text" placeholder="Ismingiz" className="w-full h-12 border rounded-lg px-4 text-[#6B728E] font-medium" />
            
            <label className="block text-[#6B728E] font-medium text-lg">Telefon raqamingiz:</label>
            <input type="text" placeholder="+998937373477" className="w-full h-12 border rounded-lg px-4 text-[#6B728E] font-medium" />
            
            <div className="flex items-center gap-3">
              <input type="checkbox" id="privacy" className="w-5 h-5" />
              <label htmlFor="privacy" className="text-[#000] font-medium text-sm">
                Shaxsiy ma`lumotlarni <a href="#" className="text-[#7282F6] underline">qayta ishlanishiga</a> roziman
              </label>
            </div>
            
            <button className="w-full h-12 bg-[#0B7077] text-white rounded-lg font-bold text-lg">Jo'natish</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Consultation
