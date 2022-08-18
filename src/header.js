import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="section-lead">
        <div class="container section-lead-container">
          <div class="section-lead-description">
            <h1>Разработаем сайт, который продаёт</h1>
            <p>Поможем вашему бизнесу:</p>
            <ul class="section-lead-description-list">
              <li>Обеспечить рост клиентов до 40% после обновления сайта</li>
              <li>Увеличить конверсию до 50% после тестирования</li>
              <li>Поднять продажи и выручку до 30% после внедрения нужных виджетов</li>
            </ul>
          </div>

          <form class="section-lead-form">
            <h3>Оставьте заявку</h3>
            <div class="section-lead-form-input">
              <label for="contact">Имя <span>*</span></label>
              <input id="contact" class="section-lead-form-input-name" name="contact" type="text"/>
            </div>
            <div class="section-lead-form-input">
              <label for="phone">Ваш номер телефона <span>*</span></label>
              <input id="phone" class="section-lead-form-input-name" name="phone" type="text"/>
            </div>
            <button class="section-lead-form-button">Оставить заявку</button>
            <label for="agreement">
              <input class="section-lead-form-checkbox" id="agreement" name="agreement" type="checkbox" value="0"/>
                <span class="section-lead-form-fakecheckbox"></span>
                <span class="section-lead-form-labelcheckbox">Согласен с обработкой персональных данных в соответствии
                  сполитикой конфиденциальности</span>
            </label>
          </form>

        </div>
      </section>
    );
  }
}

export default Header;