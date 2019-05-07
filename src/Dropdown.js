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
    return <div className={style.dropdownItemIconSection}><FontAwesomeIcon icon={props.icon} className={style.dropdownItemIcon} />{props.text}</div>;
  } else {
    return <div className={style.dropdownItem}>{props.text}</div>;
  }
};

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static Menu = DropdownMenu;
  static Item = DropdownItem;

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleOpen();
    }
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options })
    );

    return (
      <div className={style.dropdown} onClick={() => this.toggleOpen()} ref={this.setWrapperRef}>
        <span>{this.props.text}</span>
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          {childrenWithProps}
        </div>
      </div>
    );
  }
}