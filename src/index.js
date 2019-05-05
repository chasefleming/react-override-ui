import React, { Component } from 'react';
import style from './style.css';

export class Menu extends Component {
  render() {
    let classes = [];
    
    if (this.props.options && this.props.options.type) {
      classes.push(style[this.props.options.type])
    } else {
      classes.push(style.menu)
    }

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options })
    );

    return (
      <div className={classes.join(' ')}>
        {childrenWithProps}
      </div>
    );
  }
}

export class MenuItem extends Component {
  render() {
    const isActive = this.props.isActive === 'true';
    const overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;
    const overrideActiveStyle = this.props.options && this.props.options.activeOverride ? this.props.options.activeOverride : null;
    const classes = `${this.props.isActive === 'true' ? style.menuitemactive : style.menuitem}`;
    const overrideToUse = isActive ? overrideActiveStyle : overrideStyle;
    return (
      <div className={classes} style={overrideToUse}>{this.props.name}</div>
    );
  }
}