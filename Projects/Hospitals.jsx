import React from 'react'
import ImageSlider from '../ImageSlider';
import ah1 from "../Navbar/asset/ah1.JPG"
import ah2 from "../Navbar/asset/ah2.JPG"
import ah3 from "../Navbar/asset/ah3.JPG"
import ah5 from "../Navbar/asset/ah5.JPG"
import ah6 from "../Navbar/asset/ah6.JPG"
import ah7 from "../Navbar/asset/ah7.JPG"
import ah8 from "../Navbar/asset/ah8.JPG"
import ah9 from "../Navbar/asset/ah9.JPG"
import ah10 from "../Navbar/asset/ah10.JPG"
import ah11 from "../Navbar/asset/ah11.JPG"
import ah12 from "../Navbar/asset/ah12.JPG"
import ah13 from "../Navbar/asset/ah13.JPG"
import ah14 from "../Navbar/asset/ah14.JPG"
import rh1 from "../Navbar/asset/rh1.jpg"
import rh2 from "../Navbar/asset/rh2.jpg"
import rh3 from "../Navbar/asset/rh3.jpg"
import rh4 from "../Navbar/asset/rh4.jpg"
import rh5 from "../Navbar/asset/rh5.jpg"
import rj3 from "../Navbar/asset/rj3.jpg"
import tk1 from "../Navbar/asset/tk1.jpg"
import tk2 from "../Navbar/asset/tk2.jpg"
import tk3 from "../Navbar/asset/tk3.jpg"
import tk4 from "../Navbar/asset/tk4.jpg"
import tk5 from "../Navbar/asset/tk5.jpg"
import rj1 from "../Navbar/asset/rj1.jpg"
import rj2 from "../Navbar/asset/rj2.jpg"
import decca from "../Navbar/asset/dec1.JPG"
import decca1 from "../Navbar/asset/dec2.JPG"
const Hospitals = () => {
    const images1 = [ah1, ah2,ah3,ah5,ah6,ah7,ah8,ah9,ah10,ah11,ah12,ah13,ah14];
    const images2 =[rh1,rh2,rh3,rh4,rh5];
    const images3=[tk1,tk2,tk3,tk4,tk5];
  return (
    <div className=' bg-green-100 p-24 max-md:p-12'>
        <h1 className='text-3xl font-bold text-center  my-4  max-md:text-base underline  decoration-red-600'>HOSPITALS</h1>
        <p className='text-xl font-medium  p-4 py-8 indent-7 max-md:text-xs max-md:p-2'> Our Engineering team have constructed a state-of-the-art hospital building, blending innovation and functionality to support advanced healthcare infrastructure. This project reflects our dedication top-tier infrastructure solutions.</p>
    <hr className=" mt-2"/>
    <div className='flex max-md:flex-col justify-between max-md:justify-items-start px-2 pb-7 gap-3 max-md:px-0'> 
    <div className=' shadow-green-800 shadow-xl p-3 w-1/3 max-md:w-72 max-md:hover:w-80  hover:w-4/5 max-md:ml-4 duration-500'>
         <p className='text-center font-bold text-xl text-red-900 py-2 max-md:text-sm '>AIYSHWARIYA HOSPITAL WORAIYUR</p>
        <ImageSlider images={images1} className="" />
    </div>
    <div className='shadow-green-800 shadow-xl p-3  w-1/3 max-md:w-72 max-md:hover:w-80 hover:w-4/5 max-md:ml-4  duration-500'> 
        <p className='text-center font-bold text-xl text-red-900 py-2 max-md:text-sm'>RYTHM HOSPITAL PERAMBALUR</p>
        <ImageSlider images={images2} />
    </div>
    <div className='shadow-green-800 shadow-xl p-3  w-1/3 max-md:w-72 max-md:hover:w-80 hover:w-4/5 max-md:ml-4 duration-500'>
         <p className='text-center font-bold text-xl text-red-900 py-2  max-md:text-sm'>TIRVANAIKOVIL  CHILDREN HOSPITAL</p>
        <ImageSlider images={images3} className="" />
    </div>
      </div>
      <p className='text-center font-bold text-2xl text-red-900 py-3 max-md:text-sm'>RAJ HOSPITAL-RENOVATION</p>
         <div className='flex max-md:flex-col justify-around py-4 mr-16  max-md:mr-5'>
          <img src={rj1} alt="" className='w-1/3 m-3 max-md:w-72 max-md:hover:w-80  shadow-green-800 shadow-xl border-2 border-green-900 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
          <img src={rj2} alt="" className='w-1/3 m-3 max-md:w-72 max-md:hover:w-80  shadow-green-800 shadow-xl border-2 border-green-900 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
          <img src={rj3} alt="" className='w-1/3 m-3 max-md:w-72 max-md:hover:w-80  shadow-green-800 shadow-xl border-2 border-green-900 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        </div>
      <p className='text-center font-bold text-2xl text-red-900 py-3 max-md:text-sm'>PROPOSED RECEPTION OF DECCA HOSPITAL</p>
      <div className='flex max-md:flex-col justify-around gap-6'>
        <img src={decca} alt="" className='w-1/2 p-3 object-cover max-md:w-72 max-md:hover:w-80 max-md:ml-3 shadow-green-800 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={decca1} alt="" className='w-1/2  p-3 object-cover max-md:w-72 max-md:hover:w-80 max-md:ml-3 shadow-green-800 shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105'/>
      </div>
    </div>
  )
}

export default Hospitals