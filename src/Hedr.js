import React from 'react';
import Modalcol from './Modalcol';
import useModalcol from './useModalcol';

const Hedr = () => {
    const {isShowing, toggle} = useModalcol();
    
    return (
        <>
        <header>
          <div class="wrapper">
                <nav>
                    <ul class="nav">
                        <li><a href="">Доставка</a></li>
                        <li><a href="">Оплата</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Вопрос - ответ</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div class="bg-white">
                <div class="header">
                    <div class="wrapper">
                        <div class="header-top">
                            <div class="logo"><span class="logo-image"></span><span>BEAUTY</span></div>
                            <div class="header-info">
                                <span>8 (812) 123-45-67</span>
                                <button className="button-default" onClick={toggle}>Обратный звонок</button>
      <Modalcol
        isShowing={isShowing}
        hide={toggle}
      />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="wrapper">
                        <div class="header-bottom">
                            <ul class="nav">
                                <li><a >Парикмахерская</a></li>
                                <li><a >Барбершоп</a></li>
                                <li><a >Маникюр</a></li>
                                <li><a >Педикюр</a></li>
                                <li><a >Массаж</a></li>
                                <li><a >Мебель</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </header>
   </>
    )
  }

export default Hedr;