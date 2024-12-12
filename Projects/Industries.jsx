import React  from 'react'
import LazyLoad from 'react-lazyload';
import ip1 from "../Navbar/asset/ind1.JPG"
import ip2 from "../Navbar/asset/ind2.JPG"
import ip3 from "../Navbar/asset/ind3.jpg"
import ip5 from "../Navbar/asset/ind5.png"
import ip6 from "../Navbar/asset/ind6.bmp"
import ip7 from "../Navbar/asset/ind7.jpg"
import ip8 from "../Navbar/asset/ind8.png"
import ip9 from "../Navbar/asset/ind9.png"
import ip10 from "../Navbar/asset/ind10.png"
import cm1 from "../Navbar/asset/cm1.JPG"
import cm2 from "../Navbar/asset/cm2.JPG"
import cm3 from "../Navbar/asset/cm3.JPG"
import cm4 from "../Navbar/asset/cm4.JPG"
import ImageAnimate from '../ImageAnimate.jsx'
import ndct1 from "../Navbar/asset/ndct1.JPG"
import ndct2 from "../Navbar/asset/ndct2.JPG"
import ndct3 from "../Navbar/asset/ndct3.JPG"
import ndct00 from "../Navbar/asset/ndct00.jpg"
import in1 from "../Navbar/asset/in1.JPG"
import in2 from "../Navbar/asset/in2.JPG"
import in3 from "../Navbar/asset/in3.JPG"
import in4 from "../Navbar/asset/in4.JPG"
import NR1 from "../Navbar/asset/NR1.jpg"
import NR2 from "../Navbar/asset/NR2.jpg"
import NR3 from "../Navbar/asset/NR3.jpg"
import NR4 from "../Navbar/asset/NR4.jpg"
import NR5 from "../Navbar/asset/NR5.jpg"
import RW1 from "../Navbar/asset/RW1.JPG"
import RW2 from "../Navbar/asset/RW2.JPG"
import RW3 from "../Navbar/asset/RW3.JPG"
import RW4 from "../Navbar/asset/RW4.JPG"
import RW5 from "../Navbar/asset/RW5.JPG"
import ind11 from "../Navbar/asset/ind11.jpg"



const Industries = () => {
   const images1 =[cm1,cm2,cm3,cm4]
   const images2 =[ndct00,ndct1,ndct2,ndct3]
   const images3 =[in1,in2,in3,in4]
   const images4 =[NR5,NR4,NR3,NR2,NR1]
   const images5 =[RW1,RW2,RW3,RW4,RW5]
  return (
    <div className='pt-24 max-md:pt-8 '>
      <LazyLoad>
        <h1 className='text-3xl font-bold text-center my-8 max-md:mb-2 max-md:text-lg max-md:pl-12 '>OUR COMPLETED PROJECTS</h1>
        <h2 className='text-2xl font-bold text-center   max-md:text-base max-md:pt-0 underline  decoration-red-600'>INDUSTRIAL PROJECTS</h2>
    <div className='bg-slate-200 pt-5  max-md:pt-2'>
     <div className='flex gap-5 m-8 max-md:m-2 max-md:gap-2 p-3   '>
      <img src={ip1} alt="" className='w-1/2 object-cover border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 '/>
      <img src={ip2} alt="" className='w-1/2 object-cover border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
     </div>
      <div>
      <div className='flex justify-around my-8 max-md:my-3' >
      <span className='w-1/2 object-cover border-2 border-gray-700  transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-slate-900 shadow-lg'><ImageAnimate images={images2}/>  </span>  
      <img src={ip3} alt="" className='h-fit w-1/3 p-7 pt-11 object-cover border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      </div>
      <div className='flex justify-around my-8 max-md:my-7'>
      <img src={ip5} alt="" className=' w-1/4 object-cover  border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'   />
      <img src={ip6} alt="" className=' w-1/2 object-cover border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      </div>
      </div>
      <div className='flex justify-around p-9 gap-9 max-md:px-3 max-md:gap-3 max-md:py-2'>   
      <span className=' w-1/2  object-cover border-2 max-md:mb-3 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 '><ImageAnimate images={images1}   /></span>
      <span className=' w-1/2 h-fit  object-cover border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 '><ImageAnimate images={images3}   /></span>
      </div> 
      <div className='flex justify-around p-9 gap-9 max-md:px-3 max-md:gap-3 max-md:py-2'>
      <span className=' w-1/2 h-fit border-2  border-gray-700  bject-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 '><ImageAnimate images={images4}   /></span> 
      <span className=' w-1/2 h-fit border-2 border-gray-700  object-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 '><ImageAnimate images={images5}   /></span> 
      </div>
      <div className='flex justify-around p-9 gap-5 max-md:p-3 max-md:gap-2'>
         <img src={ip9} alt="" className='  w-1/2 max-md:w-2/5  border-2 border-gray-700  object-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
        <img src={ip10} alt="" className='object-cover w-1/4  border-2 border-gray-700  shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
        <img src={ip7} alt="" className='  w-1/4 border-2 border-gray-700  object-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      </div>
      <div className='flex justify-around p-9 gap-5 max-md:p-5 max-md:gap-2'>
      
      <img src={ip8} alt="" className=' w-1/2  border-2 border-gray-700 object-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      <img src={ind11} alt="" className=' w-1/2  border-2 border-gray-700  object-cover shadow-slate-900 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      </div>
      
    </div></LazyLoad>
    </div>
  )
}

export default Industries