import React, { Component } from 'react';
import style from './style.less';

const MenuItem = (props) => {
  const classes = `${props.isActive === 'true' ? style.menuitemactive : style.menuitem}`;
  const override = props.isActive ? props.options.override.isActive : null;
  return <div className={classes} style={override}>{props.options.text}</div>;
}

export class Menu extends Component {
  static Item = MenuItem;

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
        {this.props.children}
      </div>
    );
  }
}