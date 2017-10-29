import React, {Component} from 'react';
const searchImg = require('../images/CarrefourSearch.png');

export default class Search extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isSearch : false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    handleClick(){
        this.setState({isSearch:true})
    }

    handleInput(e){
        let value = e.target.value;
    }

    render() {
        return (
            <div>
            {this.state.isSearch ? <input type='search' className='search_field_input' defaultValue="iphone"/>   
               : <a href="javascript:void(0)" onClick={this.handleClick} className="carrefour_style_search">
                    <img src={searchImg}/>
                </a>
            }
            </div>
        )
    }
}

