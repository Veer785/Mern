// import React, { useEffect, useRef } from "react";

// const AboutUs = () => {
//   const sliderRef = useRef(null);
//   let slideIndex = 0;

//   // Function to auto-rotate the slider every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const slides = sliderRef.current.children;
//       slideIndex = (slideIndex + 1) % slides.length;
//       sliderRef.current.style.transform = `translateX(-${slideIndex * 100}%)`;
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100">
//       {/* About Us Section */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <img
//           src="https://lifelineindustries.com/wp-content/uploads/2023/12/about.png"
//           alt="About Us"
//           className="w-full h-75 object-contain rounded-t-lg"
//         />
//         <h2 className="text-3xl font-bold mt-6 mb-4">About Us</h2>
//         <p className="text-gray-700 mb-4">
//           Lifeline Care is an innovative manufacturer of cutting-edge period pads, incorporated in 2010 and based in Pune. 
//           We strive to change menstrual health with our innovative, eco-friendly solutions. We deal in biodegradable sanitary 
//           napkins that combine advanced technology with sustainable practices to ensure superior comfort and environmental responsibility.
//         </p>
//         <p className="text-gray-700">
//           Choose Lifeline Care for a reliable, eco-friendly, comfortable solution to your menstrual period. Together, let’s 
//           build a future in which women can embrace their monthly cycles with confidence and care.
//         </p>
//       </div>

//       {/* Connecting the People Section */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-center">
//         <h2 className="text-3xl font-bold mb-6 text-pink-600">Connecting the People</h2>
//         <div className="flex justify-center gap-8">
//           <div className="text-center bg-gray-50 rounded-full w-32 h-32 flex flex-col justify-center items-center">
//             <h3 className="text-2xl font-bold">21</h3>
//             <p className="text-gray-500">People Funded</p>
//           </div>
//           <div className="text-center bg-gray-50 rounded-full w-32 h-32 flex flex-col justify-center items-center">
//             <h3 className="text-2xl font-bold">2010</h3>
//             <p className="text-gray-500">Offices</p>
//           </div>
//           <div className="text-center bg-gray-50 rounded-full w-32 h-32 flex flex-col justify-center items-center">
//             <h3 className="text-2xl font-bold">22K</h3>
//             <p className="text-gray-500">Products Sold</p>
//           </div>
//           <div className="text-center bg-gray-50 rounded-full w-32 h-32 flex flex-col justify-center items-center">
//             <h3 className="text-2xl font-bold">127K</h3>
//             <p className="text-gray-500">Customers Served</p>
//           </div>
//         </div>
//       </div>

//       {/* Honors and Awards Section */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-3xl font-bold mb-6 text-pink-200">Honors and Awards</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="p-4 bg-gray-50 rounded-lg text-center">
//             <h3 className="text-xl font-bold text-blue-500">Winner</h3>
//             <p className="text-gray-500">Best Product 2020</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-lg text-center">
//             <h3 className="text-xl font-bold text-blue-500">Top 3</h3>
//             <p className="text-gray-500">Wellness Awards</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-lg text-center">
//             <h3 className="text-xl font-bold text-blue-500">Winner</h3>
//             <p className="text-gray-500">Best New Product</p>
//           </div>
//           <div className="p-4 bg-gray-50 rounded-lg text-center">
//             <h3 className="text-xl font-bold text-blue-500">Top 5</h3>
//             <p className="text-gray-500">Innovative Awards</p>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Lifeline Care Slider */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-3xl font-bold mb-6">Why Choose Lifeline Care?</h2>
//         <div className="overflow-hidden relative">
//           <div ref={sliderRef} className="flex transition-transform duration-500">
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Eco-friendly and biodegradable products for a sustainable future.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Advanced anion chip technology for improved menstrual health.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Comfortable and breathable pads with top-quality natural materials.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Committed to continuous innovation and product improvement.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Trusted by thousands of women across India for quality and comfort.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Focused on providing effective and eco-conscious period care.
//               </p>
//             </div>
//             <div className="w-full p-4">
//               <p className="text-gray-700">
//                 Driven by a mission to make a positive impact on women's health and the environment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;










