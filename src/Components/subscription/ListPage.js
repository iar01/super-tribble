import React, { Component } from "react";

class ListPage extends Component {
  render() {
    return (
      <>
        {this.props.data.map((arr, key) => (
          <span key={key}>{arr.Point}</span>
        ))}
      </>
    );
  }
}

export default ListPage;