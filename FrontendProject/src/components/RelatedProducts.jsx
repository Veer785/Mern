// import React from "react";

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css'
// import { Link } from "react-router-dom";
// import { RiShoppingCart2Line } from "react-icons/ri";
// const RelatedProducts = () => {
//     return (
//         <div >
//             <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>
//             {/* container */}
//             <div className='mx-auto max-w-full'>
//               <Swiper
//               breakpoints={{
//                 600: {
//                     slidesPerView:2,
//                     spaceBetween:30,
//                 },
//                1024:{
//                    slidesPerView:3,
//                    spaceBetween:30,
//                 },
//               1200:{
//                 slidesPerView:4,
//                 spaceBetween:30,
//               },
//               }}
//               className='h-[188px] mt-5'
//               >
                
//                 {.map((item, i)=>(
//                     <SwiperSlide key={i}>
//                         <Link onClick={window.scrollTo(0, 0)} to={`/product/${item.id}`} className='flexCenter gap-x-5 bg-white backdrop-blur-md p-4 rounded-xl'>
//                         <img src={item.image} height={77} width={77} className='rounded-lg drop-shadow-xl'/>
//                         <div className='flex flex-col gap-y-1'>
//                             <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
//                             <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt culpa cumque non fugiat adipisci ex, fuga impedit a quasi eligendi, vel quisquam explicabo et. Nemo culpa quis totam esse magnam.</p>
//                           <div className='flexBetween'>
//                             <div className='flexBetween gap-x-2 medium-16'> 
//                                 <span>${item.new_price}.00</span>
//                                 <span className='line-through text-secondary'>${item.old_price}.00</span>
//                             </div>
//                             <RiShoppingCart2Line className='text-xl hover:text-secondary'/>
//                           </div>
//                         </div>
//                         </Link>
//                     </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//         </div>
//     )
// }

// export default RelatedProducts


// ----------------------------


// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Link } from "react-router-dom";
// import { RiShoppingCart2Line } from "react-icons/ri";

// const RelatedProducts = () => {
//     const [products, setProducts] = useState([]);

//     // Fetch the products when the component mounts
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/allproducts");
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>
//             {/* container */}
//             <div className='mx-auto max-w-full'>
//                 <Swiper
//                     breakpoints={{
//                         600: {
//                             slidesPerView: 2,
//                             spaceBetween: 30,
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                             spaceBetween: 30,
//                         },
//                         1200: {
//                             slidesPerView: 4,
//                             spaceBetween: 30,
//                         },
//                     }}
//                     className='h-[188px] mt-5'
//                 >
//                     {products.map((item, i) => (
//                         <SwiperSlide key={i}>
//                             <Link 
//                                 onClick={() => window.scrollTo(0, 0)} 
//                                 to={`/product/${item.id}`} 
//                                 className='flexCenter gap-x-5 bg-white backdrop-blur-md p-4 rounded-xl'
//                             >
//                                 <img 
//                                     src={item.image} 
//                                     alt={item.name}
//                                     height={77} 
//                                     width={77} 
//                                     className='rounded-lg drop-shadow-xl' 
//                                 />
//                                 <div className='flex flex-col gap-y-1'>
//                                     <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
//                                     <p className='line-clamp-1'>
//                                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//                                         Nesciunt culpa cumque non fugiat adipisci ex, fuga impedit a quasi eligendi.
//                                     </p>
//                                     <div className='flexBetween'>
//                                         <div className='flexBetween gap-x-2 medium-16'> 
//                                             <span>${item.new_price}.00</span>
//                                             <span className='line-through text-secondary'>${item.old_price}.00</span>
//                                         </div>
//                                         <RiShoppingCart2Line className='text-xl hover:text-secondary' />
//                                     </div>
//                                 </div>
//                             </Link>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default RelatedProducts;

// -------------------------------------------Autoply slider



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

const RelatedProducts = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch the products when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:4000/allproducts");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Automatically slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % products.length // Cycle forward
            );
        }, 5000); // 5000ms = 5 seconds

        // Clear interval on component unmount to avoid memory leaks
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>

            {/* Container for the slider */}
            <div className='mx-auto max-w-full overflow-hidden relative'>
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Translate still works based on index
                >
                    {products.map((item, i) => (
                        <div key={i} className="flex-shrink-0 p-4" style={{ width: '30%' }}> {/* Removed w- and set width inline */}
                            <Link 
                                onClick={() => window.scrollTo(0, 0)} 
                                to={`/product/${item.id}`} 
                                className='flexCenter gap-x-5 bg-white backdrop-blur-md p-4 rounded-xl'
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    style={{ height: '77px', width: '77px' }} // Set height and width inline
                                    // style={{ height: '277px', width: '377px' }} // Set height and width inline

                                    className='rounded-lg drop-shadow-xl' 
                                />
                                <div className='flex flex-col gap-y-1'>
                                    <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
                                    <p className='line-clamp-1'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Nesciunt culpa cumque non fugiat adipisci ex, fuga impedit a quasi eligendi.
                                    </p>
                                    <div className='flexBetween'>
                                        <div className='flexBetween gap-x-2 medium-16'> 
                                            <span>${item.new_price}.00</span>
                                            <span className='line-through text-secondary'>${item.old_price}.00</span>
                                        </div>
                                        <RiShoppingCart2Line className='text-xl hover:text-secondary' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
