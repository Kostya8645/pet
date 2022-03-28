import React, { useState } from 'react'
import Modal from './Modal';
import useModal from './useModal';
const Selectr = () => {
    const {isShowingpay, togglepay} = useModal();
    return (
      <div>
          
          <section class="banner">
            <div class="wrapper">
                <h1 class="title">Супер кресло</h1>
                <p>Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее</p>
                <a class="btn" >Подробнее</a>
            </div>
        </section>
        <section class="catalog">
            <div class="wrapper">
                <div class="grid">
                    <div class="grid-item grid-item-title">
                        <h2 class="title-h2">Специальные предложения</h2>
                    </div>
                    <div class="grid-item grid-item-img">
                        <img src="https://annblok.github.io/Beauty/img/car.svg" alt="Delivery"/>
                    </div>
                    <div class="grid-item grid-item-catalog">
                        <div class="bg-white">
                            <div class="thumb">
                                <img src="https://annblok.github.io/Beauty/img/chair.png" alt="Chair"/>
                            </div>
                            <p class="grid-title">Парикмахерское кресло «Норм» гидравлическое</p>
                            <p class="grid-price">9 900 ₽ </p>
                            <button class="grid-btn" onClick={togglepay} >Купить</button>
                            <Modal
        isShowingpay={isShowingpay}
        hide={togglepay}
      />
                        </div>
                    </div>
                    <div class="grid-item grid-item-catalog">
                        <div class="bg-white">
                            <div class="thumb">
                                <img src="https://annblok.github.io/Beauty/img/chair.png" alt="Chair"/>
                            </div>
                            <p class="grid-title">Парикмахерское кресло «Норм» гидравлическое</p>
                            <p class="grid-price">9 900 ₽ </p>
                            <button class="grid-btn" onClick={togglepay}>Купить</button>
                        </div>
                    </div>
                    <div class="grid-item grid-item-catalog">
                        <div class="bg-white">
                            <div class="thumb">
                                <img src="https://annblok.github.io/Beauty/img/chair.png" alt="Chair"/>
                            </div>
                            <p class="grid-title">Парикмахерское кресло «Норм» гидравлическое</p>
                            <p class="grid-price">9 900 ₽ </p>
                          
                            <button class="grid-btn" onClick={togglepay} >Купить</button>
                            
                        </div>           
                    </div>
                    <div class="grid-item grid-item-catalog">
                        <div class="bg-white">
                            <div class="thumb">
                                <img src="https://annblok.github.io/Beauty/img/chair.png" alt="Chair"/>
                            </div>
                            <p class="grid-title">Парикмахерское кресло «Норм» гидравлическое</p>
                            <p class="grid-price">9 900 ₽ </p>
                            <button class="grid-btn" onClick={togglepay}>Купить</button>

                        </div>
                    </div>
                    <div class="grid-item grid-item-left">
                        <div class="bg-green">
                            <div class="bg-green-item">
                                <h3>Получайте бонусы и подарки</h3>
                                <p>Каждый месяц разыгрываем<br/>10 000 рублей для наших клиентов</p>
                                <input type="email" placeholder="Введите e-mail"/>
                            </div>
                            <img class="bg-green-img" src="https://annblok.github.io/Beauty/img/envelope.svg" alt="Envelope"/>
                        </div>
                    </div>
                    <div class="grid-item grid-item-right">
                        <div class="bg-green">
                            <div class="bg-green-item">
                                <h3>Заходите к нам</h3>
                                <p>Более 300 магазинов<br/>по всей России</p>
                                <a class="btn" >Карта магазинов</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
export default Selectr;