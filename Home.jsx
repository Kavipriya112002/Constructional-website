import React, { useState, useEffect  } from "react";
import slide3 from "../Components/Navbar/asset/slide3.jpeg";
import slide1 from "../Components/Navbar/asset/slide2.jpg";
import slide from "../Components/Navbar/asset/slide.jpg";
import slide5 from "../Components/Navbar/asset/slide5.jpg";
import slide6 from "../Components/Navbar/asset/slide6.jpg";
import slide7 from "../Components/Navbar/asset/ctp2.jpg"
import map from "../Components/Navbar/asset/map.jpg";
import location from "./Navbar/asset/locate.jpg"
import whowe from "./Navbar/asset/home1.png"
import slide4 from "./Navbar/asset/slide4.jpg"
import pm1 from "./Navbar/asset/pm1.png"
import pm2 from "./Navbar/asset/pm2.png"
import si1 from "./Navbar/asset/si1.png"
import si2 from "./Navbar/asset/si2.png"
import si3 from "./Navbar/asset/si3.png"
import d1 from "./Navbar/asset/d1.png"
import photo from "./Navbar/asset/about2.jpg"
import ad1 from "./Navbar/asset/ad1.png"
import ad2 from "./Navbar/asset/ad2.png"
import LeftAnimatedImage from "./LeftAnimatedImage.jsx";
import RightAnimatedImage from "./RightAnimatedImage.jsx";



