import axios  from "axios";
import { Redirect } from "react-router";

//Get value of input text fields
export const UgetFields = (e,that) => {
    that.setState({
        [e.target.name] : e.target.value
    })


}

// validate fields
export const UvalidateFields = (that, from) =>{
    const messages = {
      errorFillFields: "Please fill all fields",
      errorPasswordDontMatch: "Passwords Dont match",
      errorPasswordNotUpTo: 'Password must be at least 6 characters',
      success: "ok"
    };

    // border warnings for input validation
    const inputValidationWarning = (fields) => {
        fields.forEach( (field,i) => {

            // remove warning if text field is 
            // populated
            if(field.value.length > 0)
                field.classList.remove('dangerBorder')

            // show warning if text field is empty
            if(field.value.length === 0){
                field.classList.add('dangerBorder')
                
            }
        });
    }

    // LOGIN VALIDATION
    if(from === "LOGIN" || from.toLowerCase() === 'login'){
        console.log(from)

        const {emailField,passwordField} = that

        // get Fields from LOGIN state
        const {email, password} = that.state 
        

        // validate LOGIN
        if(email.length < 1 || password.length < 1){
            that.setState({
              errors: true,
              errorMessage: messages.errorFillFields,
            });

            inputValidationWarning([emailField.current,passwordField.current])
            return
        }

        // return success if theres are no errors
        inputValidationWarning([emailField.current,passwordField.current])
        that.setState({validationSuccess: messages.success})
        return messages.success
    }

    // SIGNUP VALIDATION
    if(from === 'SIGNUP' || from.toLowerCase() === 'signup'){
        // initialize refs of input fields of signup
        const {fullNameField,emailField,passwordField,password2Field} = that

        // get Fields from SIGNUP state
        const {fullName, email, password, password2} = that.state

        // validate SINGUP 
        if(fullName.length < 1 || email.length < 1 || password.length < 1 || password2.length < 1  ){
            that.setState({
              errors: true,
              errorMessage: messages.errorFillFields,
            });

            inputValidationWarning([
              fullNameField.current,
              emailField.current,
              passwordField.current,
              password2Field.current,
            ]);

            return

        }

        // check if passwords dont match
        if(password !== password2){
            that.setState({
              errors: true,
              errorMessage: messages.errorPasswordDontMatch,
            });

            return
        }

        // check if password is more than 6 characters
        if(password.length < 5){
            that.setState({
                errors: true,
                errorMessage: messages.errorPasswordNotUpTo
            })

            return
        }

        // return success if theres are no errors
        inputValidationWarning([
            fullNameField.current,
            emailField.current,
            passwordField.current,
            password2Field.current,
          ]);
        that.setState({validationSuccess: messages.success})
        return messages.success
    }

}

// api calls
export const UapiCall = async (that, from, url) => {

    let headers = {headers: { "Content-type": "application/json"  }}

    // case Login
    if(from === 'LOGIN'){
        const {email,password} = that.state

        // make api call
            const response = await axios.post(
              url,
              { email, password },
              headers
            );

            if(response.data){
                return response
            }
        
    }

    if(from === 'SIGNUP'){
        const {fullName,email,password} = that.state

            const response = await axios.post(
              url,
              { fullName, email, password },
              headers
            );

            if(response.data){
                return response
            }
    }
}

// redirect to dashboard if user is already logged in
export const UredirectIfLogin = (from) => {
    
    const token = sessionStorage.getItem('token')
    const redirect = <Redirect to='/dash'></Redirect>

    if(from === 'LOGIN'){
        if(token)
        return redirect
    }

    if(from === 'SIGNUP'){
        if(token){
            return redirect
        }
    }
}

