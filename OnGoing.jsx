import React,{useEffect,useRef}from 'react'
import ImageAnimate from './ImageAnimate.jsx'
import ong1 from "./Navbar/asset/ong1.jpg"
import ong2 from "./Navbar/asset/ong2.jpg"
import ong3 from "./Navbar/asset/ong3.jpg"
import ong4 from "./Navbar/asset/ong4.jpg"
import ong5 from "./Navbar/asset/ong5.jpg"
import ong6 from "./Navbar/asset/ong6.jpg"
import ong7 from "./Navbar/asset/ong7.jpg"
import ong9 from "./Navbar/asset/ong9.jpg"
import { motion, useInView } from "framer-motion";


const OnGoing = () => {
  const images1=[ong1,ong2,ong3];
  const images2=[ong4,ong5,ong6,ong9];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const ref2 = useRef(null);
const isInView2 = useInView(ref2, { once: true });

const variants2 = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

const variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

  return (
    <div className='pt-24 max-md:pt-12 bg-gradient-to-tr from-red-300 via-sky-100 to-fuchsia-300 pb-20'>
      <h1 className='text-center text-3xl font-bold max-md:text-xl'>ONGOING PROJECTS</h1>
      <div className=' gap-4 flex max-md:flex-col justify-center py-5 '>
      <div className='h-fit ml-2 shadow-black shadow-xl  border-2 border-black w-4/12 max-md:w-full bg-white brightness-95 px-8 py-3 max-md:mr-2   '><ImageAnimate images={images1}   /><h1 className='absolute top-20  left-10 text-4xl text-black max-md:text-2xl max-md:font-extrabold max-md:top-16 max-md:left-8 text-border-white font-bold '>HOSPITAL <br/> BUILDING ONGOING PROJECT</h1></div>
      <div className='flex max-md:mt-6'>
        <hr className='h-full w-1 ml-7 max-md:ml-7  max-md:w-2 max-md:bg-red-900 max-md:h-72 bg-red-900 '/>
        <motion.p
      ref={ref2}
      initial="hidden"
      animate={isInView2 ? 'visible' : 'hidden'}
      variants={variants2} className='p-12 pt-32 text-4xl font-medium max-md:text-2xl max-md:pt-8'
    >WE <br/>BUILD ENDURING <br/>STRUCTURES THAT <br/>STAND THE TEST <br/>OF TIME. <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg></motion.p>
      </div>
      </div>
      <div className=' gap-4 flex max-md:flex-col justify-center py-6 '>
      <div className='flex'>
      <motion.p
      ref={ref}
      initial="hidden"
      transition={{duration:2}}
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants} className='p-12 pt-20 text-4xl font-medium text-right max-md:text-2xl max-md:pt-8  max-md:pr-1 max-md:pl-44'
    >CONSTRUCTING <br/>WITH  <br/>PRECISE, AND <br/>EXPERTISE.</motion.p>
      <hr className='h-full w-1 ml-7  bg-red-900 max-md:w-2 max-md:bg-red-900 max-md:h-56 max-md:mr-1 '/>
      </div>
      <div className='h-fit ml-7 shadow-black  shadow-xl  border-2 border-black w-5/12 bg-white brightness-95 px-12 py-3  max-md:flex-col max-md:w-full max-md:ml-1 max-md:px-6'>  <ImageAnimate images={images2}   /></div>
      </div>
      <h2 className=' pt-20 pb-4 text-4xl font-medium text-center max-md:text-xl max-md:pt-5'>TRICHY RESIDENTIAL BUILDING</h2>
     <div className='flex justify-center'>
      <img src={ong7} alt="" className='h-fit ml-2 shadow-black shadow-xl  border-2 border-black w-4/6 bg-white brightness-90 px-8 py-3 max-md:w-5/6 max-md:px-4'/>
     </div>
    </div>
  )
}

export default OnGoing