import React, { Component } from "react";

export class swapsec extends Component {
  render() {
    return (
        <div id="enterSwap">
          
          <div className="row no-gutters">
            <div className="col-xs-12 col-md-6"> <img src="img/swapsec.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="enterSwap-text">
                <h1>Enter the Swap Stop</h1>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <a href="#swapsec" className="btn btn-swapsec btn-lg page-scroll">Get Started</a>
              </div>
            </div>
          </div>
        </div>
        
    )
  }
}

export default swapsec;
