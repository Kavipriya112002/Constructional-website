import React from 'react'
import bustop1 from"../Navbar/asset/bstp1.jpg"
import bustop2 from"../Navbar/asset/bstp2.jpg"
import bustop3 from"../Navbar/asset/bstp3.jpg"
import ImageSlider from '../ImageSlider';
import ck1 from "../Navbar/asset/ck1.jpg"
import ck2 from "../Navbar/asset/ck2.jpg"
import ck3 from "../Navbar/asset/ck3.jpg"
import ck4 from "../Navbar/asset/ck4.jpg"
import ck5 from "../Navbar/asset/ck5.jpg"
import ck6 from "../Navbar/asset/ck6.jpg"
import ck7 from "../Navbar/asset/ck7.jpg"
import cd1 from "../Navbar/asset/cd1.jpg"
import cd2 from "../Navbar/asset/cd2.jpg"
import cd3 from "../Navbar/asset/cd3.jpg"
import cd4 from "../Navbar/asset/cd4.jpg"
import cmk from "../Navbar/asset/cmk.jpg"
import ctp1 from "../Navbar/asset/ctp1.jpg"
import ctp2 from "../Navbar/asset/ctp2.jpg"
import ctp3 from "../Navbar/asset/ctp3.jpeg"
import ctf3 from "../Navbar/asset/ctf3.jpg"
import ctp4 from "../Navbar/asset/ctp4.jpg"
import ctp5 from "../Navbar/asset/ctp5.jpg"
import ctp6 from "../Navbar/asset/ctp6.jpg"
import ctp7 from "../Navbar/asset/ctp7.jpeg"
import ctp8 from "../Navbar/asset/ctp8.jpg"
import ctp9 from "../Navbar/asset/ctp9.jpg"
import ctp10 from "../Navbar/asset/ctp10.jpg"
import ctp11 from "../Navbar/asset/ctp11.jpg"
import ctp12 from "../Navbar/asset/ctp12.jpg"
import ctp13 from "../Navbar/asset/ctp13.jpg"
import ctp14 from "../Navbar/asset/ctp14.jpg"
import ctp15 from "../Navbar/asset/ctp15.jpg"
import ctp16 from "../Navbar/asset/ctp16.jpg"
import ctp17 from "../Navbar/asset/ctp17.jpg"
import rb1 from "../Navbar/asset/rb1.JPG"
import rb3 from "../Navbar/asset/rb3.jpeg"
import rbv1 from "../Navbar/asset/rbv1.jpg"
import rbv2 from "../Navbar/asset/rbv2.jpg"
import rbv3 from "../Navbar/asset/rbv3.jpg"
import rbv4 from "../Navbar/asset/rbv4.jpg"
import rbv5 from "../Navbar/asset/rbv5.jpg"
import rbv6 from "../Navbar/asset/rbv6.jpg"
import rbv7 from "../Navbar/asset/rbv7.jpg"
import rbv8 from "../Navbar/asset/rbv8.jpg"
import ch1 from "../Navbar/asset/ch1.jpg"
import ch2 from "../Navbar/asset/ch2.jpg"
import ch3 from "../Navbar/asset/ch3.jpg"
import ch4 from "../Navbar/asset/ch4.jpg"
import ch5 from "../Navbar/asset/ch5.jpg"
import ch6 from "../Navbar/asset/ch6.jpeg"
import ch7 from "../Navbar/asset/ch7.jpeg"


