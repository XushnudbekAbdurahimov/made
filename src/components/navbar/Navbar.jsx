import React from 'react'
import './Navbar.css'
import logo_img from '../images/logo_uzb.png'
import { FiSearch } from "react-icons/fi";
import lupa from '../images/lupa.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
     return (
          <div className="div">

               <div className='Navbar'>

                    <div className="top_nav">
                         <div className="logo_img">
                              <img src={logo_img} alt="" />
                         </div>
                         {/* <FiSearch className='search-icon' /> */}
                         <div className="input_bar">
                              <img src={lupa} alt="" />
                              <input type="text" name="" id="" placeholder='Search' />
                         </div>
                         <h1>+7 (495) 120 75 59</h1>
                    </div>


                    <div className="bottom_nav">
                         <ul>
                              <li>
                                   <Link to={'/uzb'}>
                                        УЗБЕКИСТАН
                                   </Link>
                              </li>
                              <li>
                                   <a href="#">
                                        О ПРОЕКТЕ
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        МЕРОПРИЯТИЯ
                                        {/* <select name="" id="">
                                        <option value="">
                                             ngng
                                        </option>
                                        <option value="">
                                             dgtjnyj
                                        </option>
                                   </select> */}
                                   </a>
                              </li>
                              <li>
                                   <a href="#">
                                        НОВОСТИ
                                   </a>
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

export default Navbar
