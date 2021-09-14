import React, { Component } from 'react'
import Loader from './Loader'
import SavedUsers from './SendMoneyComponents/SavedUsers'
import SendMoneyForm from './SendMoneyComponents/SendMoneyForm'
import Networks from './SendMoneyComponents/Networks'


import '../styles/SendMoney.css'
import { connect } from 'react-redux'

export class SendMoney extends Component {
    constructor(props){
        super(props)

        this.state = {
            ReciepientWallet : ''
        }
    }

    render() {
        return (
            <div className="pagesMiddleContainer " style={{border:'1px solid rgb(226, 226, 226)',position: 'relative'}}>
                <Loader></Loader>
                <div className="pagesHeaderContainer"><h2 className="pagesHeader">Send money</h2></div> 
                <SavedUsers></SavedUsers>
                <Networks></Networks>   
                <SendMoneyForm></SendMoneyForm>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        Amount: state.Amount,
        SavedUsers: state.SavedUsers
    }
}

export default connect(mapStateToProps) (SendMoney)
