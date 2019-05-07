import React, { Component } from 'react';
import style from './style.css';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    return (
      <div className={style.dropdown} onClick={() => this.toggleOpen()}>
        <span>{this.props.text}</span>
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          <p>Dropdown Content</p>
        </div>
      </div>
    );
  }
}