import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UselectNetwork } from '../../lib/SendMoneyUtils'
// import { mapDispatchToProps } from '../../lib/StateMap'
import { ANetwork } from '../../store'

export class Networks extends Component {
    constructor(props){
        super(props)

        this.vodafoneN = React.createRef()
        this.mtnN = React.createRef()
        this.directN = React.createRef()

    }


    render() {
        return (
            <div className="miniHeadersMainContainer">
                <div className="miniHeadersContainer">
                    <h5 className="miniHeaders primary">Network</h5>
                </div>
                <div  className="networksContainer">
                    <div  data-network='vodafoneN' onClick={e=> UselectNetwork(e,this.props,this)} ref={this.vodafoneN} className="vodafone network borderRadius pointer primaryBorder">
                        <i class="fas fa-check-circle medium selectedNetwork"></i>
                        <div className="NetworkDetail">
                            <p className='small'>Vodafone</p>
                            <div className='caret'></div>
                        </div>
                    </div>
                    <div onClick={e=> UselectNetwork(e,this.props,this)} ref={this.mtnN} className="mtn network borderRadius pointer primaryBorder">
                        <i class="fas fa-check-circle medium selectedNetwork"></i>
                        <div className="NetworkDetail">
                            <p className='small'>MTN</p>
                            <div className='caret'></div>
                        </div>
                    </div>
                    <div onClick={e=> UselectNetwork(e,this.props,this)} ref={this.directN} className="direct network borderRadius pointer primaryBorder">
                        <i class="fas fa-check-circle medium selectedNetwork"></i>
                        <div className="NetworkDetail">
                            <p className='small'>Direct</p>
                            <div className='caret'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        SelectedNetwork: state.SelectedNetwork
    }
}

const mapDispatchToProps = () => {
    return{
        ANetwork
    }
}


export default connect(mapStateToProps,mapDispatchToProps())(Networks)
