import React, { Component } from 'react';
import style from './style.css';

const MenuItem = (props) => {
  const classes = `${props.isActive === 'true' ? style.menuitemactive : style.menuitem}`;
  const override = props.isActive ? props.options.override.isActive : null;
  return <div className={classes} style={override} onClick={props.onClick}>{props.options.text}</div>;
}

export class Menu extends Component {
  static Item = MenuItem;

  render() {
    let classes = [];
    
    if (this.props.options && this.props.options.type) {
      classes.push(style[this.props.options.type]);
    } else {
      classes.push(style.menu);
    }

    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}