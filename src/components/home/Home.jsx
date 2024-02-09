import React from 'react'
import './Home.css'
import PartnerSearchIcon from '../images/photo.svg';
import NewsIcon from '../images/photo(1).svg';
import EventsIcon from '../images/a.svg';

const Home = () => {
     return (
          <div className='Home'>
               <div className="right_home">
                    <h1>РАСШИРЯЕМ ГЕОГРАФИЮ <br /> БИЗНЕСА УЗБЕКИСТАНА</h1>
                    <button>
                         КАТАЛОГ ПРЕДПРИЯТИЙ
                    </button>
               </div>
               <div className="left_gome">
                    <ul>
                         <li>
                              <a href="#">
                                   <div>

                                        <img src={PartnerSearchIcon} alt="" />
                                   </div>
                                   <div>

                                   <p>

                                        Поиск партнеров
                                   </p>
                                   </div>

                              </a>
                         </li>
                         <li>
                              <a href="#">
                                   <div>

                                        <img src={NewsIcon} alt="" />
                                   </div>
                                   <div>

                                   <p>

                                        Новости и Аналитика
                                   </p>
                                   </div>

                              </a>
                         </li>
                         <li>
                              <a href="#">
                                   <div>

                                        <img src={EventsIcon} alt="" />
                                   </div>
                                   <div>

                                   <p>

                                        Выставки и мероприятия
                                   </p>
                                   </div>

                              </a>
                         </li>
                         <li>
                              <a href="#">
                                   <div>

                                        <img src={NewsIcon} alt="" />
                                   </div>
                                   <div>

                                   <p>

                                        Как работать с Узбекистаном
                                   </p>
                                   </div>

                              </a>
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default Home
