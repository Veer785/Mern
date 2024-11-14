




// import React from "react";

// const ContactUs = () => {
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
//       style={{
//         backgroundImage:
//           "url('https://getwallpapers.com/wallpaper/full/c/e/4/808261-most-popular-pink-background-images-1920x1200-desktop.jpg')",
//       }}
//     >
//       <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
//           Contact Us
//         </h2>
//         <form className="space-y-6">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//               placeholder="Your Email"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//               placeholder="Your Phone Number"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="comments"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Comments
//             </label>
//             <textarea
//               id="comments"
//               rows="4"
//               className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//               placeholder="Your Comments"
//               required
//             ></textarea>
//           </div>
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full p-3 font-semibold text-white bg-pink-600 rounded-lg shadow-lg transition duration-300 hover:bg-pink-700 hover:shadow-pink-500/50 hover:shadow-[0px_0px_15px] focus:outline-none focus:ring-4 focus:ring-blue-400 animate-pulse"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



//----------------------------------------


// import React from "react";

// const ContactUs = () => {
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
//       style={{
//         backgroundImage:
//           "url('https://getwallpapers.com/wallpaper/full/c/e/4/808261-most-popular-pink-background-images-1920x1200-desktop.jpg')",
//       }}
//     >
//       <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-lg shadow-lg p-8 relative">
//         {/* <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
//           Contact Us
//         </h2>
//         <p className="text-sm text-gray-600 text-center mb-4">
//           Please do not submit sensitive information.
//         </p> */}
//         <iframe
//           src="https://docs.google.com/forms/d/e/1FAIpQLSeEro4t24aGM-MEIgSJ_-0YHyNi_96UkG94j8cc-2e8xb83vg/viewform?embedded=true"
//           width="100%"
//           height="824"
//           frameBorder="0"
//           marginHeight="0"
//           marginWidth="0"
//           className="rounded-lg"
//           sandbox="allow-same-origin allow-scripts allow-forms"
//         >
//           Loading…
//         </iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


//------------------------------




// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () =>{

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_2zujph2', 'template_i83hbvk', form.current, {
//         publicKey: 'I4tVBvyV_37vyYA5E',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return(
//     <div>
//        <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   )
// }

// export default ContactUs


//------------------------------------




// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_2zujph2',
//         'template_i83hbvk',
//         form.current,
//         'I4tVBvyV_37vyYA5E' // public key goes here as the 4th parameter
//       )
//       .then(
//         () => {
//           console.log('SUCCESS!');
//           form.current.reset(); // Clear the form after successful submission
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         }
//       );
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
//       style={{
//         backgroundImage:
//           "url('https://getwallpapers.com/wallpaper/full/c/e/4/808261-most-popular-pink-background-images-1920x1200-desktop.jpg')",
//       }}
//     >
//       <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
//           Contact Us
//         </h2>
//         <form className="space-y-6" ref={form} onSubmit={sendEmail}>
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//             type="text"
//             name="from_name"
//           />

//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//             type="email"
//             name="from_email"
//           />

//           <label className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
//             name="message"
//           />

//           <div className="text-center">
//             <input
//               type="submit"
//               value="Send"
//               className="w-full p-3 font-semibold text-white bg-pink-600 rounded-lg shadow-lg transition duration-300 hover:bg-pink-700 hover:shadow-pink-500/50 hover:shadow-[0px_0px_15px] focus:outline-none focus:ring-4 focus:ring-blue-400 animate-pulse"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;




//---------------------------------





import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateForm = () => {
    const errors = {};
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) errors.name = 'Name is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!message) errors.message = 'Message is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          'service_9tbiqmk',  // Your service ID
          'template_ilpgrvl',  // Your template ID
          form.current,        // The form reference
          'C9Yz-goepSNg2XMzV'  // Your public key
        )
        .then(
          () => {
            console.log('Email sent successfully');
            form.current.reset();
            setErrors({});  // Clear errors after successful submission
          },
          (error) => {
            console.log('Email sending failed:', error.text);
          }
        );
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://getwallpapers.com/wallpaper/full/c/e/4/808261-most-popular-pink-background-images-1920x1200-desktop.jpg')",
      }}
    >
      <div className="w-full max-w-lg bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-700">
          Contact Us
        </h2>
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            type="text"
            name="from_name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            type="email"
            name="from_email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            name="message"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <div className="text-center">
            <input
              type="submit"
              value="Send"
              className="w-full p-3 font-semibold text-white bg-pink-600 rounded-lg shadow-lg transition duration-300 hover:bg-pink-700 hover:shadow-pink-500/50 hover:shadow-[0px_0px_15px] focus:outline-none focus:ring-4 focus:ring-blue-400 animate-pulse"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
