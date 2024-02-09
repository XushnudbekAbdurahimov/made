import React from 'react'
import './Cards.css'
import Data from '../Data/Data'
const Cards = () => {
     return (
          <div className='Cards'>
               <h1>МЕРОПРИЯТИЯ</h1>


               <div className='all'>
                    {
                         Data.map((value, index) => {
                              return (

                                   <div className="carts" key={index}>
                                        <img src={value.img} alt="" />
                                        <p className='date'>{value.date}</p>
                                        <h2 className='h2'>{value.name}</h2>
                                        <ul>
                                             <li>{value.li1}</li>
                                             <li>{value.li2}</li>
                                             <li>{value.li3}</li>
                                        </ul>
                                        <h3 className='h3'>{value.koproq}</h3>
                                        <h4 className='h4'>{value.qoshmoq}</h4>
                                   </div>

                              )
                         })
                    }
               </div>

               <button>Показать еще</button>
          </div>
     )
}

export default Cards
