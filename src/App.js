import React, { Component} from "react";
import "./App.css";


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
        this.state = {value: '', isValid: false, untouched: true};
    }

    render(){
        let donorPhrase;
        switch (this.props.donorCount) {
            case 0:
                donorPhrase = (<p>Be the first donor to support this project!</p>);
                break;
            case 1:
                donorPhrase = (<p>Join with <strong>1</strong>} other donor who has already supported this project.</p>);
                break;
            default:
                donorPhrase = (<p>Join the other <strong>{this.props.donorCount}</strong> donors who have already supported this project.</p>);
        }

        return(
            <div className="card">
                <h3>Only four days left to fund this project</h3>
                {donorPhrase}  

                <div className="donationComboElement">
                    <input type="text" id="amount" value={this.state.donationAmount}/>
                    <button>Give Now</button>                    
                </div>
            </div>
        )
    }
}



class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            donorCount: 0,
            moneyRaised: 0,
        };
        this.updateDonorCount = this.updateDonorCount.bind(this);
        this.updateMoneyRaised = this.updateMoneyRaised.bind(this);
    }
    updateDonorCount (newCount){
        this.setState(prevState=>({
            ...prevState,
            donorCount: newCount
        }));        
    }

    updateMoneyRaised (newAmount){
        this.setState(prevState=>({
            ...prevState,
            moneyRaised: newAmount
        }));
    }

    render(){
    
    return(
      <div className="App">

        <TotalAmountSpeechBubble totalAmount={123} />
        <Form 
            donorCount={5}
            moneyRaised={364}
            updateMoneyRaised={this.updateMoneyRaised}
            updateDonorCount={this.updateDonorCount}
        />
        <h1> Hello, World! </h1>
      </div>
    );
  }
}
 
function TotalAmountSpeechBubble (props) {
    return (
        <div className="totalAmountSpeechBubble">
            ${props.totalAmount} some text
        </div>
    )
}






export default App;