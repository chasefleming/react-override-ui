import React, { Component } from 'react';
import style from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Icon extends Component {
  render () {
    return (
      <FontAwesomeIcon icon={this.props.icon} />
    );
  }
}