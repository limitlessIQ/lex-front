import React, { Component } from 'react'
import noCardImage from '../../assets/noCard.png'

export class NoCards extends Component {
    render() {
        return (
            <div style={{width: '100%', display:'grid', gridTemplateRows:'1fr 50px 50px'}} className="noCardContainer">
                <img alt='a' src={noCardImage} style={{ height: '50px', width:'100%', objectFit:'contain', opacity:'0.2',objectPosition:'center'}} className='noCardImg'/>
                <h5 className="alignCenter justifyCenter primary">You dont have a card</h5>
                <button style={{width:'100px'}} className="secondaryButton justifyCenter"> Create card</button>
            </div>
        )
    }
}

export default NoCards
