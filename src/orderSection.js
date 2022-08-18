import React, { Component } from 'react';
import OrderSectionCard from './orderSectionCard';

class OrderSection extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const cards=[];
    this.props.order.forEach((order) => {
      cards.push(<OrderSectionCard order={order} />)
    });
    return ( 
      <section class="order-section">
      <div class="container">
        <h2 class="order-section-title">Не уверены, что нужно Вашему бизнесу? Поможем выбрать!</h2>
        <p class="order-section-description">Определив задачи Вашего бизнеса в интернете, наша команда поможет сделать
          правильный выбор с учётом нужных функций в рамках Вашего бюджета.</p>
        <ul class="order-section-list">
          {cards}
        </ul>
      </div>
    </section>
     );
  }
}
 
export default OrderSection;