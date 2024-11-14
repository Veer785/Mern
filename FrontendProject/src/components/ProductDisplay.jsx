// import React, { useContext } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";

// const ProductDisplay = (props) => {
    
//     const {product} = props;
//     const {addToCart} = useContext(ShopContext)
//         console.log("product",product)
//     return (
//        <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//         {/* left side */}
//         <div className="flex gap-x-2 xl:flex-1 py-5">
//             <div className="flex flex-col gap-[7px] flex-wrap">
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//             </div>
//             <div className="max-h-[355px] w-auto flex">
//                 <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
//             </div>
//         </div>
//         {/* right side */}
//         <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//             <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//             <div className="flex items-start gap-x-2 medium-16">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <p>(223)</p>
//             </div>
//             <div className="flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4">
//                 <div> ${product.new_price}.00</div>
//                  <div className="bold-20 sm:bold-28 line-through text-secondary">${product.old_price}.00</div>
//             </div>
//             <div>
//                 {/* product colors and icons buttons */}
//                 <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
//                     <div>
//                         <h4 className="bold-16">Select Color:</h4>
//                         <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryRed"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryYellow"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryBlue"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>

//                         </div>
//                     </div>
//                     <div>
//                         <h4 className="bold-16">Select Size:</h4>
//                         <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">S</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">M</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">L</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">XL</div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-3 mb-8 max-w-[555px]">
//                     <button onClick={()=>{addToCart(product.id)}} className="btn-dark rounded-md">Add to cart</button>
//                     <button className="btn-secondary rounded-md !px-4"><FaHeart /></button>

//                 </div>
//                 <p><span className="medium-16 text-tertiary">Category :</span> Women | Jacket | Winter</p>
//                 <p><span className="medium-16 text-tertiary">Tags :</span> Modern | New Arrivals | Winter</p>

//             </div>
//         </div>
//        </section>
//     )
// }

// export default ProductDisplay


// // --------------------------------------


// import React, { useContext } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";

// const ProductDisplay = (props) => {
    
//     const {product} = props;
//     const {addToCart} = useContext(ShopContext)
//         console.log("product",product)
//     return (
//        <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//         {/* left side */}
//         <div className="flex gap-x-2 xl:flex-1 py-5">
//             <div className="flex flex-col gap-[7px] flex-wrap">
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//                 <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10"/>
//             </div>
//             <div className="max-h-[355px] w-auto flex">
//                 <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
//             </div>
//         </div>
//         {/* right side */}
//         <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//             <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//             <div className="flex items-start gap-x-2 medium-16">
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <FaStar />
//                 <p>(223)</p>
//             </div>
//             <div className="flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4">
//                 <div> MRP {product.new_price}-/</div>
//                  {/* <div className="bold-20 sm:bold-28 line-through text-secondary">${product.old_price}.00</div> */}
//             </div>
//             <div>
//                 {/* product colors and icons buttons */}
//                 <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
//                     <div>
//                         <h4 className="bold-16">Green Cheap Color:</h4>
//                         <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>

//                         </div>
//                     </div>
//                     {/* <div>
//                         <h4 className="bold-16">Select Size:</h4>
//                         <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">S</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">M</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">L</div>
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">XL</div>

//                         </div>
//                     </div> */}
//                 </div>
//                 <div className="flex gap-3 mb-8 max-w-[555px]">
//                     <button onClick={()=>{addToCart(product.id)}} className="btn-dark rounded-md">Add to cart</button>
//                     <button className="btn-secondary rounded-md !px-4"><FaHeart /></button>

//                 </div>
//                 <p><span className="medium-16 text-tertiary">Oyester's :</span>Seven Happy Days </p>
//                 <p><span className="medium-16 text-tertiary">Products</span> </p>

//             </div>
//         </div>
//        </section>
//     )
// }

// export default ProductDisplay



//-------------------------------------




// import React, { useContext, useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);
//     const [notification, setNotification] = useState(false);

