import React, { Component } from 'react';

class FooterService extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <li><a href="javascript:void(0)">{this.props.service.title}</a></li>
        </>
    );
  }
}
 
export default FooterService;