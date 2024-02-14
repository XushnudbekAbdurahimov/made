import React from 'react'
import './Uzbekistan.css'
import Navbar from '../navbar/Navbar.jsx'
import maps from '../images/maps.jpg'
import fergana from '../images/fergana2.jpg'
import tourism from '../images/tourism.png'
import Footer from '../footer/Footer'


const Uzbekistan = () => {
  return (
    <div className='Uzbekistan'>
      <Navbar />
      <div className="uzb_container">
        <h1 className='uzb_container_h1'>
          WELCOME TO NAMANGAN
        </h1>
        <div className="uzb_container_p">
          <u> Главная </u>
          <div className="">
            /
          </div>
          <div className="">
            Узбекистан
          </div>
        </div>
        <div className="maps">
          <div className="map1">
            Общая информация
          </div>
          <div className="map2">
            Материалы в помощь
          </div>
          <div className="map3">
            Экспортный потенциал
          </div>
        </div>
        <div className="inf">
          <div className="inf1">
            <h3>
              Республика <br />Узбекистан
            </h3>
            <p>
              Официальное название <br />страны
            </p>

          </div>
          <div className="inf1">
            <h3>
              Ташкент
            </h3>
            <p>
              Столица
            </p>

          </div>
          <div className="inf1">
            <h3>
              Правовое<br /> демократическое<br /> государство
            </h3>
            <p>
              Политическое устройство
            </p>


          </div>
          <div className="inf1">
            <h3>
              Мирзиёев Шавкат<br /> Миромонович
            </h3>
            <p>
              Президент
            </p>
          </div>
        </div>
        <div className="uzb_map">
          <h1>ГЕОГРАФИЯ</h1>
          {/* <img className='uzb_map_img' src={maps} alt="" /> */}
        </div>
        <div className="gmt">
          <div className="gmt1">
            <h4>
              Центральная Азия
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Регион
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              34,04 млн человек
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Население
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              448 900 км2
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Площадь
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              GMT +5
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Часовой пояс
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              +998
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Телефонный код
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              Узбекский сум
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Валюта
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              .uz
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Домен верхнего уровня страны
              </h5>
            </div>
          </div>
          <div className="gmt1">
            <h4>
              Правостороннее
            </h4>
            <div className="under">
            </div>
            <div className="place">
              <h5>
                Движение
              </h5>
            </div>
          </div>
        </div>
        <div className="popular">
          <div className="cities">
            <div className="city">
              <h4>
                <u>Крупнейшие области</u>
              </h4>
              <h5>
                по численности <br /> населения на 1 января <br /> 2019 года
              </h5>
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>
            <div className="city">
              <h4>
                <u>Самаркандская <br /> область</u>
              </h4>
              <h5>
                3 857 000 чел.
              </h5>
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>
            <div className="city">
              <h4>
                <u>Ферганская область</u>
              </h4>
              <h5>
                3 733 100 чел.
              </h5>
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>
            <div className="city">
              <h4>
                <u>Кашкадарьинская <br /> область</u>
              </h4>
              <h5>
                3 261 400 чел.
              </h5>
            </div>
            <div className="city">
              <h4>
                <u>Андижанская область</u>
              </h4>
              <h5>
                3 110 100 чел.

              </h5>
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>
            <div className="city">
              <h4>
                <u>Ташкентская область</u>
              </h4>
              <h5>
                2 929 900 чел.

              </h5>
            </div>
            <div className="city">
              {/* <img className='images_city' src={fergana} alt="" /> */}
            </div>



          </div>
        </div>
        <div className="climate">
          <h2 className='climate_h2'>Климат</h2>
          <h3 className='climate_h3'>Континентальный, с жарким летом и прохладной зимой</h3>

          <div className="climates">
            <div className="climate1">
              <h3>
                41 ° C — 45 ° C и выше
              </h3>
              <h4>
                (106 ° F — 113 ° F) Температура летом
              </h4>
            </div>
            <div className="climate1">
              <h3>
                -8 °C — -40 ° C
              </h3>
              <h4>
                (18 ° F -40 ° F) Температура зимой

              </h4>

            </div>
            <div className="climate1">
              <h3>
                Влажность воздуха
              </h3>
              <h4>
                Не высокая <br />
                Большая часть страны довольно засушливая
              </h4>

            </div>
          </div>
        </div>
        <div className="obshiy">
          <h1 className='obshiy_h1'>ОБЩЕСТВО</h1>

          <div className="obshiy_cards">

            <div className="obshiy_card">
              <div className="back_img">
                <h3>Население</h3>
              </div>
              <p>14.946 млн. человек — <br />
                экономически активное <br /> население <br />
                29 лет — средний возраст в <br /> Узбекистане <br />
                97% — уровень грамотности</p>

            </div>
            <div className="obshiy_card">
              <div className="back_img">
                <h3>Демография</h3>
              </div>
              <p>50,5% — доля городского <br /> населения <br />
                58,9% населения находятся в <br /> трудоспособном возрасте <br />
                660,9 тыс.чел. — естественный <br /> прирост <br />
                -10,7 — сальдо миграции <br />
                (2019г.)</p>

            </div>
            <div className="obshiy_card">
              <div className="back_img">
                <h3>Языки</h3>
              </div>
              <p>узбекский (официальный язык),<br />
                русский (широко используется),<br />
                английский (популярен)</p>

            </div>
            <div className="obshiy_card">
              <div className="back_img">
                <h3>Независимость</h3>
              </div>
              <p>приняли — 31 августа 1991,<br />
                отмечают — 1 сентября</p>

            </div>
          </div>

        </div>
        <div className="ekonomika">
          <h1 className='ekonomika_h1'>ЭКОНОМИКА</h1>

          <div className="levels">

            <div className="level">
              <h5>
                Финансовый центр
              </h5>
              <h6>
                Ташкент
              </h6>
            </div>
            <div className="level">
              <h5>
                ВВП (ППС)
              </h5>
              <h6>
                250,33 млрд. долл.США <br />
                (2018г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                ВВП на душу населения <br />
                (ППС)
              </h5>
              <h6>
                7665,45 долл. США (2018г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Объем экспорта
              </h5>
              <h6>
                17,9 млрд долларов США <br /> (2019г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Объем импорта
              </h5>
              <h6>
                24,3 млрд долларов США <br />(2018г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Число туристов
              </h5>
              <h6>
                6.4 млн. чел.(2018 г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Прямые иностранные <br /> инвестиции
              </h5>
              <h6>
                4,205 млн. долл. США  <br />(2019г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Число компаний с <br /> иностранным капиталом
              </h5>
              <h6>
                8785 (по состоянию 1 июня  <br />2019 г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Темпы инфляции
              </h5>
              <h6>
                14,3 % (ИПС — 2018г.)
              </h6>
            </div>
            <div className="level">
              <h5>
                Торговые соглашения
              </h5>
              <h6>
                Соглашение о свободной <br /> торговле со странами СНГ <br />(Азербайджан, Армения, <br />Беларусь, Казахстан, <br /> Кыргызстан, Таджикистан, <br /> Туркменистан, Российская <br />Федерация, Украина)
              </h6>
            </div>
            <div className="level">
              <h5>
                Главные экспортные <br /> рынки
              </h5>
              <h6>
                Китай – 22,1%., <br />
                Россия – 16,7%,<br />
                Казахстан -11,1 %,<br />
                Турция — 7,2%,<br />
                Афганистан — 4,9 % <br />
              </h6>
            </div>
            <div className="level">
              <h5>
                Главные источники импорта
              </h5>
              <h6>
                Россия (18,5%),<br />
                Китай (18,3%),<br />
                Южная Корея (9,8%),<br />
                Казахстан (7,8%),<br />
                Турция (6,5%) (2018) <br />
              </h6>
            </div>


          </div>

        </div>
        <div className="percent">
          <h1>
            Сектора экономики с наибольшими объемами <br />
            иностранных инвестиций и кредитов
          </h1>
          <div className="text1s">
            
            <div className="text1">
              <h2>
                34,2%
              </h2>
              <h3>
                Электроснабжение и <br /> подача газа
              </h3>
            </div>


            <div className="text1">
              <h2>
              26,6%
              </h2>
              <h3>
              Обрабатывающая <br /> промышленность

              </h3>
            </div>


            <div className="text1">
              <h2>
                19.6%
              </h2>
              <h3>
              Горнодобывающая <br />промышленность
              </h3>
            </div>


            <div className="text1">
              <h2>
                5.6%
              </h2>
              <h3>
              Перевозка и хранение
              </h3>
            </div>

          </div>
        </div>
        <div className="tourism">
            <h1 className='tour_h1'>10 ПРИЧИН РАБОТАТЬ С УЗБЕКИСТАНОМ</h1>
            <img className='tourism_img' src={tourism} alt="" />

            <div className="tour_texts">
              <div className="tour_text">
                <h3>
                  1047
                </h3>
                <div className="under_2">

                </div>
                <p>
                проектов реализуется с <br /> иностранными <br /> инвестициями
                </p>
              </div>
              <div className="tour_text">
                <h3>
                  41,5 млрд $
                </h3>
                <div className="under_2">

                </div>
                <p>
                общая сумма иностранных <br /> инвестиций
                </p>
              </div>
              <div className="tour_text">
                <h3>
                  51
                </h3>
                <div className="under_2">

                </div>
                <p>
                страна заключила <br /> соглашение о защите <br /> инвестиций
                </p>
              </div>
              <div className="tour_text">
                <h3>
                  51
                </h3>
                <div className="under_2">

                </div>
                <p>
                страна заключила <br /> соглашение об избежании <br /> двойного<br /> налогоооблажения
                </p>
              </div>
            </div>
        </div>
        <Footer />



      </div>
    </div>
  )
}

export default Uzbekistan
