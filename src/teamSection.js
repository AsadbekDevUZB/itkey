import React, { Component } from 'react';
import TeamSectionCard from './teamSectionCard';

class TeamSection extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const team=[];
    this.props.team.forEach((programmer) => {
      team.push(<TeamSectionCard programmer={programmer} />)
    });
    return ( 
      <section class="team-section">
      <div class="container">
        <h2 class="team-section-title">Наша команда</h2>
        <p class="team-section-description">
          Мы – это команда профессионалов, которые рады проектам любой сложности благодаря опыту и постоянному развитию.
          Давайте знакомиться!
        </p>
        <ul class="team-section-list">
          {team}
        </ul>
      </div>
    </section>
     );
  }
}
 
export default TeamSection;