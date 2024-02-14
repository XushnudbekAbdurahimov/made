import './App.css';
import { Route, Routes } from 'react-router-dom';
import Busines from './components/busines/Busines';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer';
import Uzbekistan from './components/Uzbekistan/Uzbekistan';
import Card from './components/card/Card';
import Maxsulotlar from './components/maxsulotlar/Maxsulotlar';
import About from './components/About/About';
import News from './components/News/News';
import Blij from './components/blij/Blij';
import Noreca from './components/noreca/Noreca'


function App() {
  return (
    <div className="App">

      {/* <div className="main"> */}
      {/* </div> */}

      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/' element={<Home />} />
        <Route path='/uzb' element={<Uzbekistan />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/blij' element={<Blij />} />
        <Route path='/noreca' element={<Noreca />} />

      </Routes>
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
