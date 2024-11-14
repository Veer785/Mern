// import React from "react";
// import { Link } from "react-router-dom";
// import RelatedProducts from "./RelatedProducts";

// const Hero = () =>{
//     return(
//         <section>
//             <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[758px] w-full'>

//             {/* <div className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat" style={{ height: "700px", width: "1300px" }}> */}

//                 {/* <div className='relative top-14 xs:top-12'>
//                 <h4 className='uppercase medium-18 tracking-wider'>TRENDY TREASURES</h4>
//                 <h2 className='h1 capitalize max-w-[40rem]'>Elevate Your Look <span className='text-secondary'> With Every Click.</span> Shop Today!</h2>
//                 <p className='my-5 max-w-[33rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur rerum hic, atque labore in nisi praesentium est? In labore quos veritatis. Quisquam quae alias suscipit quas, dolor ipsum in.</p> */}
//                {/* button */}
//                {/* <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
//                 <div className='text-center regular-14 leading-tight pl-5'>
//                     <h5 className='uppercase font-bold'>30% OFF</h5>
//                     <p className='regular-14'>On All Items</p>
//                 </div>
//                 <Link to={''} className='btn-dark rounded-xl flexCenter !py-5'>Shop now</Link>
//                </div> */}
//                {/* NewCollection */}
//                {/* <div className='mt-16'>
//                 <RelatedProducts />
//                </div>
//             </div> */}
//             </div>
//         </section>
//     )
// }

// export default Hero



//---------------------------------


// import React from "react";

// const Hero = () => {
//   return (
//     <section>
//       <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[50vh] sm:h-[65vh] md:h-[55vh] lg:h-[758px] w-full'>
//         {/* You can add additional content here */}
//         <div className="flex flex-col justify-center items-center h-full text-center text-white">
//           {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to OYESTRO ENTERPRISES</h1>
//           <p className="mt-4 text-sm sm:text-lg md:text-xl">Revolutionizing your period experience with comfort and innovation.</p> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//-------------------------------------


import React, { useState, useEffect } from "react";
import bg from "../assets/bg.png";
import bg6 from "../assets/bg6.png";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(bg);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage === bg ? bg6 : bg));
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="max-padd-container h-[50vh] sm:h-[65vh] md:h-[55vh] lg:h-[758px] w-full"
      ></div>
    </section>
  );
};

export default Hero;
