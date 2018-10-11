import React, { Component } from 'react';

class Square extends Component {
  onClickSquare = () => {
    this.props.onClick(this.props.num);
  };
  render() {
    return (
      <button className="square" onClick={this.onClickSquare}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