//     const handleAddToCart = (id) => {
//         addToCart(id);
//         setNotification(true); // Show the notification
//         setTimeout(() => {
//             setNotification(false); // Hide the notification after 3 seconds
//         }, 3000);
//     };

//     return (
//         <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
          
          
//             {/* left side */}
//             <div className="flex gap-x-2 xl:flex-1 py-5">
//                 <div className="flex flex-col gap-[7px] flex-wrap">
//                     <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10" />
//                     <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10" />
//                     <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10" />
//                     <img src={product.image} alt="productImg" className="max-h-[84px] rounded-lg bg-gray-10" />
//                 </div>
//                 <div className="max-h-[355px] w-auto flex">
//                     <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10" />
//                 </div>
//             </div>
             



             
//             {/* right side */}
//             <div className="flex-col flex xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
                
//                 <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//                 <div className="flex items-start gap-x-2 medium-16">
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
                    
                   
//                 </div>
//                 <div className="flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4">
//                     <div>MRP {product.new_price}-/</div>
//                 </div>
//                 <div>
//                     {/* product colors and icons buttons */}
//                     <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
//                         <div>
//                             <h4 className="bold-16">Green Cheap Color:</h4>
//                             <div className="flex gap-3 my-3">
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-full bg-secondaryGreen"></div>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="flex gap-3 mb-8 max-w-[555px]">
//                         <button onClick={() => handleAddToCart(product.id)} className="btn-dark rounded-md">Add Number Of Quantity</button>
//                         <button className="btn-secondary rounded-md !px-4"><FaHeart /></button>
//                     </div>
//                     <p><span className="medium-16 text-tertiary">Oyester's :</span> Seven Happy Days</p>
//                     <p><span className="medium-16 text-tertiary">Products</span></p>
//                 </div>
//             </div>
//             {/* Notification Section */}
//             {notification && (
//                 <div className="flex items-center mt-4">
//                     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//                         </svg>
//                         <span className="sr-only">Check icon</span>
//                     </div>
//                     <div className="ms-3 text-sm font-normal">Item added successfully.</div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default ProductDisplay;


//-----------------------------------




// import React, { useContext } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);
    
//     return (
//         <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//             {/* Left Side */}
//             <div className="flex gap-x-2 xl:flex-1 py-5">
//                 <div className="flex flex-col gap-[7px]">
//                     {Array(4).fill().map((_, index) => (
//                         <img 
//                             key={index} 
//                             src={product.image} 
//                             alt={`productImg${index}`} 
//                             //  className="max-h-[69px] rounded-lg bg-gray-10"
//                             className="h-[122px ] w-[422px] rounded-lg bg-gray-10"

//                             />
//                     ))}
//                 </div>
//                 <div className="max-h-[355px] w-auto flex">
//                     <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
//                 </div>
//             </div>
            
//             {/* Right Side */}
//             <div className="flex flex-col xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//                 <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//                 <div className="flex items-start gap-x-2 text-base">
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                     <FaStar />
//                 </div>

//                 <div className="flex items-baseline gap-x-6 font-bold text-lg mt-4">
                    
//                 </div>
                
//                 <div className="flex items-baseline gap-x-6 font-bold text-lg mt-4">
//                     <div> MRP {product.new_price}-/</div>
//                 </div>
                
//                 <div className="my-6">
//                     {/* Product Colors and Size Options */}
//                     <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3">
//                         <div>
//                             <h4 className="font-semibold">Green Cheap Color:</h4>
//                             <div className="flex gap-3 my-3">
//                                 {Array(3).fill().map((_, index) => (
//                                     <div 
//                                         key={index} 
//                                         className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-secondaryGreen"
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold">Size:</h4>
//                             <div className="flex gap-3 my-3">
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md">XL</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-3 mb-8 max-w-[555px]">
//                         <button 
//                             onClick={() => addToCart(product.id)} 
//                             className="btn-dark rounded-md px-6 py-2 hover:bg-darkHover">
//                             Add to cart
//                         </button>
//                         <button className="btn-secondary rounded-md px-4 hover:bg-secondaryHover">
//                             <FaHeart />
//                         </button>
//                     </div>

