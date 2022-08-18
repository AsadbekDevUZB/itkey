import React, { Component } from 'react';


class ContentSectionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content=this.props.content; 
    return ( 
      <>
        <li class="content-section-card">
            <div class="content-section-card-iconContainer">
              <img alt="Опыт" src={content.src}/>
            </div>
            <h3 class="site-card_card__title__J2pOa">{content.title}</h3>
            <p class="site-pros_pros__cardDescription__q5nkR">{content.description}</p>
        </li>
      </>
     );
  }
}
 
export default ContentSectionCard;