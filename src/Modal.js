import React, { Component } from 'react';
import style from './style.css';

export class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  
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
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeModal();
    }
  }

  render() {
    const overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;
    return (
      <div ref={this.setWrapperRef} className={style.modalContent} style={overrideStyle}>{this.props.children}</div>
    );
  }
}

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen };
    this.closeModal = this.closeModal.bind(this);
  }

  static Content = ModalContent;

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
    }

    this.setState({ isOpen: false });
  }

  
  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options, closeModal: this.closeModal })
    )

    return (
      <div className={`${style.modal} ${(this.props.isOpen === 'true' || String(this.props.isOpen) === 'true') ? style.modalActive : null}`}>
        {childrenWithProps}
      </div>
    );
  }
}