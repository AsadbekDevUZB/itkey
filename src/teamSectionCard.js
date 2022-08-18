import React, { Component } from 'react';


class TeamSectionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const programmer=this.props.programmer;
    return (  
      <>
         <li class="team-section-list-item">
            <img class="team-section-list-itemImage"
              src="https://itkey.uz/static/media/user-icon.09dec60e9eabe9ecf129.png" alt="Иванов"/>
            <h3 class="team-section-list-title">{programmer.surname}</h3>
            <p class="team-section-list-description">{programmer.description}</p>
          </li>
      </>
    );
  }
}
 
export default TeamSectionCard;