import React from 'react'
import './Home.css'
import PartnerSearchIcon from '../images/photo.svg';
import NewsIcon from '../images/photo(1).svg';
import EventsIcon from '../images/a.svg';
import Navbar from '../navbar/Navbar'
import logo_img from '../images/logo_uzb.png'
import { FiSearch } from "react-icons/fi";
import lupa from '../images/lupa.svg'
import { Link } from 'react-router-dom'

const Home = () => {
     return (
          <div className="Home">
               <div className="news">
                    <div className="news_card">
                         <h1>
                              Reklama
                         </h1>
                    </div>
                    <div className="news_card">
                         <h1>
                              Reklama
                         </h1>

                    </div>
                    <div className="news_card">
                         <h1>
                              Reklama
                         </h1>

                    </div>
               </div>
               <div className="projects">
                    <ul>
                         <li>
                              <div className="son">

                                   <h1>155</h1>
                                   <p>korxonalar</p>
                              </div>
                              <button>Loyihalar <br /> soni</button>
                         </li>
                         <li>
                              <div className="son">

                                   <h1>155</h1>
                                   <p>mln$</p>
                              </div>
                              <button>Loyihalar <br /> qiymati</button>
                         </li>
                         <li>
                              <div className="son">

                                   <h1>155</h1>
                                   <p>dona</p>
                              </div>
                              <button>Ish <br /> o'rinlari</button>
                         </li>
                         <li>
                              <div className="son">

                                   <h1>155</h1>
                                   <p>mln$</p>
                              </div>
                              <button>Eksport <br /> qiymati</button>
                         </li>
                    </ul>
               </div>

          </div>




































          // <div className='Home'>
          //      <div className="right_home">
          //           <h1>РАСШИРЯЕМ ГЕОГРАФИЮ <br /> БИЗНЕСА УЗБЕКИСТАНА</h1>
          //           <button>
          //                КАТАЛОГ ПРЕДПРИЯТИЙ
          //           </button>
          //      </div>
          //      <div className="left_gome">
          //           <ul>
          //                <li>
          //                     <a href="#">
          //                          <div>

          //                               <img src={PartnerSearchIcon} alt="" />
          //                          </div>
          //                          <div>

          //                          <p>

          //                               Поиск партнеров
          //                          </p>
          //                          </div>

          //                     </a>
          //                </li>
          //                <li>
          //                     <a href="#">
          //                          <div>

          //                               <img src={NewsIcon} alt="" />
          //                          </div>
          //                          <div>

          //                          <p>

          //                               Новости и Аналитика
          //                          </p>
          //                          </div>

          //                     </a>
          //                </li>
          //                <li>
          //                     <a href="#">
          //                          <div>

          //                               <img src={EventsIcon} alt="" />
          //                          </div>
          //                          <div>

          //                          <p>

          //                               Выставки и мероприятия
          //                          </p>
          //                          </div>

          //                     </a>
          //                </li>
          //                <li>
          //                     <a href="#">
          //                          <div>

          //                               <img src={NewsIcon} alt="" />
          //                          </div>
          //                          <div>

          //                          <p>

          //                               Как работать с Узбекистаном
          //                          </p>
          //                          </div>

          //                     </a>
          //                </li>
          //           </ul>
          //      </div>
          // </div>
     )
}

export default Home
