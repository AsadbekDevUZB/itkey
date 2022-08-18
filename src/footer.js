import React, { Component } from 'react';
import FooterService from './footerService';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const services=[];
    this.props.service.forEach((service) => {
      services.push(<FooterService service={service} />)
    });
    const supports=[];
    this.props.support.forEach((support) => {
      supports.push(<FooterService service={support} />)
    });
    const smms=[];
    this.props.smm.forEach((smm) => {
      smms.push(<FooterService service={smm} />)
    });
    const informations=[];
    this.props.information.forEach((information) => {
      informations.push(<FooterService service={information} />)
    });
    const more_services=[];
    this.props.more_service.forEach((service) => {
      more_services.push(<FooterService service={service} />)
    });
    return ( 
      <footer class="footer-section">
        <ul class="footer-section-list">
          <li>
            <h2><a href="#">Разработка</a></h2>
            <ul>
              {services}
            </ul>
          </li>
          <li>
            <h2><a href="#">Поддержка</a></h2>
            <ul>
              {supports}
            </ul>
          </li>
          <li>
            <h2><a href="#">SMM</a></h2>
            <ul>
              {smms}
            </ul>
          </li>
          <li>
            <h2><a href="#">Ещё услуги</a></h2>
            <ul>
              {more_services}
            </ul>
          </li>
          <li>
            <h2><a href="#">О компании</a></h2>
            <ul>
              {informations}
            </ul>
          </li>
        </ul>
       
    </footer>
     );
  }
}
 
export default Footer;