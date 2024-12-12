import React, { useState,useEffect,useRef } from 'react';
import Certificate from './Certificate';
import bg from './Navbar/asset/bgcre.jpg';
import pic1 from "./Navbar/asset/awdpic1.JPG"
import pic2 from "./Navbar/asset/awdpic2.JPG"
import pic3 from "./Navbar/asset/awdpic3.jpg"
import pic4 from "./Navbar/asset/awdpic4.jpg"
import trafalgar from './Navbar/asset/TRAFALGAR.JPG';
import tunneling from './Navbar/asset/trafalgar2.JPG';
import ntpcaward from './Navbar/asset/ntpc1.png';
import withapj1 from './Navbar/asset/apj.jpg';
import withapj2 from './Navbar/asset/apj1.jpg';
import withapj3 from './Navbar/asset/apj2.jpg';
import withapj4 from './Navbar/asset/apj3.jpg';
import awrds1 from "./Navbar/asset/awrds1.jpg"
import awrds2 from "./Navbar/asset/awrds2.jpeg"
import awrds3 from "./Navbar/asset/awrds3.jpeg"
import awrds4 from "./Navbar/asset/awrds4.jpeg"
import awrds5 from "./Navbar/asset/awrds5.jpeg"
import awrds6 from "./Navbar/asset/awrds6.jpeg"
import awrds7 from "./Navbar/asset/awrds7.jpg"
import awrds8 from "./Navbar/asset/awrds8.jpg"
import awrds9 from "./Navbar/asset/awrds9.jpg"
import awrds10 from "./Navbar/asset/awrds10.jpeg"
import awrds11 from "./Navbar/asset/awrds11.jpg"
import awrds12 from "./Navbar/asset/awrds12.jpeg"
import awrds13 from "./Navbar/asset/awrds13.jpeg"
import awrds15 from "./Navbar/asset/awrds15.png"
import awrds16 from "./Navbar/asset/awrds16.JPG"
import awrds17 from "./Navbar/asset/awrds17.jpg"
import awrds18 from "./Navbar/asset/awrds18.jpeg"
import sw1 from "./Navbar/asset/sw1.jpg"
import sw2 from "./Navbar/asset/sw2.jpg"
import sa1 from "./Navbar/asset/sa1.jpg"
import sa2 from "./Navbar/asset/sa2.jpg"
import { motion, useInView } from "framer-motion";



const certificates = [
  { id: 1, title: "Training certificate from TRAFALGAR HOUSE", image1: trafalgar },
  { id: 2, title: "Training certificate of critical Aspects of Construction of Tunneling", image1: tunneling },
  { id: 3, title1: "Vallur IDCT safety award by NTPC", image1: ntpcaward },
  { id: 6, title: "5 million hours VIDCT", image1: awrds1 },
  { id: 7, title: "Appreciation from CADD centre", image1: awrds2 },
  { id: 8, title: "Appreciation from CEO for highest collection of money in year end", image1: awrds3 },
  { id: 9, title: "Appreciation letter for 5800 cum continuous concrete in Nuclear Power Plant , Kalpakkam", image1:  awrds4},
  { id: 10, title: "Appreciation letter for Nuclear Reactor Vault", image1: awrds5 },
  { id: 11, title: "Appreciation letter from project director on My R&D works on concrete and others", image1: awrds6 },
  { id: 12, title: "Customer Satisfaction VIDCT AUG 2011", image1: awrds7 }, 
  { id: 13, title: "Customer Satisfaction VIDCT MAR & NOV 2010", image1: awrds8,image2:awrds9 }, 
  { id: 14, title: "8 million Safe Manhours by NTPC", image1: awrds10}, 
  { id: 15, title: "ESC Government Polytechnic,Tekke, NandyalAndhra Pradesh", image1: awrds11}, 
  { id: 16, title: "ICI - Ultratech award for Outstanding Young Concrete Engineer", image1: awrds12,image2: awrds13},
  { id: 17, title: "Letter of appreciation THREE MILION  from NTPC", image1: awrds15},
  { id: 18, title: "On-site Training at Kalpakkam - Certificate", image1: awrds16},
  { id: 19, title: "PSNA institution innovation & startup policy- Member", image1: awrds17},
  { id: 20, title: "PSNA_NISPIIC", image1: awrds18}, 
];

