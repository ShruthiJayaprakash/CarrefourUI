import React, { Component } from 'react'

import Logo from '../components/Logo';
import Search from '../components/Search';
import Login from '../components/Login';
import Product from '../components/Product';
import Modal from '../components/Modal';

export default class MainContainer extends Component {

	constructor(props, context) {
        super(props, context)
    }

  	render() {
        return (
            <div>
                <div>
                    <section>
                        <Logo/>
                        <Search/>
                    </section>
                </div>
.
                <div>
                    <section>
                        <Login/>
                        <hr className='horizontal_rule'/>
                    </section>
                </div>
                
                <Product/>
            </div>        
        )
      }
}
// function mapStateToProps(state, ownProps) {
//   	const isAuthenticated = state.user.token || false
//   	const redirect = ownProps.location.query.redirect || '/home'
//   	return {
//     	isAuthenticated,
//     	redirect
//   	}
// }

// export default connect(mapStateToProps, { login, replace: routerActions.replace })(LoginContainer)