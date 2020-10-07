import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h1>New to This?</h1>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>

                <a href="" className="btn btn-getstarted btn-lg page-scroll">Get Started</a>

              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <img src="img/about.png" className="img-responsive" alt=""/> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
