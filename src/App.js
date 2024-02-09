import './App.css';
import { Route, Routes } from 'react-router-dom';
import Busines from './components/busines/Busines';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer';
import Uzbekistan from './components/Uzbekistan/Uzbekistan';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
      <Busines />
      <Footer />

      {/* <Routes>
        <Route path='/uzb' element={<Uzbekistan />} />
      </Routes> */}
    </div>
  );
}

export default App;




// // App.js
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Busines from './components/busines/Busines';
// import Home from './components/home/Home';
// import Navbar from './components/navbar/Navbar';
// import Cards from './components/cards/Cards';
// import Footer from './components/footer/Footer';
// import Uzbekistan from './components/Uzbekistan/Uzbekistan';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cards" element={<Cards />} />
//           <Route path="/busines" element={<Busines />} />
//           <Route path="/uzb" element={<Uzbekistan />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
