// import React, {useState,useEffect} from "react";

// import Item from "./Item";

// const PopularProducts = () => {

//     const [popular_products, setPopular_products] = useState([]);

//     useEffect(()=>{
//         fetch('http://localhost:4000/popularproducts').then((response)=> response.json()).then
//         ((data)=>setPopular_products(data));
//     }, [])

//     return(
//        <section className="max-padd-container bg-primary p-12 xl:py-28">
//         {/* title */}
//         <div className="text-center max-w-xl mx-auto">
//             <h3 className="h3">Popular Products</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, at atque et ut, molestias aspernatur cupiditate corporis voluptatem eius quas, corrupti molestiae saepe sit odio iste quidem accusantium sint illum.</p>
//         </div>
//         {/* container */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
//             {popular_products.map((item)=>(
//                 <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             ))}
//         </div>
//        </section>
//     )
// }

// export default PopularProducts




//----------------------------------------





// import React from "react";
// import Drive from '../assets/Drive.jpg';
// import Toxic from '../assets/Toxic.png';
// import An from '../assets/An.png';
// import Family from '../assets/Family.jpg';
// import work from '../assets/work.png';
// import sleep from '../assets/sleep.jpg';
// import ecofriendly from '../assets/ecofriendly.png';
// import eco from '../assets/eco.jpg';
// import skin from '../assets/skin.jpeg';
// import face from '../assets/face.jpg';
// import cervix from '../assets/cervix.jpeg'
// import uterus from '../assets/uterus.jpeg';
// import pocket from '../assets/pocket.jpg';
// import friends from '../assets/friends.jpg';
// import rash from '../assets/rash.jpg';
// import Rash from '../assets/Rash.jpg';
// import dev from '../assets/dev.webp';
// import meansuration from '../assets/meansuration.jpg';

// const PopularProducts = () => {
//   return (
//     <div className="bg-blue-50 py-16 px-8">
//       <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-16">
//         {/* Oyester's Seven Happy Days */}
//       </h2>
//       <article className="space-y-16">
//         <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
//           <img
//             className="w-full lg:w-1/3 h-65 object-cover mr-0 lg:mr-6 mb-4 lg:mb-0 rounded-md shadow-lg"
//             src={Drive}
//             alt="Drive"
//           />
//           <div className="lg:w-2/3">
//             <h1 className="text-3xl font-bold mb-4 text-gray-800">Safe in Long Drive</h1>
//             <h3 className="text-gray-700">
//               Using pads during a long drive ensures reliable protection and peace of mind, allowing women to focus on the journey. They are easy to change during planned breaks, promoting hygiene and comfort. Pads also prevent irritation during extended travel periods. With the right preparation, women can drive confidently without worrying about leaks.
//             </h3>
//           </div>
//         </div>

//         <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center">
//           <img
//             className="w-full lg:w-1/3 h-65 object-cover ml-0 lg:ml-6 mb-4 lg:mb-0 rounded-md shadow-lg"
//             src={Toxic}
//             alt="Toxic"
//           />
//           <div className="lg:w-2/3">
//             <h1 className="text-3xl font-bold mb-4 text-gray-800">Harsh Chemical-Free, Non-Toxic</h1>
//             <h3 className="text-gray-700">
//               Harsh chemical-free, non-toxic pads provide gentle care for sensitive skin, reducing the risk of irritation and rashes. They are made with natural materials that are safe for long-term use, promoting comfort and peace of mind. These pads also support a healthier, eco-friendly lifestyle by avoiding harmful substances.
//             </h3>
//           </div>
//         </div>

        

//         <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
//           <img
//             className="w-full lg:w-1/3 h-65 object-cover mr-0 lg:mr-6 mb-4 lg:mb-0 rounded-md shadow-lg"
//             src={An}
//             alt="Antibacterial Strip"
//           />
//           <div className="lg:w-2/3">
//             <h1 className="text-3xl font-bold mb-4 text-gray-800">Antibacterial Strip</h1>
//             <h3 className="text-gray-700">
//               Pads with an antibacterial strip offer added protection by preventing bacterial growth, which helps reduce the risk of infections and odor. This feature promotes better hygiene during periods, ensuring you stay fresh and comfortable for longer. It's an ideal choice for maintaining health, especially during long days or travel.
//             </h3>
//           </div>
//         </div>

//         <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center">
//           <img
//             className="w-full lg:w-1/3 h-65 object-cover ml-0 lg:ml-6 mb-4 lg:mb-0 rounded-md shadow-lg"
//             src={Family}
//             alt="Happy Family"
//           />
//           <div className="lg:w-2/3">
//             <h1 className="text-3xl font-bold mb-4 text-gray-800">Happy Family</h1>
//             <h3 className="text-gray-700">
//               A happy family fosters a supportive environment where members feel valued and loved, leading to improved emotional well-being. Strong family bonds enhance communication and trust, promoting healthier relationships and conflict resolution. This positive atmosphere encourages personal growth and resilience, allowing each member to thrive. Ultimately, a happy family contributes to a more fulfilling and harmonious life.
//             </h3>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default PopularProducts;



//--------------------------------------------







