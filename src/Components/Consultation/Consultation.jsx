import React from 'react'

function Consultation() {
  return (
    <div>
        <div className="container mx-auto">
            <div className="cons-inner xl:w-[100%] xl:h-[80vh] w-[90%] ml-[15px] h-[80vh] xl:gap-10 xl:flex md:w-[95%] md:h-[80vh]">
            <div className="cons1 xl:w-[50%] xl:h-[60vh] h-[60vh] md:h-[20vh] bg-[#F3EBDF] rounded-lg pt-[50px] pl-[30px]">
                <h1 className='xl:text-[40px] text-[#967851] font-bold text-[25px]'>1 yil ichida talabgir va daromadli mutaxassis bo‘ling!</h1>
                <p className='xl:text-[23px] pt-[25px] text-[#93764F] font-bold text-[18px] md:text-[17px]'>“Uchkurgan IT school”da dasturlash, dizayn, kompyuter savodxonligi va 8 yoshdan 16 yoshgacha bo`lgan bolalar uchun Robototexnika yo‘nalishlarini 4 oydan 1 yilgacha bo‘lgan muddatda o‘rganib, bozorda talabgir kasb egasi bo‘ling</p>
            </div>
            <div className="cons2 xl:w-[40%] xl:h-[60vh] h-[90vh] md:h-[55vh] bg-[#F9F7F3] xl:mt-[1px] mt-[35px] rounded-lg pl-[30px] pt-[55px]">
                <h1 className='text-[#000] font-bold xl:text-[30px]  text-[33px]'>Bepul konsultatsiya</h1>
                <p className='text-[#000]  font-bold xl:text-[17px] mt-[15px]'>Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz</p>
                <form>
                    <legend className='mt-[40px] text-[#6B728E] font-bold xl:text-[20px] md:text-[23px]'>Ismingiz:</legend>
                    <input type="text" placeholder='Ismingiz'  className='mt-[10px] w-[85%] h-[55px] rounded-lg border-[1px] text-[#6B728E] pl-[15px] font-bold text-[18px] md:w-[95%]'/>
                    <legend className='mt-[10px] text-[#6B728E] font-bold xl:text-[20px] md:text-[23px]'>Telefon raqamingiz:</legend>
                    <input type="text" placeholder='+998937373477' className='mt-[10px] w-[85%] h-[55px] rounded-lg border-[1px] text-[#6B728E] pl-[15px] font-bold text-[18px] md:w-[95%]'/>
                    <div className="check  mt-[15px] ml-[15px] flex gap-5">
                        <input type="checkbox" />
                        <p className='font-bold text-[16px] text-[#000]'>Shaxsiy ma`lumotlarni <a href="#" className='text-[#7282F6] underline'>qayta ishlanishiga</a> roziman</p>
                    </div>
                    <button className='mt-[45px]  w-[85%] h-[45px] bg-[#0B7077] rounded-lg text-[#fff] md:w-[95%]'>Jo'natish</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation
