import vector from "../../assets/image/vector.jpg"
import React, { useState } from "react";

const Product2 = [
    {
      id: "1",
      name: " Frontend kursi",
      surName: "Frontend",
      nameTwo: "Siz bu kursda HTML, CSS, Javascript  dasturlash til . . .",
      category: "Frontend",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/frontend-DqYu2AVi.png",
    },
    {
      id: "2",
      name: "Python Django kursi",
      surName: "Backend",
      nameTwo: "Siz bu kursda Python dasturlash tili va Django fra . . .",
      category: "Backend",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/django-Bno5KP4J.png",
    },
    {
      id: "3",
      name: "Foundation kursi",
      nameTwo: "Dasturlash sohasiga endi kirib kelayotganlar uchun . . .",
      surName: "Foundation",
      category: "Foundation",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/foundation-BPf3Twkk.png",
    },
    {
      id: "4",
      name: "PS, AI va CorelDraw kursi",
      surName: "Dizayn",
      nameTwo: "Siz bu kursda mustaqil rasmlarga ishlov berish va . . .",
      category: "Grafik",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/ps-BDlYQksz.png",
    },
    {
      id: "5",
      name: "3D Max kursi",
      surName: "Dizayn",
      nameTwo: "Siz bu kursda uy va buyumlarni modellashtirishni o . . .",
      category: "Grafik",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/design-C5r0iOcb.png",
    },
    {
      id: "6",
      name: "Kompyuter savodxonligi",
      surName: "Savodxonlik",
      nameTwo: "Siz bu kursda kompyuter haqida boshlang`ich bilim . . .",
      category: "savodxonlig",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/savodxon-FA8Ozn_E.png",
    },
    {
      id: "7",
      name: "Robototexnika kursi",
      surName: "Robototexnika",
      nameTwo: "Siz harakatlanadigan barcha narsani prototipini ya . . .",
      category: "Robototexnika",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/robotics-BVLKWpmN.png",
    },
    {
      id: "8",
      name: "Mobil dasturlash kursi",
      surName: "Mobil",
      nameTwo: "Siz bu kursda android mobil qurilmalar uchun turli . . .",
      category: "dasturlash",
      img: "https://uchkurgan-it-school-chi.vercel.app/assets/Kotlin-CVMJFheq.png",
    },
  ];
function Courses() {
    const [items, setItems] = useState(Product2);

    const filterItem = (category) => {
      const updatedItems = Product2.filter((curElem) => {
        return curElem.category === category;
      });
  
      setItems(updatedItems);
    };
  return (
    <div className="course mt-[80px] xl:w-full xl:h-[130vh]">
      <div className="container mx-auto">
        <div className="course-inner">
        <div className="w-[100%] bg-[#] h-[50px]">
        <h1 className="text-[#FD661F] text-center xl:text-[50px] xl:font-[700] mb-[50px] text-[25px] font-bold">Bizning kurslar</h1>
      </div>

            <div>
        <div className="fil w-[95%] h-full xl:ml-[30px] mt-[40px] bg-[#fff] flex flex-col items-center justify-center">
<div className='course-filter-group ml-[30px] mt-[20px]'>
            <ul className="lab-ul  xl:w-[100%] xl:flex  flex flex-wrap gap-5 ">
              <li className="cursor-pointer w-[120px] h-[40px] pt-[8px] xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => setItems(Product2)}>Barchasi</li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]"  onClick={() => filterItem("Grafik")}>Grafik Dizyn</li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("Frontend")}>Frontend</li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("Backend")}>Beckend</li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("Foundation")}>Foundation</li>
              <li className=" cursor-pointer  w-[180px] h-[40px] pt-[8px]  xl:w-[200px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("savodxonlig")}>Kompyuter Savodxonligi</li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("Robototexnika")}>Robototexnika</li>
              <li className=" cursor-pointer  w-[140px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] border-[1px] rounded-md hover:bg-[#0B7077] hover:text-[#fff]" onClick={() => filterItem("dasturlash")}>Mobil Dasturlash</li>
            </ul>
          </div>
          <div className="kurs w-[100%]  rounded-xl flex items-center justify-center flex-wrap ">
            {items.map((product) => (
              <div key={product.id} className="xl:w-[360px]  p-4 md:w-[50%]">
                <div className="bg-[#] border rounded-lg h-[450px] shadow-2xl ">
                  <div className="image w-[100%] flex">
                    <img src={product.img} alt="" className="w-[300px] ml-[20px] h-[270px]  pt-[10px] " />
                  </div>
                  <h1 className=" text-[18px] font-[700] pt-4 pl-9 ">{product.name}</h1>
                  <h1 className="font-[600] text-gray-500 ml-9 mb-2 ">{product.surName}</h1>
                  <p className="text-[#000] text-[14px] font-bold ml-9 ">{product.nameTwo}</p>
                  <button className="float-right my-[15px] text-[#77BF44] font-[700] mr-[20px] ">Batafsil</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
