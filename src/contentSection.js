import React, { Component } from 'react';
import ContentSectionCard from './contentSectionCard';

class ContentSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards=[];
    this.props.content.forEach((content) => {
      cards.push(<ContentSectionCard content={content} />)
    });
    return ( 
      <section class="content-section">
      <div class="container">
        <h2 class="content-section-title">Почему стоит работать с нами?</h2>
        <ul>
          {cards}
          
        
        </ul>
      </div>
    </section>
     );
  }
}
 
export default ContentSection;