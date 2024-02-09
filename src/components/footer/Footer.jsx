import React from 'react'
import './Footer.css'
import facebook from '../images/facebook.svg'
import youtube from '../images/youtube.svg'
import logo from '../images/logo_uzb.png'

const Footer = () => {
     return (
          <div className='Footer'>
               <div className="top_footer">
                    <h2>МЫ В СОЦСЕТЯХ</h2>
                    <ul>
                         <li>
                              <a href="#">
                                   <img src={facebook} alt="" />
                              </a>
                         </li>
                         <li>
                              <a href="#">
                                   <img src={youtube} alt="" />
                              </a>
                         </li>
                    </ul>
               </div>
               <div className="bot_footer">
                    <div className="logos">
                         <img src={logo} alt="" />
                         <button>КАТАЛОГ ПРЕДПРИЯТИЙ</button>
                    </div>
                    <ul className='con_ul'>
                         <li>
                              <ul>
                                   <li>
                                        <a href="#">УЗБЕКИСТАН</a>
                                   </li>
                                   <li>
                                        <a href="#">O ПРОЕКТЕ</a>
                                   </li>
                                   <li>
                                        <a href="#">НОВОСТИ</a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <ul>
                                   <li>
                                        <a href="#">
                                             ВЫСТАВКИ
                                        </a>
                                   </li>
                                   <li style={{width: "140px"}}>
                                        <a href="#">
                                             MADE IN UZBEKISTAN
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             БИЗНЕС-МИССИИ
                                        </a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <ul>
                                   <li>
                                        <a href="#">
                                             КОНТАКТЫ
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             +7 (495) 120-75-59
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             manager@madeinuzbekistan.ru
                                        </a>
                                   </li>
                              </ul>
                         </li>
                         <li>
                              <ul className='four_ul'>
                                   <li style={{width: "250px"}}>
                                        <a href="#" style={{color: "#7a7a7a"}}>
                                             Министерство инвестиций и внешней торговли РУ
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             mift.uz
                                        </a>
                                   </li>
                                   <li style={{width: "250px",margin: "15px 0 0  0"}}>
                                        <a href="#" style={{color: "#7a7a7a"}}>
                                             Агентство продвижения <br />экспорта РУ
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#">
                                             epauzb.uz
                                        </a>
                                   </li>
                              </ul>
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default Footer
