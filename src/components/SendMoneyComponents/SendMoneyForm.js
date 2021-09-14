import React, { Component } from "react";
import { connect } from "react-redux";
import { uClearAllfields, UvalidateSendMoneyFields } from "../../lib/SendMoneyUtils";
import { AAmount,ASaveUser,AReceipientWallet,APayWith,ANetwork } from "../../store";
import PayWtihSelect from "./PayWtihSelect";

export class SendMoneyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPayWithSelector: false,
      showErrorMessage: false,
      ErrorMessage: ''
    };

    this._ReceipientWallet = React.createRef()
    this._Amount = React.createRef()
    this._PayWith = React.createRef()
  }

  render() {
    return (
      <>
      <form className="sendMoneyForm">
        <input 
          onChange={e => this.props.AReceipientWallet(e.target.name,e.target.value)}
          placeholder={this.props.SelectedNetwork === "direct" ? 'User email' : 'Receipient wallet' }
          className="inputNoOutline borderRadius sendMoneyInput inputPadding"
          style={{ gridColumn: "1/3" }}
          type={this.props.SelectedNetwork === 'direct' ? 'text': 'number'} // check to see if its direct or going out to a telco
          name="RECEIPIENTWALLET"
          ref={this._ReceipientWallet}
        />
        <div className="saveUserInputContainer" style={{ gridColumn: "1/3" }}>
          <input
            onChange={e =>this.props.ASaveUser(e.target.name,e.target.value)}
            id="saveUser"
            className="sendMoneyInput pointer borderRadius"
            type="checkbox"
            name="SAVEUSER"
          />
          <label className="pointer small primary" htmlFor="saveUser">
            Save user
          </label>
        </div>
        <input
          onChange={e => this.props.AAmount(e.target.name,e.target.value)}
          placeholder="Amount"
          style={{ gridColumn: "1/2" }}
          type="number"
          min="0"
          max="2000"
          className="sendMoneyInput inputNoOutline borderRadius inputPadding"
          name="AMOUNT"
          ref={this._Amount}

        //   onChange={this.props.getFields}
        />
        <div
          onClick={() =>
            this.setState({
              showPayWithSelector: !this.state.showPayWithSelector,
            })
          }
          style={{
            border: this.state.showPayWithSelector ? "0.5px solid black" : "",
          }}
          className="payWithContainer pointer primaryBorder borderRadius"
          ref={this._PayWith}
          
        >
          <span className="small primary">Pay with</span>
          <i class="fas fa-angle-down justifyEnd primary" style={{transform: this.state.showPayWithSelector ?  'rotate(180deg)' : ''}}></i>

          {/* check for clicks on the paywith button */}
          {this.state.showPayWithSelector ? (
            <div className="payWithSelectContainer borderRadius">
              {/* {todo: add mobile money wallet } */}

              {/* map through cards */}
              {
                this.props.Cards.map((Card,key)=>(
                  <PayWtihSelect cardName={Card.cardNumber} cardNumber={Card.cardNumber} key={key}></PayWtihSelect>
                ))
              }

            </div>
          ) : null}
        </div>
      </form>
      {!this.state.showErrorMessage ? null : <p className='small danger pad1Top'>{this.state.ErrorMessage}</p>} 
      <div className="sendMoneyPayButton">
                    <button onClick={e=> UvalidateSendMoneyFields(this.props,this)} className='secondaryButton'>Pay {this.props.Amount.length < 1 ? null : "¢" }{this.props.Amount}</button>
                    <button onClick={e => uClearAllfields(this.props,this)} className='cancelButton'>Clear</button>
      </div> 
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        Cards: state.Cards,
        Amount: state.Amount,
        ReceipientWallet: state.ReciepientWallet,
        PayWith: state.PayWith,
        SelectedNetwork: state.SelectedNetwork
        }
}

const mapDispatchToProps = () => {
    return{
      AReceipientWallet,
      AAmount,
      ASaveUser,
      APayWith,
      ANetwork
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(SendMoneyForm);
