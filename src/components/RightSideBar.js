import React, { Component } from 'react'
import Cards from './rightSideBarComponents/Cards'
import { connect } from 'react-redux'
import '../styles/RightSideBar.css'
import NoCards from './rightSideBarComponents/NoCards'

export class RightSideBar extends Component {
    constructor(props){
        super(props)

        this.cardDiv = React.createRef()
    }


    // scroll cards container
    scrollCards = (button) => {

        if(button === 'left'){
             this.cardDiv.current.scrollTo({top: 0, left: -335,behavior:'smooth'})
        }

        if(button === 'right'){
            this.cardDiv.current.scrollTo({top: 0, left: 335,behavior:'smooth'})
        }
    }


    render() {
        return (
            <div className="sideBarContainer">
                <div  className='sideBarHeaders alignCenter virtualCardHeader'>
                    <h2 className="medium2 primary">Your Cards</h2>
                    <h5 className="justifyEnd"> <span>{this.props.Cards.length}</span> </h5>
                </div>

                <div style={{position:'relative'}} className="sideBarVirtualCardsContainer ">

                        {/* check to see if there are cards */}
                        {this.props.Cards.length < 1 ? null : <button  onClick={e => this.scrollCards('right')} className='CardButton1 CardButton'><i className="fas fa-chevron-right"></i></button>}
                        {this.props.Cards.length < 1 ? null : <button  onClick={e => this.scrollCards('left')} className='CardButton2 CardButton'><i className="fas fa-chevron-left"></i></button>} 

                    <div ref={this.cardDiv}  className="masterDiv">

                        {/* {check to see if user has any cards} */}
                        { this.props.Cards.length < 1 ? <NoCards></NoCards> : this.props.Cards.map((card,i) => (
                            <Cards key={i}></Cards>
                        ))}

                    </div>
                </div>

                <div className='sideBarHeaders'>
                    <h2 className="medium2 primary">Notifications</h2> 
                </div>

                <div className="sideBarNotificationsContainer">

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        Cards : state.Cards
    }
}

export default connect(mapStateToProps) (RightSideBar)
