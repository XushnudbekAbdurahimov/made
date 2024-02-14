import React from 'react'
import './Blig.css'
import Navbar from '../navbar/Navbar'
import Data from '../Data2/Data2'
import Footer from '../footer/Footer'
import Static from '../images/static.jpg'


const Blij = () => {
  return (
    <div className='Blig'>
      <div className="back_box">
        <Navbar />
        <h1 className='about_h1'>ВЫСТАВКИ</h1>
        <div className="uzb_container_p">
          <u> Главная </u>
          <div className="">
            /
          </div>
          <div className="">
            Мероприятия
          </div>
          <div className="">
            /
          </div>
          <div className="">
            Выставки
          </div>
        </div>
        <div className="bli">

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
        </div>
        <div className="bhn">
          <button>
            Загрузить ещё
          </button>
          <img src={Static} alt="" />
        </div>
        <Footer />

      </div>
    </div>

  )
}

export default Blij
