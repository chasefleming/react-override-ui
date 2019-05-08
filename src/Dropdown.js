import React, { Component } from 'react';
import style from './style.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const DropdownMenu = (props) => {
  return <div className="dropdown-menu">{props.children}</div>;
};

const DropdownItem = (props) => {
  if (props.options.type === 'iconOnly') {
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

  handleClickOutside(event) { // check for click outside dropdown to close
    if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleOpen();
    }
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render () {
    if (this.props.options.type === 'iconOnly') {
      this.props.options.override = { 'cursor': 'default', ...this.props.options.override };
    };

    return (
      <div className={style.dropdown} style={this.props.options.override} onClick={this.props.options.type !== 'iconOnly'? () => this.toggleOpen() : null} ref={this.setWrapperRef}>
        { this.props.options.type !== 'iconOnly' && <span>{this.props.options.text}</span> }
        { this.props.options.type === 'iconOnly' && <span onClick={() => this.toggleOpen()} style={{cursor : 'pointer'}}><FontAwesomeIcon icon={this.props.options.icon} /></span>}
        <div className={this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}