import React, { Component } from 'react'
import AccountDetails from './leftSideBarComponents/AccountDetails'
import Links from './leftSideBarComponents/Links'
import AccountSettingsLogout from './leftSideBarComponents/AccountSettingsLogout'
import '../styles/LeftSideBar.css'


export class LeftSideBar extends Component {
    render() {
        return (
            <div className="leftSideBarContainer">
                <AccountDetails></AccountDetails>
                <Links></Links>
                <AccountSettingsLogout></AccountSettingsLogout>
            </div>
        )
    }
}

export default LeftSideBar