const Awards = () => {

  const ref3 = useRef(null);
const isInView3 = useInView(ref3, { once: true });

const variants3 = {
  hidden: { p: '100%', width :2 },
  visible: { p: 0, width:300, transition: { duration: 1 } },
};
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className='pt-24 bg-fixed bg-cover max-md:bg max-md:pt-12' style={{ backgroundImage: `url(${bg})` }}>
      <h1 className='text-2xl font-bold text-green-900 text-center '>AWARDS & APPRECIATION</h1>
      <h2 className='text-center font-bold text-xl text-red-900 pt-5 max-md:text-sm '>WITH Dr.APJ ABDUL KALAM SIR ,AT KALPAKKAM </h2>
      <div className='flex max-md:flex-col justify-around  bg-white p-7 gap-3 max-md:gap-1 max-md:pl-6'>
      <motion.img
      ref={ref3}
      initial="hidden"
      animate={isInView3 ? 'visible' : 'hidden'}
      variants={variants3} src={withapj1} alt="" className='w-1/5   shadow-lg shadow-slate-600 outline transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <motion.img
      ref={ref3}
      initial="hidden"
      animate={isInView3 ? 'visible' : 'hidden'}
      variants={variants3} src={withapj2} alt="" className='w-1/5 max-md:ml-20  shadow-lg shadow-slate-600 outline transition-transform duration-500 ease-in-out transform hover:scale-105'/>
        <motion.img
      ref={ref3}
      initial="hidden"
      animate={isInView3 ? 'visible' : 'hidden'}
      variants={variants3} src={withapj3} alt="" className='w-1/5   shadow-lg shadow-slate-600 outline transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <motion.img
      ref={ref3}
      initial="hidden"
      animate={isInView3 ? 'visible' : 'hidden'}
      variants={variants3} src={withapj4} alt="" className='w-1/5  max-md:ml-20 shadow-lg shadow-slate-600 outline transition-transform duration-500 ease-in-out transform hover:scale-105'/>
      </div>
      <h2 className='text-center font-bold text-xl text-red-900 pt-5 max-md:text-sm  mt-7'>APPRECIATION FOR THE BEST CHILDREN TRAFFIC PARK CONSTRUCTED AT TRICHY</h2>
      <div className='flex justify-around  bg-white p-7 gap-3'>
        <img src={pic1} alt="" className='w-2/5 max-md:w-1/2 max-md:p-1 shadow-lg shadow-orange-700 transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <img src={pic2} alt="" className='w-2/5 max-md:w-1/2 max-md:p-1 shadow-lg shadow-orange-700 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
      </div>
      <div className='flex justify-between bg-white mt-7'> 
      <p className='text-lg font-bold pl-64 max-md:pl-14 max-md:text-center max-md:text-xs'>ICI YOUNG CONCRETE ENGINEER AWARD 2012</p>
     <p className='text-lg font-bold pr-32 max-md:pr-4 max-md:text-center max-md:text-xs' >KU  UNIVERSITY DISTINGUISHED ALUMINI</p>
      </div>
      <div className='flex justify-around h-96 bg-white p-7 gap-3 max-md:h-48 max-md:gap-1 max-md:p-2'>
        <img src={pic3} alt="" className='w-2/5 max-md:w-3/5 max-md:p-1 shadow-lg shadow-orange-700 transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <img src={pic4} alt="" className='w-1/5  max-md:p-1 shadow-lg shadow-orange-700 transition-transform duration-500 ease-in-out transform hover:scale-105'/>
      </div>
     
      <div className='border-double'>
        {certificates.map(cert => (
          <Certificate
            key={cert.id}
            id={cert.id}
            title={cert.title}
            title1={cert.title1}
            image1={cert.image1}
            image2={cert.image2}
            isOpen={openId === cert.id}
            onClick={handleClick}
          />
        ))}
      </div>
      <h2 className='mt-12 text-center font-bold text-2xl text-red-900 pt-5 max-md:text-sm bg-white'>SAFETY TRAINING FOR ALL LABOURS</h2>
      <div className='flex  bg-white'>
        <img src={sw1} alt="" className='w-1/2 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <img src={sw2} alt="" className='w-1/2 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105' />
      </div>
      <div className='flex mx-12 bg-white mt-14 max-md:mx-6'>
        <img src={sa1} alt="" className='w-1/2 p-4 max-md:p-1 transition-transform duration-500 ease-in-out transform hover:scale-105' />
        <img src={sa2} alt="" className='w-1/2 p-4 max-md:p-1 transition-transform duration-500 ease-in-out transform hover:scale-105' />
      </div>
      <div className='flex p-4 justify-around text-lg font-bold  max-md:text-xxs bg-white max-md:pt-0'><p>SAFTEY APRECIATION AWARD FROM HOTEL LEELA PALACE</p><p>VALLUR IDCT SAFETY AWARD GIVEN BY NTPC</p></div>
    </div>
  );
};

export default Awards;