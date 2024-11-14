// import React from "react";
// import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill }from 'react-icons/ri'
// import{Link} from 'react-router-dom'

// const SocialIcons = () =>{

//     return(
//          <div className="flex gap-6 pr-4">
//             <Link to={''} className='text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration 500'><RiYoutubeFill /> </Link>
//             <Link to={''} className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-all duration 500'><RiInstagramFill /> </Link>
//             <Link to={''} className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration 500'><RiTwitterFill /> </Link>
//             <Link to={''} className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration 500'><RiLinkedinFill /> </Link>
//             <Link to={''} className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration 500'><RiGithubFill /> </Link>
//          </div>
//     )
// }

// export default SocialIcons











//------------------------


import React from 'react';
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import whatsapp from "../assets/whatsapp.png";
import card from "../assets/card.png";
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4">
      {/* Instagram */}
      <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="h-16 w-16" />
      </Link>

      {/* YouTube */}
      <Link to="https://youtube.com/@oyster684?si=pWhlcA5EOmk2DL2l" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="YouTube" className="h-16 w-16" />
      </Link>

      {/* Facebook */}
      <Link to="https://www.facebook.com/profile.php?id=61554345270723&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="h-16 w-16" />
      </Link>

      {/* WhatsApp */}
      <Link 
        to="https://wa.me/919511294735"
      target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" className="h-16 w-16" />
      </Link>

      {/* Card */}
      <Link to="https://cardsendkaro.com/Oyster-Enterprises-Seven-Happy-Days-" target="_blank" rel="noopener noreferrer">
        <img src={card} alt="Card Send Karo" className="h-20 w-26" />
      </Link>
    </div>
  );
};

export default SocialIcons;
