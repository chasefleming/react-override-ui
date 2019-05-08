import React, { Component } from 'react';
import style from './style.less';

const ModalContent = (props) => {
  const overrideStyle = props.options && props.options.override ? props.options.override : null;
  return <div id="modalContent" className={style.modalContent} style={overrideStyle}>{props.children}</div>;
}

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen };
    this.closeModal = this.closeModal.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  static Content = ModalContent;

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
    if (event.target && event.target.id === 'modalContent') {
      return;
    }

    this.closeModal();
  }

  closeModal() {
    if (this.props.onClose) {
      this.props.onClose();
    }

    this.setState({ isOpen: false });
  }

  
  render () {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { options: this.props.options })
    );

    let displaySetting = {
      display: (this.props.isOpen === 'true' || String(this.props.isOpen) === 'true') ? 'flex' : 'none'
    };

    return (
      <div className={style.modal} style={displaySetting}>
        {childrenWithProps}
      </div>
    );
  }
}