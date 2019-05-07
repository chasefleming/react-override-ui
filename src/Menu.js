import React, { Component } from 'react';
import style from './style.less';

const MenuItem = (props) => {
  const isActive = props.isActive === 'true';
  const overrideStyle = props.options && props.options.override ? props.options.override : null;
  const overrideActiveStyle = props.options && props.options.activeOverride ? props.options.activeOverride : null;
  const classes = `${props.isActive === 'true' ? style.menuitemactive : style.menuitem}`;
  const overrideToUse = isActive ? overrideActiveStyle : overrideStyle;
  return <div className={classes} style={overrideToUse}>{props.name}</div>;
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
        {childrenWithProps}
      </div>
    );
  }
}