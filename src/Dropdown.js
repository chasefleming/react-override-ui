import React, { Component } from 'react';
import style from './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DropdownMenu = (props) => {
  const childrenWithProps = React.Children.map(props.children, child =>
    React.cloneElement(child, { options: props.options })
  );
  return <div className="dropdown-menu">{childrenWithProps}</div>;
};

const DropdownItem = (props) => {
  if (props.icon) {
    return <div><FontAwesomeIcon icon={props.icon} />{props.text}</div>;
  } else {
    return <div>{props.text}</div>;
  }
};

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  static Menu = DropdownMenu;
  static Item = DropdownItem;

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options })
    );

    return (
      <div className={style.dropdown} onClick={() => this.toggleOpen()}>
        <span>{this.props.text}</span>
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}