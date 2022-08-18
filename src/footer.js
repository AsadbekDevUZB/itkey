import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer class="footer-section">
        <ul class="footer-section-list">
          <li>
            <h2><a href="#">Разработка</a></h2>
            <ul>
              <li><a href="#">На WordPress</a></li>
              <li><a href="#">На Tilda</a></li>
              <li><a href="#">Сайт-визитка</a></li>
              <li><a href="#">Интернет-магазин</a></li>
              <li><a href="#">Проектирование</a></li>
              <li><a href="#">Разработка личного кабинета</a></li>
            </ul>
          </li>
          <li>
            <h2><a href="#">Поддержка</a></h2>
            <ul>
              <li><a href="#">Тарифы</a></li>
              <li><a href="#">Юзабилити-аудит</a></li>
              <li><a href="#">Функциональное тестирование</a></li>
              <li><a href="#">Для интернет-магазина</a></li>
              <li><a href="#">Смена хостинга</a></li>
            </ul>
          </li>
          <li>
            <h2><a href="#">SMM</a></h2>
            <ul>
              <li><a href="#">Цены</a></li>
              <li><a href="#">Создание и ведение групп</a></li>
              <li><a href="#">SMM-аудит</a></li>
              <li><a href="#">Таргетированная реклама</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </li>
          <li>
            <h2><a href="#">Ещё услуги</a></h2>
            <ul>
              <li><a href="#">Услуги 1С</a></li>
              <li><a href="#">Внедрение 1С</a></li>
              <li><a href="#">Сопровождение 1С</a></li>
              <li><a href="#">Мобильные приложения</a></li>
              <li><a href="#">Продвижение в Маркетплейсах</a></li>
            </ul>
          </li>
          <li>
            <h2><a href="#">О компании</a></h2>
            <ul>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Корпоративные ценности</a></li>
              <li><a href="#">Отзывы клиентов</a></li>
              <li><a href="#">Достижения</a></li>
              <li><a href="#">Наша команда</a></li>
              <li><a href="#">Наши клиенты</a></li>
              <li><a href="#">Портфолио</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Ответы на вопросы</a></li>
              <li><a href="#">Партнерская программа</a></li>
              <li><a href="#">Онлайн-заявка</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </li>
        </ul>
      
      </footer>
    );
  }
}

export default Footer;