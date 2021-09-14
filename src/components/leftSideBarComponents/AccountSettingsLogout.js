import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/AccountSettingsLogout.css'


export class AccountSettingsLogout extends Component {
    render() {
        return (
            <div style={LinksContainer}>
                <Link className='primary settingsLink'  style={Linkcss}><i className="fas fa-cog"></i> <span>Settings</span> </Link>
                <Link className='primary logoutLink' style={Linkcss}><i className="fas fa-sign-out-alt"></i>  <span>Logout</span> </Link>
            </div>
        )
    }
}

 const LinksContainer =  {
    display: 'grid',
    height: '10px',
    // alignItems:'center',
    padding: '10px 15px',
    gridTemplateRows: 'repeat(2,30px)',
    gridRowGap: '5px'
}

const Linkcss = {display:"grid", alignItems:'center',gridTemplateColumns:'50px 1fr',borderRadius:'10px'}


export default AccountSettingsLogout
