import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    if (this.state.value < 10) {
      this.setState(state => ({
        value: state.value + this.props.step,
      }));
    } else {
      this.setState(state => ({
        value: 10,
      }));
    }
  };

  handleDecrement = () => {
    if (this.state.value > 1) {
      this.setState(state => ({
        value: state.value - this.props.step,
      }));
    } else {
      this.setState(state => ({
        value: 1,
      }));
    }
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <p
          className="counter"
          style={{ fontSize: 40, fontFamily: 'monospace' }}
        >
          {value}/10
        </p>
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
