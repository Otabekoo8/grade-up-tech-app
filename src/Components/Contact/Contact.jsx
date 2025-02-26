import React from 'react'
import location from "../../assets/image/icon/location.webp"

function Contact() {
  return (
    <div>
        <div className="container mx-auto">
            <h1 className='xl:text-[40px] font-bold text-[#0B7077] hidden'>Bizning manzilimiz</h1>
            <div className="contact xl:w-[100%] xl:h-[70vh] md:w-[95%] md:h-[70vh] w-[93%] h-[50vh] xl:mt-[120px] flex gap-7 flex-wrap">
                <div className="icons xl:w-[40%] bg-[#F9F7F3] xl:h-[55vh] rounded-lg md:ml-[15px]">
                    <div className="icons1 xl:w-[80%] flex gap-5 xl:h-[80px] p-10">
                            <div className="img xl:w-[40px] xl:h-[40px] xl:mt-[10px] w-[80px] h-[80px]">
                                <img src={location} alt="" />
                            </div>

                            <div className="contact-text1">
                                <h1 className='xl:text-[25px] font-bold text-[#6B7280]'>Manzilimiz:</h1>
                                <p className='font-bold text-[20px]'>Namangan viloyati, Uchqo`rg`on tumani, Andijon ko`chasi 86-uy</p>
                            </div>
                    </div>
                    <div className="icons1 xl:w-[80%] flex gap-5 xl:h-[80px] p-10 mt-[40px]">
                            <div className="img xl:w-[40px] xl:h-[40px] xl:mt-[10px]">
                                <i className='bx bx-current-location text-[30px]' style={{ color: '#e82327' }}></i>
                            </div>

                            <div className="contact-text1">
                                <h1 className='xl:text-[25px] font-bold text-[#6B7280]'>Mo'ljal:</h1>
                                <p className='font-bold text-[20px]'>Sobiq Uchqo`rg`on Iqtisodiyot kolleji, hozirgi Uchqo`rg`on 1-sonli kasb-hunar maktabi</p>
                            </div>
                    </div>
                    <div className="icons1 xl:w-[80%] flex gap-5 xl:h-[80px] p-10 mt-[40px]">
                            <div className="img xl:w-[40px] xl:h-[40px] xl:mt-[10px]">
                            <i className='bx bx-time text-[30px]' style={{color: '#e82327'}}></i>
                            </div>

                            <div className="contact-text1">
                                <h1 className='xl:text-[25px] font-bold text-[#6B7280]'>Ish vaqti:</h1>
                                <p className='font-bold text-[20px]'>09:00 - 18:00</p>
                            </div>
                    </div>
                    <div className="icons1 xl:w-[80%] flex gap-5 xl:h-[80px] p-10 mt-[40px]">
                            <div className="img xl:w-[40px] xl:h-[40px] xl:mt-[10px]">
                            <i className='bx bx-phone text-[30px]' style={{color: '#e82327'}} ></i>
                            </div>

                            <div className="contact-text1">
                                <h1 className='xl:text-[25px] font-bold text-[#6B7280]'>Telefon:</h1>
                                <p className='font-bold text-[20px]'>+998913604254</p>
                            </div>
                    </div>
                </div>

                {/* map */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012.7815082519546!2d72.07863715160936!3d41.10855257472625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcacee44d44947%3A0x613ccb3f9b0b5949!2sUchqo&#39;rg&#39;on%20iqtisodiyot%20va%20kasb-xunar%20kolleji!5e0!3m2!1sru!2s!4v1717579937132!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='xl:w-[50%] xl:h-[55vh]  md:ml-[10px] md:w-[100%]'></iframe>


            </div>
        </div>
    </div>
  )
}

export default Contact
