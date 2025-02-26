import React from 'react'
import "./Galler.css";


const images = [
    'https://uchkurgan-it-school-chi.vercel.app/assets/1-CROm5uEO.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/2-Ds0lSjrl.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/3-Cu2HwGmt.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/4-575eS2ku.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/5-C9ldX8aM.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/6-B5copytW.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/7-B19oURPX.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/8-D5pbyOxv.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/9-uQlnjxab.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/10-CZ5bsV7L.jpg',
    // Duplicate images to create the seamless scroll effect
    'https://uchkurgan-it-school-chi.vercel.app/assets/1-CROm5uEO.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/2-Ds0lSjrl.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/3-Cu2HwGmt.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/4-575eS2ku.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/5-C9ldX8aM.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/6-B5copytW.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/7-B19oURPX.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/8-D5pbyOxv.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/9-uQlnjxab.jpg',
    'https://uchkurgan-it-school-chi.vercel.app/assets/10-CZ5bsV7L.jpg'
  ];
  

function Gallery() {
  return (
    <div className='mt-[100px] h-[30vh]'>
 <div className="gallery-container">
      <div className="gallery ">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className='rounded-lg'/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Gallery
