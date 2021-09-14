import React, { Component } from 'react'
import '../../styles/Card.css'

export class Cards extends Component {
    render() {
        return (
            
            <div style={{margin:'2px', position:'relative'}} className="cardContainer ">
                <div className='card '>
                    <div className="cardNumberContainer">
                        <h5 className='cardnumber small'>•••• 5432</h5>
                    </div>
                    <div className="totalBalanceContainer">
                        <p style={{color:'white'}} className="colorWhite small ">Total balance</p>
                        <h3 className='amount'><span>$</span><span className="pagesHeader">200.12</span></h3>
                    </div>
                </div>
            </div>

        )
    }
}

export default Cards
