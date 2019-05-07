import React, { Component } from 'react';
import style from './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DropdownMenu = (props) => {
  return <div className="dropdown-menu">{props.children}</div>;
};

const DropdownItem = (props) => {
  if (props.options.icon) {
    return <div className={style.dropdownItemIconSection}><FontAwesomeIcon icon={props.options.icon} className={style.dropdownItemIcon} />{props.options.text}</div>;
  } else {
    return <div className={style.dropdownItem}>{props.options.text}</div>;
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
    return (
      <div className={style.dropdown} style={this.props.options.override} onClick={() => this.toggleOpen()} ref={this.setWrapperRef}>
        { this.props.options.text && <span>{this.props.options.text}</span> }
        { this.props.options.icon && <FontAwesomeIcon icon={this.props.options.icon} /> }
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}