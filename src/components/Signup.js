import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AnimateLogin } from '../store'
import { Link } from 'react-router-dom'
import Spinner from 'react-loader-spinner'
import { UapiCall, UgetFields, UvalidateFields,UredirectIfLogin } from '../lib/utils'
import { apiEndPoints } from '../lib/apiEndPoints'
import TopNav from './TopNav'
import '../styles/Signup.css'
import Footer from './Footer'


export class Signup extends Component {
    constructor(props){
        super(props)

        this.state = {
            errorMessage: '',
            errors: false,
            email: '',
            password:'',
            fullName: '',
            password2: '',
            validationSuccess: '',
            teaserTextsCounter: 0,
            teaserTexts: ['VIRTUAL CARDS','SECURE CHANNELS']
        }

        this.teaserTextElement = React.createRef()
        this.fullNameField = React.createRef()
        this.emailField = React.createRef()
        this.passwordField = React.createRef()
        this.password2Field = React.createRef()

    }

    componentDidMount(){
      this.animteTeaser()
      this.fullNameField.current.focus()
    }
    
    signUp = async (e) => {
        e.preventDefault()
        const validate =  UvalidateFields(this, 'SIGNUP')

        if(validate === 'ok'){
            this.setState({errors: false, errorMessage: ''})    

            const response = await UapiCall(this,'SIGNUP', `${apiEndPoints.baseUrl}/users/register` )

            if(response.data.error){
                this.setState({errors: true, errorMessage: response.data.error, validationSuccess: ''})
              }

            console.log(response)
        }
    }

    getFields = (e) => {
        UgetFields(e,this)
    }

    animteTeaser = () => {


      setInterval(() => { 
        
        // if(this.teaserTextElement.current !== null)
        //   this.teaserTextElement.current.textContent = this.state.teaserTexts[this.state.teaserTextsCounter]

        this.setState({teaserTextsCounter: this.state.teaserTextsCounter + 1})

        if(this.state.teaserTextsCounter > 1){
          this.setState({teaserTextsCounter: 0})

        }
        
      }, 4000);
    }


    render() {
        return (
          <>
          {UredirectIfLogin('SIGNUP')}
          <TopNav></TopNav>
          <div className=" mainContainerCol2">
            <div className="centerContainer4max6 justifyEnd whiteWithOpacity white borderPrimary borderRadius ">
              <form className="signupForm">
                <h2  className=" secondaryText">
                  Sign up
                </h2>

                <label className=" primary" htmlFor="fullName">
                  Full name
                </label>
                <input
                  onChange={this.getFields}
                  className="inputPadding opacityMedium borderPrimary inputNoOutline inputRadius"
                  type="text"
                  name="fullName"
                  id="fullName"
                  ref={this.fullNameField}
                />

                <label className=" primary" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={this.getFields}
                  className="inputPadding borderPrimary opacityMedium inputNoOutline inputRadius"
                  type="email"
                  name="email"
                  id="email"
                  ref={this.emailField}
                />

                <label className=" primary" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.getFields}
                  className="inputPadding borderPrimary opacityMedium inputNoOutline inputRadius"
                  type="password"
                  name="password"
                  id="password"
                  ref={this.passwordField}
                />

                <label className=" primary" htmlFor="password2">
                  Conirm password
                </label>
                <input
                  onChange={this.getFields}
                  className="inputPadding borderPrimary opacityMedium inputNoOutline inputRadius"
                  type="password"
                  name="password2"
                  id="password2"
                  ref={this.password2Field}
                />

                <p className="primary small marginBottom danger">
                  {this.state.errorMessage}
                </p>
                <button
                  onClick={this.signUp}
                  className="secondaryButton medium "
                >

                    { this.state.validationSuccess === 'ok' ?  <Spinner width={100} type='TailSpin' color="white" height='20px'></Spinner> : 'Sign up' }
                </button>
                <p className="centerVertical primary">
                  Already have an account{" "}
                  <Link
                    to="/"
                    onClick={this.props.AnimateLogin}
                    className="secondaryColor"
                  >
                    Login
                  </Link>{" "}
                </p>
              </form>
            </div>
            <div className="teaser justifyStart colorWhite someTex">
              <h1 className="medium3">Access <span className="">free</span>  </h1>
               <h1 ref={this.teaserTextElement} className="large slid ts"> {this.state.teaserTexts[this.state.teaserTextsCounter] ? this.state.teaserTexts[this.state.teaserTextsCounter]: null } </h1>
              <h1 className="medium3">for <span className="">30</span> days </h1>
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

const mapDispatchToProps = () => {
    return{
        AnimateLogin
    }
}



export default connect(mapStateToProps,mapDispatchToProps())(Signup)
