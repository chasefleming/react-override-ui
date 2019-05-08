import React, { Component } from 'react';
import style from './style.less';

export class Input extends Component {
  render () {
    const { placeholder } = this.props;
    const overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;

    return (
      <input type="text" placeholder={placeholder} className={style.input} style={overrideStyle} />
    );
  }
}