
import React, { Component} from "react";
import Form from './Form';
import TotalAmountSpeechBubble from './TotalAmountSpeechBubble';
import ProgressBar from './ProgressBar';
import "./App.css";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            donorCount: 11,
            moneyRaised: 3750,
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

    render (){ return(
      <div className="App">

        <TotalAmountSpeechBubble totalAmount={this.state.moneyRaised} />
        <Form 
            donorCount={this.state.donorCount}
            moneyRaised={this.state.moneyRaised}
            updateMoneyRaised={this.updateMoneyRaised}
            updateDonorCount={this.updateDonorCount}
        >
            <ProgressBar totalAmount={this.state.moneyRaised}/>
        </Form>
      </div>
    );
  }
}




export default App;
