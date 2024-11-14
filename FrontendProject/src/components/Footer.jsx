// import React from "react";
// import Navbar from "./Navbar";
// import SocialIcons from "./SocialIcons";
// import logo from '../assets/logo.png'
// import { Link } from "react-router-dom";

// const Footer = () =>{

//     return (
//         <footer className="max-padd-container bg-tertiary py-8">
//             <div className="flexCenter flex-col gap-y-4">
//                 {/* logo */}
//                 <Link to ={'/'} className='flex item-center gap-x-2'>
//                 <img src={logo} alt='logoImg' height={31} width={50}/>
//                 <span className='bold-24 hidden xs:flex text-white'>OssumTechnology</span>
//                 </Link>
//                 {/* Nav */}
//                 <div className="py-4">
//                          <Navbar containerStyles={"flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1"} />
//                     </div>
//                     <SocialIcons />
//                     <hr className="h-[1px] w-2/3 my-3" />
//                     <div className="text-white">Copyright &copy; OssumTechnology | All rights reserved.</div>
//             </div>
//         </footer>
//     )

// }

// export default Footer

//------------------------------------

// import React from "react";
// import Navbar from "./Navbar";
// import SocialIcons from "./SocialIcons";
// import logo from '../assets/logo.png'
// import { Link } from "react-router-dom";

// const Footer = () =>{

//     return (
//         <footer className="max-padd-container bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300 bg-opacity-90 text-white  border-solid border-cyan-200 shadow-lg  py-8">
//             <div className="flexCenter flex-col gap-y-4">
//                 {/* logo */}
//                 <Link to ={'/'} className='flex item-center gap-x-2'>
//                 <img src={logo} alt='logoImg' height={31} width={50}/>
//                 <span className='bold-24 hidden xs:flex text-white'>OYESTRO ENTERPRISES(Seven Happy Days)</span>
//                 </Link>
//                 {/* Nav */}
//                 <div className="py-4">
//                          <Navbar containerStyles={"flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1"} />
//                     </div>
//                     <SocialIcons />
//                     <hr className="h-[1px] w-2/3 my-3" />
//                     <div className="text-white">Copyright &copy; OssumTechnology | All rights reserved.</div>
//             </div>
//         </footer>
//     )

// }

// export default Footer



//-------------------------------------



import React from "react";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Logoo from "../assets/Logoo.png";
import L1 from "../assets/L1.jpg";
import Ln from "../assets/Ln.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="max-padd-container bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300 bg-opacity-90 text-white border-solid border-cyan-200 shadow-lg py-8">
            <div className="flexCenter flex-col gap-y-4">
                {/* Logo Section */}
                <div className="flex items-center gap-x-2">
                {/* <img src={Logoo} alt="Logo" height={445} width={255} className="mr-505" /> */}
                <img 
//   src={Logoo} 
// src={L1}
src={Ln}
  alt="Logo" 
  height={245} 
  width={295} 
  className="rounded-full"
/>


               
                {/* <span className="font-bold text-[34px] hidden xs:flex text-white">
                       SEVEN HAPPY DAYS
                    </span> */}
                              <h2 className='text-[36px] sm:text-[48px] lg:text-[54px] font-bold mb-4 font-[cursive] text-pink-500'>SEVEN HAPPY DAYS</h2>

                </div>

                {/* Navigation */}
                <div className="py-4">
                    <Navbar containerStyles="flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1" />
                </div>

                {/* Social Icons */}
                <SocialIcons />

                {/* Divider */}
                <hr className="h-[1px] w-2/3 my-3" />

                {/* Copyright Information */}
                <div className="text-white">
                    Copyright &copy; OssumTechnology | All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
