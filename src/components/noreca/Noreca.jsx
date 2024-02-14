import React from 'react'
import './Noreca.css'
import Navbar from '../navbar/Navbar'

const Noreca = () => {
  return (
    <div className='Noresa'>
      <div className="back_box2">
        <Navbar />
        <h1 className='about_h1'>Узбекские производители для HoReCа</h1>
        <h2 className='about_h2'>
          31 мая 2022 | Москва, Посольство Республики Узбекистан в РФ
        </h2>
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
            <u> Выставки</u>
          </div>
          <div className="">
            /
          </div>
          <div className="">
            HoReCa
          </div>
        </div>
        <div className="foods">
          <div className="ff">

            <div className="food_img">
              <img src="" alt="" />
            </div>
            <div className="food_text">
              <p>
                14:00 - 19:00, 31 мая 2022г., Погорельский пер., 12
              </p>
              <h2>
                БИЗНЕС-ПРЕЗЕНТАЦИЯ
              </h2>
              <h4>
                В рамках содействия развития партнёрских <br />взаимоотношений <b>Посольство Республики Узбекистан в <br /> РФ </b> приглашает российских рестораторов, отельеров, <br />представителей торговых сетей и импортёров ознакомиться с лучшими образцами узбекской плодоовощной, пищевой, винно-водочной, текстильной и электротехнической продукции.
                Участникам мероприятия будут созданы условия для проведения B2B и B2G переговоров, а по окончании - фуршет с дегустацией узбекских блюд.
              </h4>
            </div>
          </div>

        </div>
        <div className="programme">
          <h1 className='programme_h1'>
          Программа мероприятия
          </h1>
          <h2  className='programme_h2'>
          31 мая 2022г.
          </h2>
          <div className="prog_cards">
            <div className="prog_card">
              
            </div>
          </div>

        </div>




      </div>


    </div>
  )
}

export default Noreca
