import React, { Component } from 'react';
import style from './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownMenu = (props) => {
  return <div className="dropdown-menu">{props.children}</div>;
};

const DropdownItem = (props) => {
  if (props.options.icon) {
    return (
      <div className={style.dropdownItemIconSection} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.options.icon} className={style.dropdownItemIcon} />{props.options.text}
      </div>
    );
  } else {
    return <div className={style.dropdownItem} onClick={props.onClick}>{props.options.text}</div>;
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

  handleClickOutside(event) { // check for click outside dropdown to close
    if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleOpen();
    }
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    let dropdownContainerContent;
    let dropdownStyle = style.dropdown;

    if (this.props.options.type === 'iconOnly') {
      dropdownStyle = style.dropdownIconOnly
      this.props.options.override = { 'cursor': 'default', ...this.props.options.override };
      dropdownContainerContent = <span onClick={() => this.toggleOpen()} style={{cursor : 'pointer'}}><FontAwesomeIcon icon={this.props.options.icon} /></span>;
    } else {
      dropdownContainerContent = <span>{this.props.options.text} <FontAwesomeIcon icon='sort-down' className="icon" /></span>;
    }

    // Add class if one exists
    if (this.props.class) {
      dropdownStyle = `${dropdownStyle} ${this.props.class}`;
    }

    return (
      <div className={dropdownStyle} style={this.props.options.override} onClick={this.props.options.type !== 'iconOnly'? () => this.toggleOpen() : null} ref={this.setWrapperRef}>
        { dropdownContainerContent }
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}