//                     {/* Product Details */}
//                     <p><span className="font-medium text-tertiary">Oyester's:</span> Seven Happy Days</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductDisplay;



//---------------------------------------



// import React, { useContext } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);

//     const handleAddToCart = () => {
//         addToCart(product.id);
//         toast.success("Added to cart successfully!");
//     };

//     return (
//         <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//             {/* Toast Container */}
//             <ToastContainer />

//             {/* Left Side */}
//             <div className="flex gap-x-2 xl:flex-1 py-5">
//                 <div className="flex flex-col gap-[7px]">
//                     {Array(4).fill().map((_, index) => (
//                         <img 
//                             key={index} 
//                             src={product.image} 
//                             alt={`productImg${index}`} 
//                             className="h-[90px] w-[352px] rounded-lg bg-gray-10"
//                         />
//                     ))}
//                 </div>
//                 <div className="max-h-[355px] w-auto flex">
//                     <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
//                 </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex flex-col xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//                 <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//                 <div className="flex items-start gap-x-2 text-base">
//                     {Array(5).fill().map((_, i) => <FaStar key={i} />)}
//                 </div>

//                 <div className="flex items-baseline gap-x-6 font-bold text-lg mt-4">
//                     <div>MRP {product.new_price}-/</div>
//                 </div>

//                 <div className="my-6">
//                     {/* Product Colors and Size Options */}
//                     <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3">
//                         <div>
//                             <h4 className="font-semibold">Color:</h4>
//                             <div className="flex gap-3 my-3">
//                                 {Array(3).fill().map((_, index) => (
//                                     <div 
//                                         key={index} 
//                                         className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-secondaryGreen"
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold">Size:</h4>
//                             <div className="flex gap-3 my-3">
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md">XL</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-3 mb-8 max-w-[555px]">
//                         <button 
//                             onClick={handleAddToCart} 
//                             className="btn-dark rounded-md px-6 py-2 hover:bg-darkHover">
//                             Add to cart
//                         </button>
//                         <button className="btn-secondary rounded-md px-4 hover:bg-secondaryHover">
//                             <FaHeart />
//                         </button>
//                     </div>

//                     {/* Product Details */}
//                     <p><span className="font-medium text-tertiary">Oyester's:</span> Seven Happy Days</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductDisplay;


//-------------------------------------------



// import React, { useContext } from "react";
// import { FaHeart, FaStar } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);

//     const handleAddToCart = () => {
//         addToCart(product.id);
//         toast.success("Added to cart successfully!");
//     };

//     return (
//         <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
//             {/* Toast Container */}
//             <ToastContainer />

//             {/* Left Side */}
//             <div className="flex gap-x-2 xl:flex-1 py-5">
//                 <div className="flex flex-col gap-[7px]">
//                     {Array(4).fill().map((_, index) => (
//                         <img 
//                             key={index} 
//                             src={product.image} 
//                             alt={`productImg${index}`} 
//                             className="h-[90px] w-[352px] rounded-lg bg-gray-10"
//                         />
//                     ))}
//                 </div>
//                 <div className="max-h-[355px] w-auto flex">
//                     <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
//                 </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex flex-col xl:flex-[1.5] bg-white px-6 py-2 rounded-xl">
//                 <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
//                 <div className="flex items-start gap-x-2 text-base">
//                     {Array(5).fill().map((_, i) => <FaStar key={i} />)}
//                 </div>

//                 <div className="flex items-baseline gap-x-6 font-bold text-lg mt-4">
//                     <div>MRP {product.new_price}-/</div>
//                 </div>

//                 <div className="my-6">
//                     {/* Product Colors and Size Options */}
//                     <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3">
//                         <div>
//                             {/* <h4 className="font-semibold">Color:</h4> */}
//                             <div className="flex gap-3 my-3">
//                                 {Array(3).fill().map((_, index) => (
//                                     <div 
//                                         key={index} 
//                                         // className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-full bg-secondaryGreen"
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold">Size:</h4>
//                             <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md">XL</div>
//                                 <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer rounded-md">XXL</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex gap-3 mb-8 max-w-[555px]">
//                         <button 
//                             onClick={handleAddToCart} 
//                             className="btn-dark rounded-md px-6 py-2 hover:bg-darkHover">
//                             Add to cart
//                         </button>
//                         <button className="btn-secondary rounded-md px-4 hover:bg-secondaryHover">
//                             <FaHeart />
//                         </button>
//                     </div>

