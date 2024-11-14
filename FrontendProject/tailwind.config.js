// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
      
//       colors: {
//         primary: "#f8f7f4",
//         secondary: "#fe784f",
//         tertiary: "#222222",
//         secondaryRed: "#f42c37",
//         secondaryYellow: "#fdc62e",
//         secondaryGreen: "#2dcc6f",
//         secondaryBlue: "#1376f4",
//         secondaryWhite: "#eeeeee",
//         'light-blue': '#add8e6',
//         gray: {
//           10: "#EEEEEE",
//           20: "#A2A2A2",
//           30: "#7B7B7B",
//           50: "#585858",
//           90: "#141414",
//         },
//       },
//       screens: {
//         xs: "400px",
//         "3xl": "1680px",
//         "4xl": "2200px",
//       },
//       backgroundImage: {
//         hero: "url(/src/assets/bg.png)",
//         // banneroffer: "url(/src/assets/banneroffer.png)",
//         banneroffer: "url(/src/assets/Layers.jpg)",

//       },
//     },
//   },
//   plugins: [],
// };



//----------------------------------





// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         rotateGradient: {
//           '0%': { transform: 'rotate(0deg)', 'background-color': 'rgb(0, 183, 255)' },
//           '50%': { transform: 'rotate(180deg)', 'background-color': 'rgb(255, 48, 255)' },
//           '100%': { transform: 'rotate(360deg)', 'background-color': 'rgb(0, 183, 255)' },
//         },
//       },
//       animation: {
//         rotateGradient: 'rotateGradient 4s linear infinite',
//       },
//       fontFamily: {
//         playfair: ['Playfair Display', 'serif'],
//         poppins: ['Poppins', 'sans-serif'],
//       },
//       colors: {
//         teal: {
//           300: '#81E6D9', // Light teal
//         },
//         cyan: {
//           400: '#4FD1C5', // Cyan
//           200: '#B2E1E1', // Light cyan for borders
//         },
//         primary: "#f8f7f4",
//         secondary: "#fe784f",
//         tertiary: "#222222",
//         secondaryRed: "#f42c37",
//         secondaryYellow: "#fdc62e",
//         secondaryGreen: "#2dcc6f",
//         secondaryBlue: "#1376f4",
//         secondaryWhite: "#eeeeee",
//         'custom-green': '#84E1BC',
//         'light-blue': {
//           300: '#A0D3E8', // Light Blue
//           500: '#007BFF', // Medium Light Blue
//         },
//         gray: {
//           10: "#EEEEEE",
//           20: "#A2A2A2",
//           30: "#7B7B7B",
//           50: "#585858",
//           90: "#141414",
//         },
//       },
//       fontSize: {
//         '12': '3rem', // Adjust this value as per your design
//         '54': '3.375rem', // For heading
//         '34': '2.125rem', // For green technology text
//         '18': '1.125rem', // For content text
//       },
//       height: {
//         '75': '75vh', // Custom height, 75% of the viewport height
//       },
//       width: {
//         '75': '75vw', // Custom width, 70% of the viewport width
//       },
//       screens: {
//         xs: "400px",
//         "3xl": "1680px",
//         "4xl": "2200px",
//       },
//       backgroundImage: {
//         hero: "url(/src/assets/bg.png)",
//         banneroffer: "url(/src/assets/Layers.jpg)",
//       },
//     },
//   },
//   plugins: [],
// };


//------------------------------


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your templates
//   theme: {
//     extend: {
     
