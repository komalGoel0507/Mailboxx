/*import React, { Component } from "react";
import Firstpage from "./Firstpage";

export class LoginProcess extends Component {
  state = {
    step: 1,
    mailId: "",
    Password: ""
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { mailId, Password } = this.state;
    const values = { mailId, Password };
    switch (step) {
      case 1:
        return (
          <LoginPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <Firstpagetoru\\\ />;
    }
  }
}

export default LoginProcess;
*/
