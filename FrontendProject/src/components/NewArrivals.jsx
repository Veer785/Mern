// import React,{useState,useEffect} from "react";
// import Item from "./Item";

// const NewArrivals = () =>{
    
// const [new_collection, setNew_collection] = useState([])

// useEffect(()=>{
//     fetch('http://localhost:4000/newcollections').then((response)=> response.json()).then((data)=> 
//         setNew_collection(data));
// }, [])
    

//     return(
//         <section className="max-padd-container bg-primary p-12 xl:py-28">
        
//         <div> </div>
//         {/* title */}
//         <div className="text-center max-w-xl mx-auto">
//              <h3 className="h3">New Arrivals</h3> 
//              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, at atque et ut, molestias aspernatur cupiditate corporis voluptatem eius quas, corrupti molestiae saepe sit odio iste quidem accusantium sint illum.</p>
//             <br></br> 
//         </div>
//         {/* container */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
//             {new_collection.map((item)=>(
//                 <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             ))}
//         </div>


//            <div>
//            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold">SEVEN HAPPY DAYS</h1>
//            </div> 



//   {/* ------------------------- */}

//   <div class="relative inline-block flex justify-center items-center">
//   <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black">
//   Community Care:

// </h1>
// <p className="flex justify-center items-center font-bold text-[18px]">
//   At Oyester Enterprises Seven day, we believe in extending our care beyond products to positively impact communities. Our initiatives focus on ensuring that every woman and girl has access to quality menstrual hygiene solutions.
// </p>

//   <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
// </div>
//   {/* ------------------------- */}
//   <br>
//   </br>
//   <br></br>
//         <div className="flex justify-center items-center">
//   <iframe
//     className="h-[500px] w-[1200px] rounded-lg mx-auto"
//     src="https://www.youtube.com/embed/KFOHM594N0g"
//     title="YouTube video player"
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     allowFullScreen
//   ></iframe>
// </div>
        
//        </section>
       
//     )
// }

// export default NewArrivals




// --------------------------------------------



// import React,{useState,useEffect} from "react";
// import Item from "./Item";

// const NewArrivals = () =>{
    
// const [new_collection, setNew_collection] = useState([])

// useEffect(()=>{
//     fetch('http://localhost:4000/newcollections').then((response)=> response.json()).then((data)=> 
//         setNew_collection(data));
// }, [])
    

//     return(
//         <section className="max-padd-container bg-primary p-12 xl:py-28">
        
//         <div> </div>
//         {/* title */}
//         {/* <div className="text-center max-w-xl mx-auto">
//              <h3 className="h3">New Arrivals</h3> 
//              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, at atque et ut, molestias aspernatur cupiditate corporis voluptatem eius quas, corrupti molestiae saepe sit odio iste quidem accusantium sint illum.</p>
//             <br></br> 
//         </div> */}
//         {/* container */}
//         {/* <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
//             {new_collection.map((item)=>(
//                 <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             ))}
//         </div> */}


//            {/* <div>
//            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold">SEVEN HAPPY DAYS</h1>
//            </div>  */}



//   {/* ------------------------- */}

//   <div class="relative inline-block flex justify-center items-center">
//   <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black">
//   Community Care:

// </h1>
// <p className="flex justify-center items-center font-bold text-[18px]">
//   At Oyester Enterprises Seven day, we believe in extending our care beyond products to positively impact communities. Our initiatives focus on ensuring that every woman and girl has access to quality menstrual hygiene solutions.
// </p>

//   <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
// </div>
//   {/* ------------------------- */}
//   {/* Cursor  */}


//   {/* ------------------------- */}
//   <br>
//   </br>
//   <br></br>
//         <div className="flex justify-center items-center">
//   <iframe
//     className="h-[500px] w-[1200px] rounded-lg mx-auto"
//     src="https://www.youtube.com/embed/KFOHM594N0g"
//     title="YouTube video player"
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     allowFullScreen
//   ></iframe>
// </div>
        
//        </section>
       
//     )
// }

// export default NewArrivals


// --------------------------------------------



import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "../assets/Product.jpeg";
import P from "../assets/P.jpeg";

const NewArrivals = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <section className="max-padd-container bg-primary p-12 xl:py-28">
      {/* Title */}
      <div className="relative flex flex-col items-center text-center mb-8">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black mb-4">
          Community Care
        </h1>
        <p className="font-bold text-lg text-gray-700 mb-4">
          At Oyster's  Seven Happy days, we believe in extending our care
          beyond products to positively impact communities. Our initiatives
          focus on ensuring that every woman and girl has access to quality
          menstrual hygiene solutions.
        </p>
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
      </div>

      {/* Community Initiatives and Product Image */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Left Side: Community Initiatives */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          .Kourang Foundation, Maharashtra
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-600 ml-4 text-gray-700 ">
            <li>Jambe Village Gram Panchayat, Taluka Mulshi, District Pune</li>
            <li>Jategaon Village Gram Panchayat, Taluka Shikrapur, District Pune</li>
            <li>FTII Radio, Pune</li>
            <li>Pradnya Shikshan Sanstha, Pune</li>
            <li>SNDTWU, Pune</li>
            <li>Bahuuddeshiya Sanstha, Chembur, Mumbai</li>
            <li>Gayatri School, Moshi, Pune</li>
            <li>Sanghini Bachat Gat,</li>

             
           <li>Swadhar Bachat Gat, </li> 
           <li>Sakhi Bachat Gat</li> 
          </ul>
        </div>

        {/* Right Side: Product Image */}
        <div className="md:w-1/2 flex justify-center">
        <img
    // src={Product}
        src={P}

    alt="New Arrival Product"
    className="rounded-lg shadow-lg"
    // style={{ height: "25rem", width: "45rem" }}
    style={{ height: "20rem", width: "22rem" }}

  />
        </div>
      </div>

      {/* YouTube Video */}
      <div className="flex justify-center items-center mt-12">
      <iframe
  src="https://www.youtube.com/embed/twRXQfhT3xc"
  frameBorder="0"
  allowFullScreen
  className="w-[1200px] h-[500px] rounded-lg shadow-lg"
/>

</div>


    </section>
  );
};

export default NewArrivals;
