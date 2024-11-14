// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Item = ({id,name,image,old_price,new_price}) =>{

//     return (
//         <Link onClick={window.scrollTo(0, 0)} to={`/product/${id}`}className='bg-white p-4 rounded-xl relative'>
//             <div className="flexCenter">
//                 <img src={image} alt="" height={370} width={570} className="rounded-lg drop-shadow-xl absolute bottom-144"/>
//             </div>
//             <div className="flex flex-col gap-y-3 pt-24">
//                 <h4 className="line-clamp-2 medium-16">{name}</h4>
//           <div className="flexBetween">
//             <div className="flex gap-x-4 medium-16">
//                 <span>${new_price}.00</span>
//                 <span className="line-through text-secondary">${old_price}.00</span>
//             </div>
//             <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary"/>
//           </div>
//             </div>
//         </Link>
//     )
// }

// export default Item



//-------------------------------------




// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <Link
//       onClick={() => window.scrollTo(0, 0)}
//       to={`/product/${id}`}
//       className="bg-white p-4 rounded-xl relative transition-transform transform hover:scale-105 shadow-lg"
//     >
//       <div className="relative h-96 w-full overflow-hidden rounded-xl">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full object-cover rounded-lg"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
//       </div>
//       <div className="flex flex-col gap-y-3 pt-6">
//         <h4 className="line-clamp-2 font-semibold text-lg text-gray-800">{name}</h4>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-x-4 text-lg">
//             <span className="text-green-500">${new_price}.00</span>
//             <span className="line-through text-gray-400">${old_price}.00</span>
//           </div>
//           <button
//             className="p-2 bg-primary rounded-full text-white bg-secondary transition-colors"
//             aria-label="Add to Cart"
//           >
//             <RiShoppingCart2Line className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Item;



//----------------------------------




// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import Use from "../assets/Use.jpg";
// import Use1 from "../assets/Use1.jpg";

// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <Link
//       onClick={() => window.scrollTo(0, 0)}
//       to={`/product/${id}`}
//       className="bg-white p-4 rounded-xl relative transition-transform transform hover:scale-105 shadow-lg"
//     >
//       <div className="relative h-96 w-full overflow-hidden rounded-xl">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full object-cover rounded-lg"
//         />
//         <div className="absolute inset-0  rounded-lg"></div>
//       </div>
//       <div className="flex flex-col gap-y-3 pt-6">
//         <h4 className="line-clamp-2 font-semibold text-lg text-gray-800">{name}</h4>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-x-4 text-lg">
//             <span className="text-green-500">MRP-/ {new_price}.00</span>
//           </div>
//           <button
//             className="p-2 bg-primary rounded-full text-white bg-secondary transition-colors"
//             aria-label="Add to Cart"
//           >
//             <RiShoppingCart2Line className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Item;

//-----------------------------



// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <Link
//       onClick={() => window.scrollTo(0, 0)}
//       to={`/product/${id}`}
//       className="bg-white p-4 rounded-xl relative transition-transform transform hover:scale-105 shadow-lg"
   
//    >
//       {/* Product Image */}
//       <div className="relative h-92 w-full overflow-hidden rounded-xl">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full object-cover rounded-xl"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col gap-y-3 pt-4" >
//         <h4 className="line-clamp-2 font-semibold text-lg text-gray-800">
//           {name}
//         </h4>

//         <div className="flex justify-between items-center">
//           {/* Price */}
//           <div className="flex gap-x-2 items-center">
           
//             <span className="text-green-600 font-bold text-lg">
//               MRP {new_price}/-
//             </span>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             className="p-2 bg-secondary rounded-full text-white transition-colors hover:bg-primary"
//             aria-label="Add to Cart"
//           >
//             <RiShoppingCart2Line className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Item;



//-------------------------------------



// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";


// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <Link
//       onClick={() => window.scrollTo(0, 0)}
//       to={`/product/${id}`}
//       className="bg-white p-4 rounded-xl relative transition-transform transform hover:scale-105 shadow-lg"
//     >
//       <div className="relative h-96 w-full overflow-hidden rounded-xl">
//         <img
//           src={image}
//           alt={name}
//           className="h-full w-full  rounded-lg"
//         />
//         <div className="absolute inset-0  rounded-lg"></div>
//       </div>
//       <div className="flex flex-col gap-y-3 pt-6">
//         <h4 className="line-clamp-2 font-semibold text-lg text-gray-800">{name}</h4>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-x-4 text-lg">
//             <span className="text-green-500">MRP-/ {new_price}.00</span>
//           </div>
//           <button
//             className="p-2 bg-primary rounded-full text-white bg-secondary transition-colors"
//             aria-label="Add to Cart"
//           >
//             <RiShoppingCart2Line className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Item;


