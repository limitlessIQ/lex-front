import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../lib/StateMap'
import { APayWith } from '../../store'

export class PayWtihSelect extends Component {
    constructor(props){
        super(props)

        this.CardNumber = React.createRef()
    }

    getClickedCard = () =>{
       const cardNumber = this.props.cardNumber
       this.props.APayWith('PAY WITH',cardNumber)
    }

    render() {
        return (
            <button onClick={this.getClickedCard} className="primaryBorder payWithSelect pointer">
                {''}
                <span className="primary">{this.props.cardName}</span>{''}
                <span className="primary">{this.props.CardNumber}</span>{''}
             </button>
        )
    }
}



export default connect(null, mapDispatchToProps({APayWith})) (PayWtihSelect)
