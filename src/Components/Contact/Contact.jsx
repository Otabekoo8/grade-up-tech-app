import React from 'react';
import location from "../../assets/image/icon/location.webp";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-[#0B7077] text-center mb-6'>Bizning manzilimiz</h1>
      <div className="flex flex-col xl:flex-row items-center gap-6">
        
        {/* Left Section */}
        <div className="bg-[#F9F7F3] p-6 rounded-lg w-full xl:w-2/5">
          <div className="flex items-center gap-4 mb-6">
            <img src={location} alt="Location" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-[#6B7280]">Manzilimiz:</h2>
              <p className="text-md font-bold">Namangan viloyati, Uchqo‘rg‘on tumani, Andijon ko‘chasi 86-uy</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <i className='bx bx-current-location text-3xl text-[#e82327]'></i>
            <div>
              <h2 className="text-lg font-bold text-[#6B7280]">Mo‘ljal:</h2>
              <p className="text-md font-bold">Sobiq Uchqo‘rg‘on Iqtisodiyot kolleji</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <i className='bx bx-time text-3xl text-[#e82327]'></i>
            <div>
              <h2 className="text-lg font-bold text-[#6B7280]">Ish vaqti:</h2>
              <p className="text-md font-bold">09:00 - 18:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className='bx bx-phone text-3xl text-[#e82327]'></i>
            <div>
              <h2 className="text-lg font-bold text-[#6B7280]">Telefon:</h2>
              <p className="text-md font-bold">+998913604254</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012.7815082519546!2d72.07863715160936!3d41.10855257472625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcacee44d44947%3A0x613ccb3f9b0b5949!2sUchqo'rgo'n%20iqtisodiyot%20va%20kasb-xunar%20kolleji!5e0!3m2!1sru!2s!4v1717579937132!5m2!1sru!2s" 
          width="600" 
          height="450" 
          className='w-full xl:w-1/2 h-64 md:h-96 rounded-lg' 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
