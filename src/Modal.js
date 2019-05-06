import React, { Component } from 'react';
import style from './style.css';

const ModalContent = (props) => {
  const overrideStyle = props.options && props.options.override ? props.options.override : null;
  return <div className={style.modalContent} style={overrideStyle}>{props.children}</div>;
}

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen }
    this.closeModal = this.closeModal.bind(this)
  }

  static Content = ModalContent;

  closeModal() {
    this.setState({ isOpen: false });
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options })
    );

    let displaySetting = {
      display: this.state.isOpen === 'true' ? 'flex' : 'none'
    }

    return (
      <div className={style.modal} style={displaySetting} onClick={() => this.closeModal()}>
        {childrenWithProps}
      </div>
    );
  }
}