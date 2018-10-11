import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Square.propTypes = {
  num: PropTypes.number,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
