// import React from "react";
// import { TbTruckReturn } from "react-icons/tb";
// import about from '../assets/leaf.jpg';


// const About = () =>{
//     return(
//         <section className='max-padd-container py-12 xl:py-32'>
//             {/* container */}
//             <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
//                 {/* left */}
//                 <div className='flex-1'>
//                     <h3 className='h3 capitalize '>Unvelling Our Product's Key Features!</h3>
//                 <p className='py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum labore soluta aspernatur. Ex aliquam iusto assumenda facilis, eveniet natus deserunt consectetur sequ. At?</p>
//                 <div className="flex flex-col items-start gap-y-4">
//                     <div className="flexCenter gap-x-4">
//                         <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
//                             <TbTruckReturn className="text-white text-2xl" />
//                         </div>
//                         <div>
//                             <h4 className='medium'>Easy Returns Process</h4>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum labore soluta aspernatur.</p>
//                         </div>
//                     </div>
//                     <div className="flexCenter gap-x-4">
//                         <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
//                             <TbTruckReturn className="text-white text-2xl" />
//                         </div>
//                         <div>
//                             <h4 className='medium'>Secure Payment Options</h4>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum labore soluta aspernatur.</p>
//                         </div>
//                     </div>
//                     <div className="flexCenter gap-x-4">
//                         <div className='h-16 min-w-16 bg-secondary flexCenter rounded-md'>
//                             <TbTruckReturn className="text-white text-2xl" />
//                         </div>
//                         <div>
//                             <h4 className='medium'>Live Customer Support</h4>
//                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum labore soluta aspernatur.</p>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 {/* right */}
//                 <div className='flex-1 flexCenter'>
//                     <div>
//                         <img src={about} alt="" height={288} width={288}/>
//                         <img src={about} alt="" height={288} width={288}/>


//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About



//---------------------------------------



// import React from "react";
// import about from '../assets/leaf.png';

// const About = () => {
//   return (
//     <section className='max-padd-container py-12 xl:py-32 bg-gradient-to-r from-sky-300 to-sky-500 h-75 w-70 border-4'>
//       {/* container */}
//       <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
//         {/* left */}
//         <div className='flex-1 text-center'>
//           <h2 className='text-[54px] font-bold mb-4 font-playfair'>Who We Are</h2>
//           <p className='text-[18px] font-poppins'>
//             Welcome to OYESTRO ENTERPRISES – revolutionizing your period experience. At OYESTRO ENTERPRISES, we believe in enhancing your comfort and well-being during your period with our innovative Anion Chip Sanitary Pads. Backed by advanced technology in leading a sustainable future and a core belief in our heart, we ensure you feel better than ever in comfort and protection all month long.
//           </p>
//           <br />
//         </div>
//         {/* right */}
//         <div className='flex-1 flex justify-center items-center'>
//           <div className="mr-[35px]"> 
//             <p className='text-[22px] font-bold text-green-600 mt-2 text-right font-poppins'>
//               Green Anion Chip Technology
//             </p>
//           </div>
//           <div>
//             <img 
//               src={about} 
//               alt="About Oyestro Enterprises"  
//               className='w-full h-auto object-cover animate-bounce' // Add the animation class here
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;






//------------------------------------------------


import React from "react";
import about from '../assets/leaf.png';
import Product from "../assets/Product.jpeg";
import Ban from "../assets/Ban.png";

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-32 bg-gradient-to-r from-teal-200 to-lime-200  h-auto w-full border-4'>
      {/* container */}
      <div className='flex flex-col gap-16 xl:gap-8 xl:flex-row'>
        {/* left */}
        <div className='flex-1 text-center xl:text-left'>
          <h2 className='text-[36px] sm:text-[48px] lg:text-[54px] font-bold mb-4 font-playfair'>We Oyster's Seven Happy Days...</h2>
          <p className='text-[16px] sm:text-[18px] font-poppins text-justify'>
          Welcome Womanhood 
          Revolutionizing your period experience. At Seven Happy Days. we believe in enhancing your comfort and well-being during your period with our innovative Anion Chip Sanitary Pads.Using  by advanced technology in leading a sustainable future and a core belief in our heart, we ensure you feel better than ever in comfort and protection.
</p>

          <br />
        </div>
        {/* right */}
        <div className='flex-1 flex flex-col justify-center items-center xl:flex-row xl:justify-between'>
          <div className="mr-0 xl:mr-[35px] mb-4 xl:mb-0"> 
            {/* <p className='text-[20px] font-bold text-green-600 mt-2 text-center xl:text-right font-poppins'>
              Green Anion Chip Technology
            </p> */}
          </div>
          <div>
            <img 
              src={about} 
              // src={Ban}
              alt="About Oyster's Enterprises"  
              className='w-full h-auto object-cover animate-bounce' // Add the animation class here

          />
               <p className='text-[20px] font-bold text-green-600 mt-2 text-center xl:text-right font-poppins'>
              Green Anion Chip Technology
            </p>
            {/* <img
            src={Product}
            alt=""
            style={{alignItems:"center"}}
            /> */}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
