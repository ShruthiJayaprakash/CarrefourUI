import React, {Component} from 'react';
import * as Helpers from '../Helpers/Utility'
import Modal from './Modal'

export default class Login extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isValidUser : true,
            isValidPassword : true,
            responseMessage : '',
            isAuthenticated : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    clearForm(){
        this.refs.username.value=""
        this.refs.password.value=""
      }

    handleSubmit(e){
        e.preventDefault();
        const uname = this.refs.username.value, password = this.refs.password.value
        let isUsername = Helpers.validateUsername(uname)
        let isPassword = Helpers.validatePassword(password)
        if( isUsername && isPassword){
            //simulating API call to authenticateUser
            const response = Helpers.authenticateUser(uname,password)
            this.setState({ responseMessage : response.message , isAuthenticated : true})
            this.clearForm()
        } else {
            this.setState({ isValidUser : false , isValidPassword : false})
        }
    }

    onUserNameChange(e){
        e.preventDefault()
		this.setState({isValidUser : Helpers.validateUsername(this.refs.username.value), isAuthenticated:false, responseMessage : ''})
    }

    onPasswordChange(e){
        e.preventDefault()
		this.setState({isValidPassword : Helpers.validatePassword(this.refs.password.value), isAuthenticated:false, responseMessage : ''})
    }

    render() {
        const {isValidUser,isValidPassword,isAuthenticated,responseMessage} = this.state
        return (
                <div className='wrapper'>
                    <form className='login' onSubmit={this.handleSubmit}>
                        <label className='form_label_header'>Sign In Now</label>
                        <label className='form_label_subheader'>Unlock awesome features!</label>  
                        <span>      
                            <div  className='form_element_wrapper'> 
                                { isValidUser ? <label className="form_label_text">Username </label>
                                    :<span className="form_label_text_error">Required field</span>
                                }               
                                <input className={`form_text_field_input ${!isValidUser ? 'error' : ''}`} type="text" placeholder="Username" ref="username" id='carreforeUsername'
                                onChange={this.onUserNameChange} />

                                { isValidPassword ? <label className="form_label_text">Password </label>  
                                    :<span className="form_label_text_error">Required field</span>}  
                                <input className={`form_password_entry_input ${!isValidPassword ? 'error' : ''}`} type="password" placeholder="Password" ref="password" id='carreforePassword'
                                onChange={this.onPasswordChange}    />
                            </div> 
                        </span>      
                        <span className="form_check_option">
                            <input type="checkbox" className="form_check_option_input" defaultChecked='true' />
                                <label className="form_check_option_mark" aria-hidden="true">
                                    <i className="icon icon-check_mark"></i>
                                </label>
                            <label className="form_check_option_label">keep me logged in</label>
                      </span>
                        <label className='form_help'>Forgot password?</label>
                        <div className='form_button_wrapper'>
                            <button type="submit" className='form_button_primary'>SIGN IN</button> 
                        </div>
                    </form>
                    { isAuthenticated && <Modal message={responseMessage}/>}
                </div> )         
            }
        }

