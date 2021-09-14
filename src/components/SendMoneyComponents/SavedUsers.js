import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiEndPoints } from '../../lib/apiEndPoints'
import { UFetchSavedUsers } from '../../lib/SendMoneyUtils'
import { mapDispatchToProps } from '../../lib/StateMap'
import { ASavedUsers } from '../../store'

export class SavedUsers extends Component {
    constructor(props){
        super(props)

        this.state = {
            showComponent: false
        }
    }

    componentDidMount(){
        this.LoadSavedUsers()
    }

    LoadSavedUsers = async () => {
        let results = await UFetchSavedUsers(axios,`${apiEndPoints.baseUrl}/users/savedUsers`)
            // set state to false if the array is empty
            if(!results){
                    this.setState({showComponent: false})
                }
            
            // set state to true if the array is not empty
            if(results.length > 0){
                    // dispatch to global state
                    this.props.ASavedUsers( results)
                    this.setState({showComponent: true})
            }


    }

    render() {
        return (
                <>
               {!this.state.showComponent ? null : <div className='miniHeadersMainContainer '>
               <div className="miniHeadersContainer">
                   <h5 className="miniHeaders primary"><span>Saved Users</span>  </h5>
               </div>

               <div className="savedUsersContainer">
                   {this.props.SavedUsers.map((savedUser,key)=>(
                       <div key={key} className="savedUser pointer"><img src="" alt="" /></div>
                   ))}
                   
                   {/* <div className="savedUser pointer"></div> */}
               </div>
                 </div>  }  
             </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        SavedUsers: state.SavedUsers
    }
}


export default connect(mapStateToProps, mapDispatchToProps({ASavedUsers})) (SavedUsers)
