
import React, { Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {donationAmount: 0};
        /*{
            donorCount: num,
            moneyRaised: num,
            updateMoneyRaised: func,
            updateDonorCount: func,
        }*/
        this.giveNow = this.giveNow.bind(this);
        this.formInput = this.formInput.bind(this);
    }

    giveNow (){
        this.props.updateMoneyRaised(this.state.donationAmount);
        this.props.updateDonorCount(this.props.donorCount+1);
    }
    formInput (e) {
        const inputValue = e.target.value;
        const onlyDigits = inputValue.replace(/\D/g,'');
        this.setState({donationAmount: onlyDigits});      
    }
    
    render(){
        let donorPhrase;
        switch (this.props.donorCount) {
            case 0:
                donorPhrase = (<p>Be the first donor to support this project!</p>);
                break;
            case 1:
                donorPhrase = (<p>Join with <strong>1</strong> other donor who has already supported this project.</p>);
                break;
            default:
                donorPhrase = (<p>Join the other <strong>{this.props.donorCount}</strong> donors who have already supported this project.</p>);
        }

        return(
            <div className="card">
                {this.props.children}
                <h1>Only four days left to fund this project</h1>
                {donorPhrase}  

                <div className="donationComboElement">
                    <input 
                        type="number"
                        pattern="[0-9]" 
                        id="amount" 
                        min="5"
                        onChange={this.formInput}
                        value={this.state.donationAmount}
                    />
                    <button disabled={this.state.donationAmount<5} onClick={this.giveNow}>Give Now</button>                    
                </div>
            </div>
        )
    }
}

export default Form;