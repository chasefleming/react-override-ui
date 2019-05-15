import React, { Component } from 'react';
import style from './style.less';

const CardHeader = (props) => {
  let classes = [style.cardHeader];
  const styleOverride = props.options && props.options.override ? props.options.override : null;

  if (props.className) {
    classes.push(props.className);
  }

  return <div className={classes.join(' ')} style={styleOverride}>{props.children}</div>;
}

const CardContent = (props) => {
  let classes = [style.cardContent];
  const styleOverride = props.options && props.options.override ? props.options.override : null;

  if (props.className) {
    classes.push(props.className);
  }

  return <div className={classes.join(' ')} style={styleOverride}>{props.children}</div>;
}

export class Card extends Component {
  static Header = CardHeader;
  static Content = CardContent;

  render() {
    let classes = [style.card];
    const styleOverride = this.props.options && this.props.options.override ? props.options.override : null;
    
    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <div className="card" className={classes.join(' ')} style={styleOverride}>{this.props.children}</div>
    );
  }
}