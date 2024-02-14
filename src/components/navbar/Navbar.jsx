import React, { useState } from 'react';
import './Navbar.css';
import logo_img from '../images/logo_uzb.png';
import lupa from '../images/lupa.svg';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
     const [showHov, setShowHov] = useState(false);

     return (
          <div className="div">
               <div className='Navbar'>
                    <div className="top_nav">
                         <div className="logo_img">
                              <img src={logo_img} alt="" />
                         </div>
                         <div className="input_bar">
                              <FiSearch className='img_img_img' />
                              <input type="text" name="" id="" placeholder='Search' />
                         </div>
                         <h1 className='nav_h1_h1'>+7 (495) 120 75 59</h1>
                    </div>

                    <div className="bottom_nav">
                         <ul>
                              <li>
                                   <Link to={'/uzb'}>
                                        УЗБЕКИСТАН
                                   </Link>
                              </li>
                              <li>
                                   <Link to={'/about'}>
                                        О ПРОЕКТЕ
                                   </Link>
                              </li>
                              <li onMouseEnter={() => setShowHov(true)} onMouseLeave={() => setShowHov(false)}>
                                   <a href="#">
                                        МЕРОПРИЯТИЯ
                                   </a>
                                   {showHov && <div className="hov">
                                        <p className='hov_li'>
                                             <Link to={"/blij"}>
                                                  Blijashiyie vistavki
                                             </Link>
                                        </p>
                                        <p className='hov_li'>
                                             <Link to={"/noreca"}>
                                                  Noreca
                                             </Link>

                                        </p>
                                   </div>}
                              </li>
                              <li>
                                   <Link to={'/news'}>
                                        НОВОСТИ
                                   </Link>
                              </li>
                              <li>
                                   <a href="#">
                                        КАТАЛОГ ПРЕДПРИЯТИЙ
                                   </a>
                              </li>
                         </ul>
                         <div className="zakaz">
                              <h1>
                                   ЗАКАЗАТЬ ЗВОНОК
                              </h1>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar;
