import React, {Component} from 'react';

const prdImg1 = require('../images/CarrefourItem1.png');
const prdImg2 = require('../images/CarrefourItem2.png');
const prdImg3 = require('../images/CarrefourItem3.png');


export default class Product extends Component {
  render() {
    return (
        <div className='product_wrapper'>
            <section className='carrefour_product_iphone6'>
                <img src={prdImg1} alt="iPhone6" />
            </section>
            <section className='carrefour_product_iphone7'>
                <img src={prdImg2} alt="iPhone7" />
            </section>
            <section className='carrefour_product_iphone8'>
                <img src={prdImg3} alt="iPhone8" />
            </section>
        </div>
    )
  }
}

 
 
 
 
 
 
 
 
 

