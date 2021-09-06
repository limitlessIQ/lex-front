import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom'
import Spinner from 'react-loader-spinner'
import { UgetFields,UvalidateFields,UapiCall } from '../lib/utils'
import { apiEndPoints } from '../lib/apiEndPoints'
import TopNav from './TopNav'
import Footer from './Footer'

import '../styles/login.css'

export class Login extends Component {

    constructor(props){
        super(props)


        this.state = {
            errorMessage: '',
            errors: false,
            validationSuccess: '',
            email: '',
            password:'',

        }
        
        this.emailField = React.createRef()
        this.passwordField = React.createRef()
    }

    componentDidMount = () =>{
        this.checkToAnimate()
    }

    // this method animates the login form when
    // a user clicks login from signup page
    checkToAnimate = () => {
        if(this.props.animate){
            console.log(this.props.animate)
            
            document.querySelector('#LoginCenter').classList.add('slideRight') 
        }
    }

    // validate
    // make api call
    Login = async (e) =>{
        e.preventDefault()
        const validate = UvalidateFields(this, 'LOGIN') 

        if(validate === 'ok'){
          this.setState({errors: false, errorMessage: ''})

          // await resource at users/login
          const response = await UapiCall(this, 'LOGIN', `${apiEndPoints.baseUrl}/users/login`)
        
          if(response.data.err){
            // set error indicators
            this.setState({errors: true, errorMessage: response.data.err, validationSuccess: ''})

            // show danger on inputs
            this.emailField.current.classList.add('dangerBorder') 
            this.passwordField.current.classList.add('dangerBorder') 
          }

          if(response.data.user){
            this.setState({errors: false, validationSuccess: 'ok'})

          }

          console.log(response)
        }



    }

    // this method implements the Utils method
    // UgetFields to change state of input
    getFields = (e) =>{
      UgetFields(e,this)
      console.log(e)
    }



    render() {
        return (
          <>
          <TopNav></TopNav>
          <div className="mainContainer loginContainer">
            <div
              id="LoginCenter"
              className="centerContainer4 whiteWithOpacity borderPrimary centerContainerGrid borderRadius"
            >
              <form
                style={{
                  display: "grid",
                  gridTemplateRows: this.state.errors
                    ? "repeat(3,3rem) auto 4rem auto"
                    : " 50px repeat(2,3rem) 4rem auto",
                }}
                className="loginForm"

              >
                <h2 >
                  Login
                </h2>

                <input
                  className="inputPadding loginInput  opacityMedium inputNoOutline  no small"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id=""
                  onChange={this.getFields}
                  ref={this.emailField}
                />
                <input
                  className="inputPadding loginInput opacityMedium inputNoOutline no small"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id=""
                  onChange={this.getFields}
                  ref={this.passwordField}
                />

                <p
                  style={{ display: this.state.errors ? "block" : "none" }}
                  className="marginTop small danger"
                >
                  {this.state.errorMessage}
                </p>
                <button
                  onClick={this.Login}
                  className="marginTop secondaryButton medium medium"
                > 
                   { this.state.validationSuccess === 'ok' ?  <Spinner  width={100} type='TailSpin' color="white" height='20px'></Spinner> : 'Login' }
                </button>
                <p className="marginTopBottom1 centerVertical primary">
                  {" "}
                  Don't have a Lex account?{" "}
                  <Link className="secondaryColor" to="/signup">
                    Sign up
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        <Footer></Footer>

          </>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        animate: state.animate
    }
}

const mapDispatchToProps = () =>{
    return {
        
    }
}

export default  connect(mapStateToProps,mapDispatchToProps())(withRouter(Login) )  
