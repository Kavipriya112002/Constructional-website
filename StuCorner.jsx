import React,{useEffect} from 'react'
import sc1 from "./Navbar/asset/sc1.jpg"
import sc2 from "./Navbar/asset/sc2.jpg"
import sc3 from "./Navbar/asset/sc3.JPG"
import sc4 from "./Navbar/asset/sc4.jpg"

const StuCorner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' pt-24 bg-gradient-to-b from-transparent via-pink-100 to-fuchsia-100 max-md:pt-12'>
            <h1 className='text-center text-4xl font-bold max-md:text-xl'>STUDENT CORNER</h1>
      <div className='flex '>
       <span className='w-1/2 p-12 max-md:p-3  '><img src={sc1} alt="" className='shadow-black shadow-lg max-md:shadow-black max-md:shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 ' />
      <p className='text-center text-lg font-medium mt-4 max-md:text-xs max-md:mt-1'>CK college of Engineering Guest Lecture</p></span>
      <span className='w-1/2 p-12 max-md:p-3 '><img src={sc2} alt=""  className='shadow-black shadow-lg max-md:shadow-black max-md:shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      <p className='text-center text-lg font-medium mt-4 max-md:text-xs max-md:mt-1'>PSNA college of Engineering Guest Lecture</p></span>
      </div>
      <div className='flex'>
      <span className='w-1/2 p-12 max-md:p-3 ' ><img src={sc3} alt=""  className='shadow-black shadow-lg max-md:shadow-black max-md:shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 '/>
      <p className='text-center text-lg font-medium mt-4 max-md:text-xs max-md:mt-1'>Guest Lecture at Periyar University</p></span>
      <span className='w-1/2 p-12 max-md:p-3 '><img src={sc4} alt=""  className='shadow-black shadow-lg max-md:shadow-black max-md:shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105'  />
      <p className='text-center text-lg font-medium mt-4 max-md:text-xs max-md:mt-1'>PSV Polytechnic Convocation</p></span>
      </div>
    </div>
  )
}

export default StuCorner