const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [slide,slide1, slide3,slide4,slide5,slide6,slide7];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId); 
  }, [images.length]);
  return (
    <div className="bg-gradient-to-b from-none pt-24 max-md:pt-12 " >
      <div className="w-full  flex flex-col relative">
       <img src={images[currentImage]} alt={`Slide ${currentImage}`} className="w-full h-svh p-9  max-mobile:h-56 max-md:p-2 brightness-50 "  />
       <h1 className=" absolute p-40  text-white font-bold  text-6xl max-md:font-medium max-md:text-sm max-md:p-14" >   <span className="flex">RSG   ENGINEERINGS  &  ARCHITECTS<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" pl-2 pt-2 size-14 max-md:size-10 max-md:pb-6">
  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
</svg></span>
</h1>
      </div>
      <h4 className="text-3xl  font-semibold text-center underline  decoration-red-600 max-md:text-xl  ">BUILDING THE NATION</h4>
      <div className="flex justify-around max-md:flex-col   gap-4 p-8 max-md:px-0 ">
      <div  className="  w-1/2 max-md:w-full max-md:p-2 max-md:h-72 ">
          <LeftAnimatedImage  className="max-md:w-full  h-96   "src={whowe} alt="" />
        </div>
      <div className="bg-red-100 h-96 max-md:h-72 max-md:justify-around max-md:w-full  max-md:mt-16 ">
        <p className="text-xl text-justify mt-3 ml-10 mr-10 p-5 pb-3 px-35 max-md:px-2 max-md:p-3 max-md:text-xs max-md:pb-1">Er.R.SUDEESH,M.E., CEO of RSG Engineerings and Architects, RSG is a construction company mean to serve the society to have good quality civil engineering structure with highest durability with minimum wastage of resources.<br/><br/>We are into almost all infrastructures like Industrial Buildings,Public Buildings, Residential Buildings, Institutional Buildings, Commercial Buildings, Assembly Buildings, Multistoried Buildings, Special Buildings etc.<br/><br/>We stand along our valuable clients and see to deliver the best practices of construction being implemented in their respective sites to  their maximum satisfaction as possible.</p>
       </div>
       <div  class="  w-1/2 max-md:w-full">
      <RightAnimatedImage src={photo} alt="" class="h-96 max-md:h-52 max-md:px-32 "/>
      </div>
      </div>
      <div className="flex max-md:flex-col justify-around  gap-4 p-8 max-md:pt-3">
        <div className="  max-w-max ">
          <img src={location} alt="" />
        </div>
       <div className="bg-red-100  "> 
        <p className="text-lg text-justify mt-16 ml-10 mr-10 p-8 max-md:text-xs max-md:p-3 max-md:mt-5 ">Our mission is to serve the nation through our collective efforts and progress ahead.We adopt a construction methodology to see that all resources like men,money,materials and machineries are being effectively used with a minimum wastage as possible.<br/><br/>We manage risks during construction projects to reduce incident and accident rate,save money and protect personnel with health and safety services</p>
       </div>
      </div>
      <h1 class="text-center font-semibold p-3 text-3xl mt-4 underline  decoration-red-600">PROJECT MANAGEMENT SERVICES</h1>
      <div class="flex max-md:flex-col mt-3 gap-3 mx-4 ml-16 max-md:ml-4">
        <div class="  w-1/3 max-md:w-full "  >
          <LeftAnimatedImage src={pm1} alt="" class="h-96 " />
        </div>
        <div class="w-1/3 max-md:w-full bg-slate-200 ">
              <p class="p-14 text-lg text-justify max-md:text-xs ">We do project management services for all types of building works by proper planning, coordination, monitoring and controlling of project sites even at the design stage, preplanning and at construction stage, by proper methodology to control cost and ensure safe and environment friendly execution of projects.</p>
        </div>
        <div class="  w-1/3 max-md:w-full">
          <RightAnimatedImage src={pm2} alt="" class="h-96 "/>
        </div>
      </div>
      <h1 className='text-center text-3xl font-semibold mt-12  mb-4 underline  decoration-red-600'> SOIL INVESTIGATION</h1>
      <div className='flex justify-around  bg-gradient-to-tr from-blue-100  via-violet-100 to-fuchsia-1 00 '> 
      
         <img src={si1} alt="" className='p-6 w-1/3 max-md:p-1  max-h-96 '/>
        <img src={si2} alt="" className='p-6 w-1/4 max-md:w-1/3 max-md:p-1 max-h-96'/>
         <img src={si3} alt="" className='p-6 w-1/3 max-md:p-1  max-h-96'/>
      </div>
      <h1 className="text-center my-7 text-3xl font-semibold underline  decoration-red-600">ARCHITECTURAL DESIGN AND DRAWINGS</h1>
      <div className="flex max-md:flex-col justify-evenly  max-md:h-fit  ">  
       <LeftAnimatedImage src={ad1} alt="" className=" p-12 max-md:p-6 max-md:w-full"/>
       <RightAnimatedImage src={ad2} alt="" className=" p-12 max-md:p-6 max-md:w-full"/>
      </div>
      <h1 className="text-center my-7 text-3xl font-semibold underline  decoration-red-600">STRUCTURAL DESIGN AND DRAWINGS</h1>
      <div className='flex max-md:flex-col justify-evenly bg-emerald-100'>
        <img src={d1} alt="" className='w-4/6 p-5 max-md:w-full'/>
        <span className="">
        <p className="font-semibold text-rose-800 text-2xl mt-8 max-md:px-5  max-md:text-base ">With our own in house structure engineering design team, we deliver all the required service drawings like</p>
        <p className="  p-20 text-xl max-md:pt-4 text-justify max-md:text-xs   "><br/>1.Structural detailing<br/>2.Electrical layout<br/>3.Plumbing and fire water pipeline layout<br/>4.Drainage and water supply system<br/>5.Fire fighting system layout<br/>6.Communication layout,<br/>7.CCTV cable routing and other related services drawing.</p>
        </span>
      </div>
  
      <div className="p-8"> 
        <h2 className="text-3xl text-center mt-8 font-semibold ">OUR PROJECT WORKS IN TAMILNADU</h2>
        <hr className="h-1 bg-green-600 mt-2"/>
        <img src={map} alt="" className="w-full h-fit"/>
      </div>
      
    </div>
  );
}; 

export default Home