import React from "react";
import certificate from "../assets/certificate.jpeg";
import Padslayers from "../assets/Padslayers.jpeg";
import Industry from "../assets/Industry.png"
import Im1 from "../assets/Im1.jpeg";
import Im2 from "../assets/Im2.jpeg";
import Im3 from "../assets/Im3.jpeg";
import Im4 from "../assets/Im4.jpeg";
import Im5 from "../assets/Im5.jpeg";
import Im6 from "../assets/Im6.jpeg";
import Im7 from "../assets/Im7.jpeg";
import Im8 from "../assets/Im8.jpeg";
import Im9 from "../assets/Im9.jpeg";
import Im10 from "../assets/Im10.jpeg";
import Im11 from "../assets/Im11.jpeg";
import Im12 from "../assets/Im12.jpeg";
import Im13 from "../assets/Im13.jpeg";
import Im14 from "../assets/Im14.jpeg";
import Im15 from "../assets/Im15.jpeg";
import Im16 from "../assets/Im16.jpeg";
import Im17 from "../assets/Im17.jpeg";
import Im18 from "../assets/Im18.jpeg";
import Im19 from "../assets/Im19.jpeg";
import Im20 from "../assets/Im20.jpeg";
import Im21 from "../assets/Im21.jpeg";
import Im22 from "../assets/Im22.jpeg";
import Im23 from "../assets/Im23.jpeg";
import Im24 from "../assets/Im24.jpeg";
import Im25 from "../assets/Im25.jpeg";
import Im26 from "../assets/Im26.jpeg";
import Im27 from "../assets/Im27.jpeg";
import Im28 from "../assets/Im28.jpeg";
import Im29 from "../assets/Im29.jpeg";
import Im30 from "../assets/Im30.jpeg";
import Im31 from "../assets/Im31.jpeg";
import Im32 from "../assets/Im32.jpeg";
import Im33 from "../assets/Im33.jpeg";
import Im34 from "../assets/Im34.jpeg";
import Im35 from "../assets/Im35.jpeg";
import Im36 from "../assets/Im36.jpeg";
import Im37 from "../assets/Im37.jpeg";
import Im38 from "../assets/Im38.jpeg";
import Im39 from "../assets/Im39.jpeg";
import Im40 from "../assets/Im40.jpeg";
import Im41 from "../assets/Im41.jpeg";
import Im42 from "../assets/Im42.jpeg";
import Im43 from "../assets/Im43.jpeg";
import Im44 from "../assets/Im44.jpeg";
import Im45 from "../assets/Im45.jpeg";
import Im46 from "../assets/Im46.jpeg";
import Im47 from "../assets/Im47.jpeg";
import Im48 from "../assets/Im48.jpeg";
import Im49 from "../assets/Im49.jpeg";
import Im50 from "../assets/Im50.jpeg";
import Im51 from "../assets/Im51.jpeg";
import Im52 from "../assets/Im52.jpeg";
import Im53 from "../assets/Im53.jpeg";
import Im54 from "../assets/Im54.jpeg";
import Im55 from "../assets/Im55.jpeg";
import Im56 from "../assets/Im56.jpeg";
import Im57 from "../assets/Im57.jpeg";
import Im58 from "../assets/Im58.jpeg";
import Im59 from "../assets/Im59.jpeg";




