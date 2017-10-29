import React, {Component} from 'react';
const logoImg = require('../images/CarrefourLogo.png');

export default class Logo extends Component {
  render() {
    return (
		<section className="carrefour_style_logo"> 
		    <img src={logoImg} alt="Carrefour Logo"/>
		</section>
    )
  }
}

