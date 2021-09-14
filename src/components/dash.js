import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UcardApiCalls } from '../lib/UtilsCards'
import { CardsAction } from '../store'
import '../styles/Dash.css'

export class Dash extends Component {
    constructor(props){
        super(props)

        console.log(this.props.children)
    }

    componentDidMount(){
        this.fetchedCards()

    }

    // fetch user cards
    fetchedCards = async () =>{
        const response =  await UcardApiCalls('GET',axios)
        this.props.CardsAction('GET', response)
      } 

    render() {
        return (
            <>
            {/* <Loader></Loader> */}
            <div className="dashboardContainer">
                <div className="dashboardCenter">
                    {this.props.children}
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Cards: state.Cards
    }
}

const mapDispatchToProps = ()=> {
    return{
        CardsAction
    }
}


export default connect(mapStateToProps,mapDispatchToProps())(Dash)
