// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Product from "./pages/Product";
// import Footer from "./components/Footer";
// import clothingbanner from './assets/clothingbanner.png';
// import electronicsbanner from './assets/electronicsbanner.png';
// import cosmeticsbanner from './assets/cosmeticsbanner.png';
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import NewHeader from "./components/NewHeader";

// export default function App() {
//   return (
//     <main className="text-tertiary">
//       <BrowserRouter>
//         <NewHeader/>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/clothing" element={<Category category={"clothing"} banner={clothingbanner} />} />
//           <Route path="/cosmetics" element={<Category category={"cosmetics"} banner={cosmeticsbanner} />} />
//           <Route path="/electronics" element={<Category category={"electronics"} banner={electronicsbanner} />} />
          
//           {/* Corrected route for product */}
//           <Route path="/product/:productId" element={<Product />} />

//           <Route path="/cart-page" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </main>
//   );
// }











//------------------------------
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Product from "./pages/Product";
// import Footer from "./components/Footer";
// import clothingbanner from './assets/clothingbanner.png'
// import electronicsbanner from './assets/electronicsbanner.png'
// import cosmeticsbanner from './assets/cosmeticsbanner.png'


// export default function App(){
//   return (
//    <main className="text-tertiary">
//     <BrowserRouter>
//     <Header />
//     <Routes>
      
//       <Route path="/" element={<Home />}/>
//       <Route path="/clothing"   element={<Category category={"clothing"} banner={clothingbanner} />}/>
//       <Route path="/cosmetics"  element={<Category category={"cosmetics"} banner={cosmeticsbanner} />}/>
//       <Route path="/electronics"   element={<Category category={"electronics"} banner={electronicsbanner} />}/>
//       <Route path="/ product"  element={<Product  />}>
//       <Route path=":productId" element={<Product />}/>
//        </Route>
//        {/* <Route path="/cart-page" element={<Cart />}/>
//        <Route path="/login" element={<Login />}/> */}
//     </Routes>
//     <Footer />
//     </BrowserRouter>
//    </main>
//   )
// }




//----------------------------





// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Product from "./pages/Product";


// import Login from "./pages/Login";
// import NewHeader from "./components/NewHeader";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";

// export default function App() {
//   return (
//     <main className="text-tertiary">
//       <BrowserRouter>
//         <NewHeader/>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/clothing" element={<Category category={"clothing"} banner={clothingbanner} />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/cart-page" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           //       <Route path="/ product"  element={<Product  />}>
//       <Route path=":productId" element={<Product />}/>
//        </Route>
//         <Route path="/cart-page" element={<Cart />}/>
//       <Route path="/login" element={<Login />}/> 
//      </Routes>
//         </Routes>
      
//       </BrowserRouter>
//     </main>
//   );
// }





//-------------------------------------------



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NewHeader from "./components/NewHeader";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import clothingbanner7 from './assets/clothingbanner7.png';
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <NewHeader/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Category category={"clothing"} banner={clothingbanner7} />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       <Footer/>

      </BrowserRouter>
    </main>
  );
}