//                     {/* Product Details */}
//                     <p><span className="font-medium text-tertiary">Oyester's:</span> Seven Happy Days</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductDisplay;



//----------------------------------------------




import React, { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(product.id);
        toast.success("Added to cart successfully!");
    };

    return (
        <section className="max-padd-container flex flex-col gap-8 xl:flex-row bg-primary py-4">
            {/* Toast Container */}
            <ToastContainer />

            {/* Left Side */}
            <div className="flex gap-x-2 xl:flex-1 py-5">
                <div className="flex flex-col gap-[7px]">
                    {Array(4).fill().map((_, index) => (
                        <img 
                            key={index} 
                            src={product.image} 
                            alt={`productImg${index}`} 
                            className="h-[90px] w-[352px] rounded-lg bg-gray-10"
                        />
                    ))}
                </div>
                <div className="max-h-[355px] w-auto flex">
                    <img src={product.image} alt="bigImg" className="rounded-xl bg-gray-10"/>
                </div>
            </div>

           {/* Right Side */}
           <div className="flex flex-col xl:flex-[1.5] bg-white px-6 py-4 rounded-xl">
                {/* Product Header and Rating */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-gray-800 sm:line-clamp-1">{product.name}</h3>  
                    <div className="flex items-center gap-1 text-lg text-yellow-500">
                        {Array(5).fill().map((_, i) => 
                            <FaStar key={i} />  
                        )}
                    </div>
                    <div className="font-bold text-xl text-gray-700 mt-2">MRP {product.new_price} /-   </div>
                    <div className="font-bold text-xl text-gray-700 mt-2">Count - {product.old_price}    </div>

                </div>

                {/* Product Main Section */}
                <div className="flex flex-col sm:flex-row gap-6 mt-6">
                    {/* Product Attributes */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-700">Product Details:</h4>
                        <ul className="text-base text-gray-600 pl-4 list-disc space-y-1 mt-2">
                        {/* <li><span className="font-medium">Packaging Size:</span> 155MM</li>
                            <li><span className="font-medium">Length:</span> 155MM</li> */}
                            <li><span className="font-medium">Top Material:</span> Cotton</li>
                            <li><span className="font-medium">Packing Type:</span> Trifold</li>
                            <li><span className="font-medium">Type:</span> Ultra thin pad</li>
                            <li><span className="font-medium">Third Party Manufacturing:</span> Yes</li>
                            <li><span className="font-medium">Top Fabric:</span> Cotton</li>
                            <li><span className="font-medium">Scented:</span>No</li>
                            <li><span className="font-medium">It is disposable:</span> Yes</li>

                        </ul>
                    </div>

                    {/* Size Options */}
                    {/* <div className="flex-1">
                        <h4 className="text-lg font-semibold">Size:</h4>
                        <div className="flex gap-3 my-3">
                            <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer ">M </div>
                            <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer ">155MM</div>
                        </div>
                    </div> */}
                </div>
                    <br></br>
                    {/* Buttons */}
                    <div className="flex gap-3 mb-8 max-w-[555px]">
                        <button 
                            onClick={handleAddToCart} 
                            className="btn-dark rounded-md px-6 py-2 hover:bg-darkHover">
                            Add to cart
                        </button>
                        <button className="btn-secondary rounded-md px-4 hover:bg-secondaryHover">
                            {/* <FaHeart /> */}Minimun Order Quantity:-10 Boxes (1kg) 
                            
                        </button>
                    </div>

                    {/* Product Details */}
                    {/* <p><span className="font-medium text-tertiary">Oyester's:</span> Seven Happy Days</p> */}
                </div>
            
        </section>
    );
};

export default ProductDisplay;


