import React, { Component } from 'react';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header class="header">
        <div class="header-contact">
          <img class="header-logo" src={require('./style/favicon.jpeg')} alt="Logotip"/>
            <div class="header-contact-main">
              <ul class="header-contact-list">
                <li class="header-contact-list-item">

                  <a id="header-contact-link" href="javascript:void(0)">
                    <i class="fas fa-briefcase" id="header-contact-link-icon"></i>
                    Кейсы
                  </a>
                  <span class="header-contact-phone">8(123)456-78-90</span>
                </li>
                <li class="header-contact-list-item">
                  <a id="header-contact-link" href="javascript:void(0)">
                    <i class="fas fa-phone-square" id="header-contact-link-icon"></i>
                    Контакты
                  </a>
                  <span class="header-contact-phone">8(123)456-78-90</span>
                </li>
              </ul>
              <button id="header-contact-button" type="button">Онлайн-заявка</button>
            </div>
        </div>

        <nav class="menu-container">
          <ul class="nav-links">
            
            <div class="menu">
              <li><a href="javascript:void(0)"><i class="fas fa-cog" id="material-icons-outlined"></i> Поддержка</a></li>
              <li><a href="javascript:void(0)"><i class="fas fa-volume-down" id="material-icons-outlined"></i> SMM</a>
              </li>
              <li><a href="javascript:void(0)"><i class="fas fa-pencil-ruler" id="material-icons-outlined"></i>
                Разработка</a></li>
              <li><a href="javascript:void(0)"><i class="fas fa-clipboard-list" id="material-icons-outlined"></i> Еще
                услуги</a></li>
              <li><a href="javascript:void(0)"><i class="fas fa-book" id="material-icons-outlined"></i> О компании</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;