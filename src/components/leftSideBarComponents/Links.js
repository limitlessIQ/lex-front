import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'
import '../../styles/Links.css'



export class Links extends Component {
    constructor(props){
        super(props)

        this.clearHoverOnAciveLink()
    }

    componentDidMount(){
        this.clearHoverOnAciveLink()

    }

    // stop active links from hovering
    clearHoverOnAciveLink = () => {
        let links = document.querySelectorAll('a')

        links.forEach(link=> {
            if(link.classList.contains('activeLink')){
                link.classList.remove('leftSideBarLink')


            }

            console.log(link.classList)
        })

    }

    render() {
        return (
            <div style={LinksContainer}>
                <NavLink activeClassName="activeLink" className="primary leftSideBarLink" to="/dash" style={Linkcss}><i class="fas fa-exchange-alt justifyVertical"></i><span >Dashboard</span> </NavLink>
                <NavLink activeClassName="activeLink" className="primary leftSideBarLink" to="/dash1" style={Linkcss}><i class="fas fa-credit-card"></i> <span>Virtual Cards</span> </NavLink>
                <NavLink activeClassName="activeLink" className="primary leftSideBarLink" to="/secureChannel" style={Linkcss}><i class="fas fa-shield-alt"></i> <span>Secure chanel</span> </NavLink>
                <NavLink activeClassName="activeLink" className="primary leftSideBarLink" to="/transactions" style={Linkcss}><i class="fas fa-history"></i> <span>Transactions</span> </NavLink>
            </div>
        )
    }
}

 const LinksContainer =  {
    display: 'grid',
    height: '200px',
    // alignItems:'center',
    padding: '10px 15px',
    gridTemplateRows: 'repeat(4,50px)',
    gridRowGap: '5px'
}

const Linkcss = {display:"grid", alignItems:'center',gridTemplateColumns:'50px 1fr',borderRadius:'10px'}

export default Links


