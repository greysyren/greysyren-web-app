import React, { Component } from "react";

export class quoteblock extends Component {
  render() {
    return (
      <div id="quoteblock" className="text-center">
        <div className="quote">{this.props.data ? this.props.data.quote : "Loading"}</div>
        <div className="author">{this.props.data ? this.props.data.author : "Loading"}</div>
      </div>
    );
  }
}

export default quoteblock;
