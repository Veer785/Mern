// import React from "react";

// const ProductDescription = () =>{

//     return (
//         <div className="max-padd-container mt-20">
//             <div className="flex gap-3 mb-4">
//                 <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">Description</button>
//                 {/* <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">Care Guide</button>
//                 <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">Size Guide</button>
//              */}
//             </div>
//             <div className="flex flex-col pb-16">
//                 <p className="text-sm">
//                 Peripheral artery disease (PAD) is a common condition in which narrowed arteries reduce blood flow to the arms or legs.

// This condition also may be called peripheral arterial disease.

// In PAD, the legs or arms — usually the legs — don't get enough blood flow to keep up with demand. This may cause leg pain when walking, called claudication, and other symptoms.
//                 </p>
//                 <p className="text-sm">

//                 Peripheral artery disease is usually a sign of a buildup of fatty deposits in the arteries, a condition called atherosclerosis.

// Treatment for PAD includes exercising, eating healthy foods, and not smoking or using tobacco.
//                     </p>
            
            
//             </div>
//             <div>vanish</div>
//         </div>
//     )
// }

// export default ProductDescription


//--------------------------------------




import React from "react";
import Use from "../assets/Use.jpg";
import Use1 from "../assets/Use1.jpg";

const ProductDescription = () => {
    return (
        <div className="max-padd-container mt-20">
            <div className="flex gap-3 mb-4">
                <button className="btn-dark rounded-sm !text-xs !py-[6px] w-36">
                    Description
                </button>
                {/* Uncomment to add more buttons
                <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">Care Guide</button>
                <button className="btn-dark-outline rounded-sm !text-xs !py-[6px] w-36">Size Guide</button>
                */}
            </div>
            <div className="flex flex-col pb-16">
                <h1 className="text-sm">
              High Quality Premium Grade 290mm With Anion Cheap Sanitary Napkin
                </h1>
                {/* <p className="text-sm">
                    Peripheral artery disease is usually a sign of a buildup of fatty deposits in the arteries, a condition called atherosclerosis. 
                    Treatment for PAD includes exercising, eating healthy foods, and not smoking or using tobacco.
                </p> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div className="relative w-full h-full">
                    {/* <img className="object-cover w-full h-full rounded-lg" src={Use} alt="Peripheral artery disease illustration" /> */}
                </div>
                <div className="relative w-full h-full">
                    {/* <img className="object-cover w-full h-full rounded-lg" src={Use1} alt="Peripheral artery disease illustration" /> */}
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default ProductDescription;