//----------------------------




// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <section
//     style={{
//       width: '655px',
//       height: '455px',
//       padding: '16px',
//       borderRadius: '16px',
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//       backgroundColor: 'white',
//     }}
//     className="border flex items-center justify-center text-center"
//     >
//       <Link
//         onClick={() => window.scrollTo(0, 0)}
//         to={`/product/${id}`}
//         // className="flex flex-col gap-4"
//         className=" flex-col items-center gap-4"

//       >
//         <img
//           src={image}
//           alt={name}
//           className="rounded-xl w-full"
//           style={{
//             height: '300px',
//             backgroundColor: '#f3f4f6',
//           }}
//         />
        
//         <div className="flex flex-col gap-2">
//           <h4
//             className="line-clamp-2 font-semibold text-gray-800"
//             style={{
//               fontSize: '18px',
//               color: '#333',
//               marginTop: '8px',
//             }}
//           >
//             {name}
//           </h4>
//           <div className="flex justify-between items-center mt-2">
//             <div className="flex flex-col">
//               <span
//                 className="line-through"
//                 style={{
//                   fontSize: '14px',
//                   color: '#9ca3af',
//                 }}
//               >
//                 ₹{old_price}.00
//               </span>
//               <span
//                 style={{
//                   fontSize: '20px',
//                   fontWeight: '600',
//                   color: '#10b981',
//                 }}
//               >
//                 MRP- ₹{new_price}.00
//               </span>
//             </div>
//             <button
//               style={{
//                 padding: '8px',
//                 backgroundColor: '#6366f1',
//                 borderRadius: '50%',
//                 color: 'white',
//                 transition: 'background-color 0.3s',
//               }}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#4f46e5'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}
//               aria-label="Add to Cart"
//             >
//               <RiShoppingCart2Line style={{ height: '24px', width: '24px' }} />
//             </button>
//           </div>
//         </div>
//       </Link>
//     </section>
//   );
// };

// export default Item;



//--------------------------------------



// import React from "react";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Item = ({ id, name, image, old_price, new_price }) => {
//   return (
//     <Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`} className="bg-white p-4 rounded-xl relative">
//       <div className="flex justify-center">
//         <img
//           src={image}
//           alt={name}
//           width={455}
//           height={300}
//           className="rounded-lg drop-shadow-xl mb-4"
//         />
//       </div>
//       <div className="flex flex-col gap-3 pt-4">
//         <h4 className="text-lg font-semibold line-clamp-2">{name}</h4>
//         <div className="flex justify-between items-center">
//           <div className="flex gap-4 text-lg">
//             <span>${new_price}.00</span>
//             <span className="line-through text-gray-400">${old_price}.00</span>
//           </div>
//           <RiShoppingCart2Line className="p-2 h-10 w-10 text-gray-600 hover:text-blue-500" />
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Item;



//--------------------------------------------




import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Import star icon

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <section
    style={{
      width: '655px',
      height: '455px',
      padding: '16px',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    }}
    className="border flex items-center justify-center text-center"
    >
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={`/product/${id}`}
        // className="flex flex-col gap-4"
        className=" flex-col items-center gap-4"

      >
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full"
          style={{
            height: '300px',
            backgroundColor: '#f3f4f6',
          }}
        />
        
        <div className="flex flex-col gap-2">
          <h4
            className="line-clamp-2 font-semibold text-gray-800"
            style={{
              fontSize: '18px',
              color: '#333',
              marginTop: '8px',
            }}
          >
            {name}
          </h4>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="#fbbf24" size={20} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-col">
              <span
                className="line-through"
                style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                }}
              >
                {/* ₹{old_price}.00 */}
              </span>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#10b981',
                }}
              >
                MRP- ₹{new_price}.00
              </span>
            </div>
            <button
              style={{
                padding: '8px',
                backgroundColor: '#6366f1',
                borderRadius: '50%',
                color: 'white',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#4f46e5')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#6366f1')}
              aria-label="Add to Cart"
            >
              <RiShoppingCart2Line style={{ height: '24px', width: '24px' }} />
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Item;



//----------------------------------------------

