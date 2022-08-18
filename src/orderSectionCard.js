import React, { Component } from 'react';


class OrderSectionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const order = this.props.order;
    return (
      <>
        <li class="order-section-card">
            <div class="order-section-iconContainer">
              <img alt="Разработка мобильных приложений"
                src={order.src}/>
            </div>
            <h3 class="order-section-card-title">{order.title}</h3>
            <ul class="order-section-card-list">
              <li class="order-section-card-list-item">{order.description}</li>
            </ul>
            <p class="order-section-list-description">от {order.price} рублей</p>
            <button class="order-section-list-button" type="button">Заказать</button>
          </li>
      </>
      );
  }
}
 
export default OrderSectionCard;