//       // Keyframes for animations
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         animation: {
//           fade: 'fadeIn 0.5s ease-in-out',
//         },
//         rotateGradient: {
//           '0%': { 
//             transform: 'rotate(0deg)', 
//             'background-color': 'rgb(0, 183, 255)' 
//           },
//           '50%': { 
//             transform: 'rotate(180deg)', 
//             'background-color': 'rgb(255, 48, 255)' 
//           },
//           '100%': { 
//             transform: 'rotate(360deg)', 
//             'background-color': 'rgb(0, 183, 255)' 
//           },
//         },
//       },
//       // Custom animations
//       animation: {
//         rotateGradient: 'rotateGradient 4s linear infinite',
//       },
//       // Custom fonts
//       fontFamily: {
//         playfair: ['Playfair Display', 'serif'],
//         poppins: ['Poppins', 'sans-serif'],
//       },
//       // Custom colors
//       colors: {
//         teal: {
//           300: '#81E6D9', // Light teal
//         },
//         cyan: {
//           400: '#4FD1C5', // Cyan
//           200: '#B2E1E1', // Light cyan for borders
//         },
//         primary: "#f8f7f4", // Primary color
//         secondary: "#fe784f", // Secondary color
//         tertiary: "#222222", // Tertiary color
//         secondaryRed: "#f42c37",
//         secondaryYellow: "#fdc62e",
//         secondaryGreen: "#2dcc6f",
//         secondaryBlue: "#1376f4",
//         secondaryWhite: "#eeeeee",
//         'custom-green': '#84E1BC',
//         'light-blue': {
//           300: '#A0D3E8', // Light Blue
//           500: '#007BFF', // Medium Light Blue
//         },
//         gray: {
//           10: "#EEEEEE",  // Light Gray
//           20: "#A2A2A2",  // Medium Gray
//           30: "#7B7B7B",  // Darker Gray
//           50: "#585858",  // Even Darker Gray
//           90: "#141414",  // Almost Black
//         },
//       },
//       // Custom font sizes
//       fontSize: {
//         '12': '3rem',      // Large text
//         '54': '3.375rem',  // For heading
//         '34': '2.125rem',  // For green technology text
//         '18': '1.125rem',  // For content text
//       },
//       // Custom heights
//       height: {
//         '75': '75vh',      // 75% of viewport height
//       },
//       // Custom widths
//       width: {
//         '75': '75vw',      // 75% of viewport width
//       },
//       // Custom breakpoints for responsiveness
//       screens: {
//         xs: "400px",       // Extra small screens
//         "3xl": "1680px",   // Large screens
//         "4xl": "2200px",   // Extra large screens
//       },
//       // Custom background images
//       backgroundImage: {
//         hero: "url(/src/assets/bg.png)",        // Hero section background
//         banneroffer: "url(/src/assets/Layers.jpg)", // Banner offer background
//       },
//     },
//   },
//   plugins: [], // Add Tailwind CSS plugins if needed
// };



//-----------------------------------


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to your templates
  theme: {
    extend: {
      // Keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotateGradient: {
          '0%': { 
            transform: 'rotate(0deg)', 
            'background-color': 'rgb(0, 183, 255)' 
          },
          '50%': { 
            transform: 'rotate(180deg)', 
            'background-color': 'rgb(255, 48, 255)' 
          },
          '100%': { 
            transform: 'rotate(360deg)', 
            'background-color': 'rgb(0, 183, 255)' 
          },
        },
      },
      // Custom animations
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
        rotateGradient: 'rotateGradient 4s linear infinite',
      },
      // Custom fonts
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      // Custom colors
      colors: {
        teal: {
          300: '#81E6D9', // Light teal
        },
        cyan: {
          400: '#4FD1C5', // Cyan
          200: '#B2E1E1', // Light cyan for borders
        },
        primary: "#f8f7f4", // Primary color
        secondary: "#fe784f", // Secondary color
        tertiary: "#222222", // Tertiary color
        secondaryRed: "#f42c37",
        secondaryYellow: "#fdc62e",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
        'custom-green': '#84E1BC',
        'light-blue': {
          300: '#A0D3E8', // Light Blue
          500: '#007BFF', // Medium Light Blue
        },
        gray: {
          10: "#EEEEEE",  // Light Gray
          20: "#A2A2A2",  // Medium Gray
          30: "#7B7B7B",  // Darker Gray
          50: "#585858",  // Even Darker Gray
          90: "#141414",  // Almost Black
        },
      },
      // Custom font sizes
      fontSize: {
        '12': '3rem',      // Large text
        '54': '3.375rem',  // For heading
        '34': '2.125rem',  // For green technology text
        '18': '1.125rem',  // For content text
      },
      // Custom heights
      height: {
        '55': '55vh',      // 75% of viewport height
      },
      // Custom widths
      width: {
        '75': '75vw',      // 75% of viewport width
      },
      // Custom breakpoints for responsiveness
      screens: {
        xs: "400px",       // Extra small screens
        "3xl": "1680px",   // Large screens
        "4xl": "2200px",   // Extra large screens
      },
      // Custom background images
      backgroundImage: {
        // hero: "url(/src/assets/bg.png)",        // Hero section background
        // hero: "url(/src/assets/bg6.png)",        // Hero section background

        banneroffer: "url(/src/assets/Layers.jpeg)", // Banner offer background
      },
    },
  },
  plugins: [], // Add Tailwind CSS plugins if needed
};