const Commercial = () => {
  const images1 =[ck1,ck2,ck3,ck4,ck5,ck6,ck7]
  const images2 =[cd1,cd2,cd3,cd4]
  const images3 =[ctp2,ctp1,ctp4,ctp6,ctp8,ctp7,ctp3,ctf3,ctp9,ctp5,ctp10,ctp11,ctp12,ctp13,ctp14,ctp15,ctp16,ctp17]
  const images4 =[rbv1,rbv2,rbv3,rbv4,rbv5,rbv6,rbv7,rbv8]

  return (
    <div className='p-24 max-md:p-5'>
      <h1 className='text-center text-3xl font-bold my-4 underline  decoration-red-600 max-md:text-base '>COMMERCIAL BUILDINGS</h1>
      <div className='flex max-md:flex-col'>
      <div className=' mt-4 flex-col justify-around  w-1/2 max-md:w-full  px-4 max-md:px-0'>
      <span className="w-3/5 "><ImageSlider images={images1} /></span>
      <p className=' text-center text-lg  max-md:text-xs  font-semibold bg-indigo-200 py-3 max-md:py-1'>KALAIARANGAM MARRIAGE HALL AT TRICHY </p>
      </div>
      <div className=' mt-4 flex-col justify-around  w-1/2 px-4 max-md:w-full max-md:px-0 '>
      <span className="w-3/5 "><ImageSlider images={images2} /></span>   
      <p className=' text-center  max-md:text-xs text-lg font-semibold py-3 bg-indigo-200  max-md:py-1'>DINAMALAR OFFICE </p>
      </div>
      </div>
      <br/>
      <h2 className='text-center text-2xl font-bold pt-9 underline underline-offset-4 text-red-800 max-md:text-base ' >AUDITORIUM & CONFERENCE HALL</h2>
       <p className='text-center font-bold text-2xl mt-6 max-md:mt-2 max-md:text-sm'>NIC CONFERENCE HALL</p>
       <div className='flex mx-7 ml-2 gap-6 p-3 max-md:p-0.5 max-md:gap-1 max-md:mx-2 max-md:ml-0'>
        <img src={ch1} alt="" className='w-1/3 shadow-lg shadow-orange-700 max-md:shadow-orange-700 max-md:shadow-md' />
        <img src={ch3} alt="" className='w-1/3 shadow-lg shadow-orange-700 max-md:shadow-orange-700 max-md:shadow-md'/>
        <img src={ch2} alt="" className='w-1/3 shadow-lg shadow-orange-700 max-md:shadow-orange-700 max-md:shadow-md'/>
       </div>
       <p className='text-center font-bold text-2xl mt-6  max-md:text-sm max-md:mt-3'>VILUPPURAM FOREST INCUBATION CENTER</p>
       <div className='flex mx-7  gap-11 p-6 h-96 max-md:p-0 max-md:gap-2 max-md:h-fit max-md:mt-1 max-md:mr-3 max-md:ml-2'  >
        <img src={ch7} alt="" className='w-1/2 shadow-lg shadow-blue-500 max-md:shadow-blue-500 max-md:shadow-md' />
        <img src={ch6} alt="" className='w-1/2 shadow-lg shadow-blue-500 max-md:shadow-blue-500 max-md:shadow-md'/>
       </div>
       <p className='text-center font-bold text-2xl mt-6 max-md:mt-2 max-md:text-sm'>BUTTERFLY PARK AUDITORIUM</p>
       <div className='flex max-md:flex-col mx-7 ml-3 gap-6 p-3 max-md:pt-1  max-md:p-2  max-md:ml-5'>
        <img src={ch4} alt="" className='w-1/2 max-md:w-full shadow-lg shadow-orange-700' />
        <img src={ch5} alt="" className='w-1/2 max-md:w-full shadow-lg shadow-orange-700'/>
       </div>
      <p className='text-center font-bold text-2xl mt-6 max-md:mt-2 max-md:text-sm'>MEMORIAL</p>
      <div className=' pb-20 pt-6 max-md:pb-3'> 
        <img src={cmk} alt="" className='h-svh w-full shadow-black shadow-2xl max-md:h-fit max-md:shadow-black max-md:shadow-lg'/>
      </div>
      <h1 className='text-center text-2xl font-bold pt-9 underline underline-offset-4 text-red-800 pb-6 max-md:pt-2  max-md:text-base'>BUS STOPS</h1>
      <div className='flex max-md:flex-col'>
         <div className='flex-col w-1/3 px-4 max-md:px-1 max-md:w-full'>
         <img src={bustop1} alt="" className=''/>
         <h2 className=' text-center text-lg  max-md:text-xs font-bold  bg-green-200 '>JAMAL MOHAMED COLLEGE BUS STOP </h2><br/>
         </div>
         <div className=' flex-col w-1/3 px-4 max-md:px-1 max-md:w-full '>
         <img src={bustop2} alt="" className=''/>
         <h2 className='text-lg  max-md:text-xs font-bold text-center  bg-green-200'> EXTERIOR & INTERIOR VIEW,TRICHY</h2><br/>
         </div>
         <div className='flex-col w-1/3 px-4 max-md:px-1 max-md:w-full'>
         <img src={bustop3} alt="" className=''/>
         <h2 className='text-center text-lg  max-md:text-xs  font-bold  bg-green-200'>JOSPEH EYE HOSPITAL BUS STOP, TRICHY</h2><br/>
         </div>
         </div>
       <h1 className='text-center text-2xl font-bold pt-9 underline underline-offset-4 text-red-800 max-md:text-base max-md:pt-1'>PARKS</h1>
       <p className='text-center text-2xl font-bold my-4 max-md:text-xs '>CHILDREN TRAFFIC PARK AT TRICHY</p>
       <div className='m-44 w-4/6 mb-10 mt-7 ml-56 shadow-black shadow-xl max-md:ml-1 max-md:w-full '>
        <ImageSlider images={images3} className=""/>
       </div>
       <h2 className='text-center text-2xl font-bold pt-9 underline underline-offset-4 text-red-800 mb-14 max-md:text-base max-md:pt-1 max-md:mb-2'>RESIDENTIAL BUILDINGS</h2>
       <div className='flex '>
        <p className='text-center w-1/2 text-2xl font-bold max-md:text-xs ' >Dr PARKAVAN PACHAMUTHU HOUSE</p>
        <p className='text-center w-1/2 text-2xl font-bold max-md:text-xs' >RESIDENTIAL BUILDING AT RAJAPALAYAM</p>
       </div>
       <div className='flex p-9 max-md:p-0 max-md:mt-1 gap-5 max-md:gap-1'>
          <img src={rb1} alt="" className='w-1/2 border border-black '/>
          <img src={rb3} alt="" className='w-1/2 border border-black'/>
       </div>           
       
       <p className='text-center text-2xl font-bold my-4 mt-14 max-md:text-xs max-md:mt-5'>VAIYAMPATTI DRDA GUEST HOUSE</p>
       <div className='m-52 my-8 shadow-black shadow-2xl max-md:my-0 max-md:m-2'>
         <ImageSlider images={images4}/>
       </div>
       
    </div>
  )
}

export default Commercial