const AboutUs = () => {

  const images = [
    // Im1,
     Im2, Im3, Im4,
      // Im5, 
      Im6, 
    Im7, 
    // Im8, 
    // Im9, 
    // Im10,
    // Im11, Im12, Im13, Im14, Im15, Im16, Im17, Im18, Im19, Im20,
     Im21,
    //  Im22, Im23, Im24, Im25, Im26, Im27, 

    // Im28, Im29, Im30, Im31, Im32, Im33, Im34, Im35, Im36, Im37,
    // Im38, Im39, Im41, Im42, Im43, Im44, Im45, Im46, Im47, Im48,
    // Im49, Im50, Im51, Im52, Im53, Im54, Im55, Im56, Im57, Im58, Im59, certificate
];
  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto px-6">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
                  src={Industry}

              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-semibold text-pink-700 mb-6">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Sharda Pradeep Nitnaware, Thergaon, Pune-411033.
               {/* has filed a trademark for "Seven Happy Days," a device mark under Class 5. The logo features the words "Seven Happy Days" in red within a circle. The trademark covers products like sanitary tampons, pads, napkins, and baby diapers. The mark is proposed to be used in the category of sanitary goods. */}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
    Trainer: Sharda N<br />
    Menses Warrior - Menses Hygiene product awareness Trainer<br />
    ISO 9001:2015 CERTIFIED<br />
    OYSTER'S SEVEN HAPPY DAYS<br />
    Cotton Sanitary Napkin available in 2 Sizes: 290mm and 320mm<br />
    For XL size Pads using Box<br />
    For XXL size Pads using Eco Paper Pkt<br />
    Panty Liner available<br />
    Special 3 Days 320mm pkt Available
</p>
<ul className="text-gray-700 leading-relaxed mt-4 list-disc pl-5">
    <li>Plastic Free (except Supported 2%) and Harsh Chemical Free like Dioxin. For Wings stickness use Natural Gum</li>
    <li>Biodegradable - Safe for our Environment and Secure Cervix - Uterus too.</li>
    <li>High Absorption Capacity</li>
    <li>Itching and Rashesh Free.</li>
    <li>Eco-friendly and Active Oxygen skin breathable Sanitary Napkins with Japanese Technology's Anti-bacterial Strip for Harmon Balance</li>
    <li>WE ARE SUPPORTING EPA.</li>
    <li>Lead Shark training and development program.</li>
</ul>

          </div>
        </div>

        {/* Why Choose Lifeline Care Heading */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-semibold text-pink-700 mb-8">
          Why you Should Switch to Eco-Friendly Pads
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
  {[
    {
      title: "Why is regular pad harmful?",
      description:
        "A regular pack of sanitary napkin is estimated to be made of up to 90% plastic and could be equivalent to 5 plastic bags. This includes the “fabric” layer, adhesive, absorbent gels, and packaging. Each pad takes about 500-800 years to decompose if it isn’t made of eco-friendly materials. Currently, in India, we’ve over 1 billion used napkins being discarded every month. Most commercial pads bleach wood pulps to make them look like cotton. This bleaching leaves residue called Dioxin, which causes cancer, pelvic inflammatory diseases, and endometriosis. Side effects often include irritation or burns leading to yeast infections.",
    },
    {
      title: "Are there alternatives?",
      description:
        "Most of us don’t even know there are different types of sanitary pads. Fortunately, there are safe sanitary pads that combat the harmful effects commercial pads have on us and the environment. The solution is pure cotton sanitary napkin. It is that simple. Pads and liners that are made with organic cotton are free from plastics, latex, rayon, chemical additives, dyes, and chlorine bleaching. By switching to organic sanitary products from ones made of plastic or synthetic, your pads are compostable, biodegradable and thus, better for the environment.",
    },
    {
      title: "For yourself/ To Secure Our Cervix/ Uterus",
      description:
        "Regular pads disrupt your hormonal balance and cause mood swings due to the chemicals in them. Using period pads made from 100% cotton grown ensures safety; it doesn’t alter your hormones, is comfortable, and provides a rash-free experience. Unscented organic pads make for a safer option than chemically produced fragrance in commercial pads which often lead to bacterial infections.",
    },
    {
      title: "For the wildlife/ Ecosystem/ Sustainability",
      description:
        "Both flushing and dumping synthetic pads in garbage have harmful effects. Pads that are flushed end up in sewers and waterways, on the other hand, ones in our bins end up in landfills. Considering the harmful chemical and plastic present in commercial pads, it has a drastic impact on wildlife both in sea and land alike.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="relative bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300 ease-in-out h-full w-full"
    >
      <h3 className="text-2xl font-bold text-black-700 mb-4">{item.title}</h3>
      <p className="text-gray-700 text-justify">{item.description}</p>
      <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform transition-transform duration-500 ease-linear hover:rotate-180"></div>
    </div>
  ))}
</div>



<br></br>
<br></br>
        <div className="relative flex flex-col items-center text-center mb-8">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl font-black mb-4">
        Oyster's Seven Happy Days Pads Layers
        </h1>
        <p className="font-bold text-lg text-gray-700 mb-4">
          Made By Sharda Nitnaware
        </p>
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
  {/* Left Side: Community Initiatives */}
  <div className="md:w-1/2 mb-8 md:mb-0 p-6 rounded-lg shadow-lg bg-white">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
      Benefits 
      <br></br>
      Layers Demo Chart BY Sharda N
    </h2>
    <ul className="list-disc list-inside text-lg text-gray-600 ml-4 space-y-2">
      <li>Support for Zero Landfill</li>
      <li>Save Time</li>
      <li>Save Manpower</li>
      <li>Save Cotton Pads</li>
      <li>Save Money</li>
      <li>Easy Method</li>
    </ul>
  </div>

  {/* Right Side: Product Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src={Padslayers}
      alt="New Arrival Product"
      className="rounded-lg shadow-lg"
      style={{ height: "22rem", width: "25rem" }}
    />
  </div>
</div>

      
      {/* -------------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                   <img 
                        className="w-full h-56 object-cover rounded-lg transform transition duration-300 hover:scale-110"
                        src={img} 
                        alt={`Image ${index + 1}`} 
                    />
                </div>
            ))}
        </div>
      {/* ---------------- */}

        </div>
      
    </section>
  );
};

export default AboutUs;

