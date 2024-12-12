import React,{useEffect ,useRef} from 'react'
import rr1 from "./Navbar/asset/rr1.jpg"
import rr2 from "./Navbar/asset/rr2.jpg"
import rr3 from "./Navbar/asset/rr3.jpg"
import rr4 from "./Navbar/asset/rr4.jpg"
import rr5 from "./Navbar/asset/rr5.jpg"
import rr6 from "./Navbar/asset/rr6.jpg"
import rr7 from "./Navbar/asset/rr7.jpg"
import rr8 from "./Navbar/asset/rr8.jpg"
import { motion, useInView } from "framer-motion";

const RrWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const ref1 = useRef(null);
const isInView1 = useInView(ref1, { once: true });
const variants1 = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const ref2 = useRef(null);
const isInView2 = useInView(ref2, { once: true });
const variants2 = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const ref3 = useRef(null);
const isInView3 = useInView(ref3, { once: true });
const variants3 = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};
  return (
    <div className='pt-24 bg-slate-200 pb-10 max-md:pt-12' >
      <h1 className='text-center text-4xl font-bold max-md:text-xl'>REPAIR & RETROFITTING WORKS</h1>
      <motion.div
      ref={ref1}
      initial="hidden"
      animate={isInView1 ? 'visible' : 'hidden'}
      variants={variants1}  className='flex-col pb-10  mx-40  p-4 border-2 shadow-black shadow-2xl bg-white mt-7 max-md:mx-2 max-md:px-6 max-md:pb-5'><div className='flex gap-4 max-md:gap-2 justify-center '>
        <img src={rr1} alt="" className='w-4/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={rr2} alt="" className='w-3/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={rr3} alt="" className='w-4/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/></div>
        <p className='bottom-44 text-xl pt-5 text-center max-md:text-base max-md:pt-2'> REPAIR AND REHABILITATION  <br/>WORKS OF  FOREST  OFFICE AT UDAYARPALAYAM </p>
       </motion.div>
       <motion.div
      ref={ref2}
      initial="hidden"
      animate={isInView2 ? 'visible' : 'hidden'}
      variants={variants2} className='flex-col pb-10  mx-32  p-8 border-2 shadow-black shadow-2xl bg-white mt-7 max-md:mx-2 max-md:px-6 max-md:pb-5 max-md:pt-3'><div className='flex gap-4 max-md:gap-2 justify-center '>
        <img src={rr4} alt="" className='w-4/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={rr5} alt="" className='w-4/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={rr6} alt="" className='w-4/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
       </div>
       <p className=' text-center text-xl pt-5 max-md:text-base '>PICTURES FOR REPAIRING WORKS</p></motion.div>
       <motion.div
      ref={ref3}
      initial="hidden"
      animate={isInView3 ? 'visible' : 'hidden'}
      variants={variants3} className='flex-col pb-10  mx-36  p-10 border-2 shadow-black shadow-2xl bg-white mt-7 max-md:mx-2 max-md:px-6 max-md:pb-5 max-md:pt-3'><div className='flex gap-4 max-md:gap-2 justify-center '>
        <img src={rr7} alt="" className='w-6/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <img src={rr8} alt="" className='w-6/12 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
       </div>
       <p className=' text-center text-xl max-md:text-base  pt-5'>RESIDENTIAL RETROFITTING WORKS</p>
       </motion.div>
    </div>
  )
}

export default RrWork