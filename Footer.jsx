import React from "react";
import front from ".//Navbar/asset/front.jpg"
const Footer = () => {
  return (
    <div className="flex justify-around bg-gray-300 mt-10  pb-2 max-md:flex-col ">
      <div className="flex flex-col gap-8 ml-5  ">
        <div>
          <h1 className="text-4xl color text-pink-700 pt-11 max-md:text-lg max-md:font-semibold">
            RSG ENGINEERS & ARCHITECTS
          </h1>
        </div>
        <div className="flex flex-col gap-3 text-2xl text-black max-md:text-base max-md:font-normal ">
          <span>Civil Engineering Consultants</span>
          <span>Affordable Houses</span>
          <span>Paints</span>
          <span>Bricks</span>
        </div>
        <div>
          <img className="h-2/3 w-full max-md:w-full max-md:pr-7" src={front} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-7 max-md:gap-0 ">
        <div>
          <h1 className="text-4xl mt-10 max-md:text-lg max-md:font-semibold max-md:text-center">CONTACT US :</h1>
        </div>
        <hr className="bg-gray-700 h-1 max-md:bg-transparent " />
        <div className="flex gap-5 max-md:gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mt-11 max-md:mt-3"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h1 className="text-2xl mt-10 max-md:mt-3 max-md:text-base max-md:font-medium ">Er.R.SUDEESH,M.E.,</h1>
          </div>
        </div>
        <div className="flex gap-5 ml-6 mt-3 max-md:ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <div className="text-lg  ">
            <a href="tel:+91 944 499 1027">+ 91 944 499 1027</a>
          </div>
          <div className="text-lg ">
          <a href="tel:+91 938 544 1026">+ 91 938 544 1026</a>                                                                              
          </div>
        </div>
        <div className="flex gap-5 ml-7 mt-3 max-md:ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <div className="flex flex-col text-lg max-md:text-lg max-md:font-medium">
            <h1>sudeesh.r@gmail.com</h1>
            <h1>rsgsuriya@gmail.com</h1>
            <h1>r3sindia@gmail.com</h1>
          </div>
        </div>
        <div className="flex gap-5 mt-3 ml-7 max-md:ml-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <div>
           <div className="flex flex-col text-lg max-md:text-base  ">
            <h1 className="max-md:font-medium">REGISTERED OFFICE:</h1>
            <span>Aiyshwariya Hospital-third floor,</span>
            <span>Jayanthi bus stop</span>
            <span>5/2-1,vathukara street,</span>     
            <span>Salai Rd,housing colony,Woraiyur,</span>
            <span>Trichy,Tamilnadu,</span>
            <span>Pincode-620003</span>
           </div>
           <div className="pt-3">
             <iframe width="150" height="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=AIYSHWARIYA%20HOSPITAL,jayanthi%20bus%20stop,%205/2-1,vathukara%20street,%20Salai%20Rd,%20housing%20colony,%20Woraiyur,%20Tiruchirappalli,%20Tamil%20Nadu%20620003+()&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
           </div>
          </div>
          <div>
          <div className="flex flex-col text-lg max-md:text-base  ">
            <h1 className="max-md:font-medium">CORPORATE OFFICE:</h1>
            <span>NO:15,</span>
            <span>Ponmani Nagar,</span>
            <span>Near Sanjeevi Nagar</span>
            <span>Trichy,Tamilnadu,</span>
            <span>Pincode-620002</span>
          </div>
          <div className="p-4 pl-0 ">
             <iframe width="150" height="100" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=10%C2%B049'39.2%22N%2078%C2%B042'31.9%22E+(RSG%20Engineers%20and%20architects%20corporate%20office)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
