import React, { Component } from 'react'

export class AccountDetails extends Component {
    render() {

        return (
            <div style={containerCss}>
                <div style={profilePictureCss} className="profilePicture "></div>
                <h5 className="alignCenter primary small">User name</h5>
            </div>
        )
    }
}

const containerCss = {
    // backgroundColor: 'rgb(226, 226, 226)',
    padding: '10px 20px',
    height: '89px',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridTemplateRows:'1fr',
    // alignItems: 'center'
    gridColumnGap: '10px',
    // border: '1px solid rgb(226, 226, 226)'
}

const profilePictureCss = {
    // width: '',
    // height: '25px',
    border: '1px solid gray',
    borderRadius: '50%'
}

export default AccountDetails
