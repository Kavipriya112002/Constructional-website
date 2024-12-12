import React, { useEffect, useRef }  from 'react'
import interior1 from "../Navbar/asset/desl1.JPG"
import interior2 from "../Navbar/asset/desl2.JPG"
import interior3 from "../Navbar/asset/desl3.JPG"
import interior4 from "../Navbar/asset/desl4.JPG"
import interior5 from "../Navbar/asset/desl5.jpg"
import interior6 from "../Navbar/asset/desl6.JPG"
import interior7 from "../Navbar/asset/desl7.JPG"
import interior8 from "../Navbar/asset/desl8.JPG"
import interior9 from "../Navbar/asset/desl9.JPG"
import interior10 from "../Navbar/asset/desl10.JPG"
import interior11 from "../Navbar/asset/desl11.JPG"
import interior12 from "../Navbar/asset/desl12.jpg"
import interior13 from "../Navbar/asset/desl13.jpg"
import interior14 from "../Navbar/asset/desl14.JPG"
import interior15 from "../Navbar/asset/desv1.JPG"
import interior16 from "../Navbar/asset/desv2.JPG"
import interior17 from "../Navbar/asset/desv3.JPG"
import interior18 from "../Navbar/asset/desv4.JPG"
import interior19 from "../Navbar/asset/desv5.JPG"
import interior20 from "../Navbar/asset/desv6.JPG"
import interior22 from "../Navbar/asset/desv8.JPG"
import interior23 from "../Navbar/asset/desv9.JPG"
import interior24 from "../Navbar/asset/desv10.JPG"
import interior25 from "../Navbar/asset/desv11.JPG"
import interior27 from "../Navbar/asset/desv12.JPG"

 const images1=[interior1,interior2,interior3,interior4,interior5,interior6,interior7,interior8,interior9,interior10,interior11,interior12,interior14,interior13]
   const  images2=[interior15,interior16,interior17,interior18,interior19,interior20,interior22,interior23,interior24,interior25,interior27]
const Interior = () => {
  const trackRef1 = useRef(null);
  const trackRef2 = useRef(null);

  useEffect(() => {
    const track1 = trackRef1.current;
    const keyframes1 = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ];
    const options1 = {
      duration: 30000,
      iterations: Infinity
    };
    const animation1 = track1.animate(keyframes1, options1);

    const track2 = trackRef2.current;
    const keyframes2 = [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-100%)' }
    ];
    const options2 = {
      duration: 30000,  
      iterations: Infinity,
      direction: 'reverse'
      
    };
    const animation2 = track2.animate(keyframes2, options2);

    return () => {
      animation1.cancel();
      animation2.cancel();
    };
  }, []);

  return (
    <div>
      <h1 className='text-3xl max-md:text-base max-md:pt-12 font-bold text-center  mb-8 max-sm:my-4 bg-white underline  decoration-red-600 pt-24'>INTERIOR AND EXTERIOR DESIGN WORKS</h1>
      <p className='text-xl  p-4 font-medium  indent-9 max-md:text-xs ' >we create innovative interior and exterior designs. Our team combines technology with creative solutions to transform spaces, ensuring they are both attractive and structurally sound. From optimizing interiors for efficiency to enhancing exterior facades, we deliver projects that exceed expectations.</p>
      <div className="flex flex-col space-y-8">
      <div className="overflow-hidden w-full border py-4 max-sm:py-1 bg-red-200">
        <div className="flex" ref={trackRef1} style={{ width: '150%' }}>
          {[...images1, ...images1].map((src, index) => (
            <div key={index} className={`flex-shrink-0 w-1/6 p-5 max-md:w-1/5 max-md:p-3 hover:object-cover  transition-transform duration-500 ease-in-out transform hover:scale-110 `}>
              <img src={src} alt={`Slide ${index % images1.length + 1}`} className="w-full h-full object-cover border border-black shadow-lg shadow-slate-800 max-md:" />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full border py-4 max-sm:py-1 bg-red-200">
        <div className="flex" ref={trackRef2} style={{ width: '200%' }}>
          {[...images2, ...images2].map((src, index) => (
            <div key={index} className={`flex-shrink-0 w-1/5  p-5 py-7 max-sm:p-2 hover:object-cover  transition-transform duration-500 ease-in-out transform hover:scale-110 max-sm:hover:scale-90`}>
              <img src={src} alt={`Slide ${index % images2.length + 1}`} className="w-full h-full object-cover border border-black shadow-lg shadow-slate-800" />
            </div>
          ))}
        </div>
      </div>
    </div>


    </div>
  )
}

export default Interior