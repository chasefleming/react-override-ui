import React, { Component } from 'react';
import style from './style.css';

export class Input extends Component {
  render () {
    const { placeholder } = this.props;
    const overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;

    return (
      <input type="text" placeholder={placeholder} defaultValue={this.props.defaultValue} value={this.props.value} onChange={this.props.onChange} className={style.input} style={overrideStyle} />
    );
  }
}