// import React from "react";
// import Drive from '../assets/Drive.jpg';
// import Toxic from '../assets/Toxic.png';
// import An from '../assets/An.png';
// import work from '../assets/work.png';
// import sleep from '../assets/sleep.jpg';
// import ecofriendly from '../assets/ecofriendly.png';
// import eco from '../assets/eco.jpg';
// import skin from '../assets/skin.jpeg';
// import face from '../assets/face.jpg';
// import cervix from '../assets/cervix.jpeg';
// import uterus from '../assets/uterus.jpeg';
// import pocket from '../assets/pocket.jpg';
// import friends from '../assets/friends.jpg';
// import rash from '../assets/rash.jpg';
// import Rash from '../assets/Rash.jpg';
// import dev from '../assets/dev.webp';
// import meansuration from '../assets/meansuration.jpg';

// const PopularProducts = () => {
//   return (
// <div className="bg-custom-green min-h-screen py-10">
// <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//           <h2 className="text-2xl font-bold text-gray-900">Oyester's Seven Happy Days</h2>

//           <div className="mt-6 grid gap-y-12 lg:grid-cols-3 rounded-lg lg:gap-x-6">
//             {/* Product Cards */}
//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={Drive} alt="Drive" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Using pads during a long drive ensures reliable protection and peace of mind, allowing women to focus on the journey.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Safe in long drive</p>
//             </div>

//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={Toxic} alt="Non-toxic Pads" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Harsh chemical-free, non-toxic pads provide gentle care for sensitive skin, reducing the risk of irritation and rashes.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Harsh Chemical free non-toxic</p>
//             </div>

//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={An} alt="Antibacterial Pads" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Pads with an antibacterial strip offer added protection by preventing bacterial growth, ensuring better hygiene.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Antibacterial strip</p>
//             </div>

//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={work} alt="Work" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Using pads ensures uninterrupted sleep and daily activities by providing reliable, long-lasting protection.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Daily comfort</p>
//             </div>

//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={eco} alt="Eco-friendly" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Eco-friendly pads use biodegradable, sustainable materials, supporting a healthier lifestyle.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Eco-friendly</p>
//             </div>

//             <div className="group relative p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
//               <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
//                 <img src={skin} alt="Skin-friendly" className="h-full w-full object-cover object-center" />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-500">
//                 Skin-friendly pads designed for sensitive skin offer gentle care by using soft, breathable materials.
//               </h3>
//               <p className="text-base font-semibold text-gray-900">Skin friendly</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;


//------------------------------------





import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import Drive from "../assets/Drive.jpg";
import sleep from "../assets/sleep.jpg";
import work from "../assets/work.png";
import ecofriendly from "../assets/ecofriendly.png";
import face from "../assets/face.jpg";
import An from "../assets/An.png";
import cervix from "../assets/cervix.jpeg";
import Rash from "../assets/Rash.jpg";
import s from "../assets/s.png";
import Toxic from "../assets/Toxic.png";
import friends from "../assets/friends.jpg";
import dev from "../assets/dev.webp";
import Family from "../assets/Family.jpg";
import eco from "../assets/eco.jpg";
import Happy from "../assets/Happy.jpeg";
import E from "../assets/E.png";
 import i8 from "../assets/i8.jpeg";
 import i9 from "../assets/i9.jpeg";

const PopularProducts = () => {
  const products = [
    { img: Drive, title: "Safe in Long Drive" },
    { img: sleep, title: "Nothing disturb your sleep" },
    { img: work, title: "Nothing disturb daily work" },
    { img: E, title: "Eco-friendly" },
    { img: face, title: "Skin friendly for sensitive skin" },
    { img: An, title: "Antibacterial Strip" },
    { img: cervix, title: "Protect Cervix and Uterus" },
    { img: Rash, title: "No itching and rashes" },
    // { img: s, title: "Stages of menstruation" },
    { img: Toxic, title: "Harsh chemical free non-toxic" },
    { img: friends, title: "Pocket friendly" },
    { img: dev, title: "Sustainable development(Eco Friendly and Earth Friendly)" },
    { img: Family, title: "Happy Family" },
    // { img: Happy, title: "Save Your Uterus" },
    { img: eco, title: "Soft Cotton Layers" },
    { img: i8, title: "Update Calendar" },
    { img: i9, title: "Update Awareness" },

  ];

  return (
    <div className="bg-custom-green min-h-screen py-10 flex flex-col items-center">
      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-2xl font-black mb-4">
        Oyster's Seven Happy Days
      </h3>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black mb-4">
       Non Disturb Our Regular Routine
      </h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade">
        {products.map((product, index) => (
          <Card key={index} className="w-80 h-[300px]">
            <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full  transition-transform transform hover:scale-110 duration-500"
              />
            </CardHeader>
            <CardBody className="flex items-center justify-center">
              <Typography variant="h5" color="blue-gray" className="text-center">
                {product.title}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;


//-----------------------------------









// import React from "react";
// import i1 from "../assets/i1.jpeg";
// import i2 from "../assets/i2.jpeg";
// import i3 from "../assets/i3.jpeg";
// import i4 from "../assets/i4.jpeg";
// import i5 from "../assets/i5.jpeg";
// import i6 from "../assets/i6.jpeg";
// import i7 from "../assets/i7.jpeg";
// import i8 from "../assets/i8.jpeg";
// import i9 from "../assets/i9.jpeg";
// import i10 from "../assets/i10.jpeg";

// const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

// const PopularProducts = () => {
//   return (
//     <div className="bg-custom-green min-h-screen py-10 flex flex-col">
//       <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
//         Popular Products
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="border border-blue-500 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
//           >
//             <img
//               src={image}
//               alt={`Product ${index + 1}`}
//               className="w-[455px] h-[300px] object-contain"
//               style={{ display: 'block', margin: 'auto' }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;
