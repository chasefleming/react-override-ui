(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('@fortawesome/react-fontawesome'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-brands-svg-icons'), require('@fortawesome/free-solid-svg-icons')) :
  typeof define === 'function' && define.amd ? define(['react', '@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons'], factory) :
  (global['react-override-ui'] = factory(global.React,global.reactFontawesome,global.fontawesomeSvgCore,global.freeBrandsSvgIcons,global.freeSolidSvgIcons));
}(this, (function (React,reactFontawesome,fontawesomeSvgCore,freeBrandsSvgIcons,freeSolidSvgIcons) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);\n\n.style_dropdown__1iLEP {\n  position: relative;\n  display: inline-block;\n  min-width: 160px;\n  cursor: pointer;\n  padding: 8px 12px;\n  color: rgba(0,0,0,.87);\n  font-size: 12px;\n  border: 1px solid rgba(34,36,38,.15);\n  border-radius: 3px;\n  text-align: center;\n}\n\n.style_dropdownIconOnly__zKeTR {\n  position: relative;\n  display: inline-block;\n  min-width: 160px;\n  cursor: pointer;\n}\n\n\n.style_dropdownContent__3Scfa {\n  display: none;\n  position: absolute;\n  text-align: left;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: @box-shadow;\n  z-index: 10;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.style_dropdownContentOpen__3QnrS {\n  display: block;\n  position: absolute;\n  text-align: left;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: @box-shadow;\n  z-index: 10;\n  border-radius: 3px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.style_dropdownItem__3ibdF {\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px 16px;\n  cursor: pointer;\n}\n\n.style_dropdownItem__3ibdF:hover {\n  background: #f2f2f2;\n}\n\n.style_dropdownItemIconSection__1pvPO {\n  font-size: 12px;\n  font-weight: 400;\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.style_dropdownItemIconSection__1pvPO:hover {\n  background: #f2f2f2;\n}\n\n.style_dropdownItemIcon__2MCIn {\n  margin-right: 10px;\n  font-size: 14px;\n}\n\n.style_input__ddhtL {\n  padding: 8px 12px;\n  color: rgba(0,0,0,.87);\n  font-size: 12px;\n  border: 1px solid rgba(34,36,38,.15);\n  border-radius: 3px;\n}\n\n.style_menu__3MX_3 {\n  display: flex;\n}\n\n.style_lined__2W4x5 {\n  display: flex;\n  border-bottom: 2px solid rgba(34,36,38,.15);\n}\n\n.style_menuitem__4BR2k {\n  cursor: pointer;\n  font-size: 14px;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  padding: 12px 16px;\n  margin: 0 0 -2px;\n  color: rgba(0,0,0,.87);\n}\n\n.style_menuitemactive__2NnB3 {\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: #1b1c1d;\n  padding: 12px 16px;\n  margin: 0 0 -2px;\n  color: rgba(0,0,0,.95);\n}\n\n.style_modal__L4bgu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.3s ease-out;\n}\n\n.style_modalActive__1cDEg {\n  opacity: 1;\n  visibility: visible;\n}\n\n.style_modalContent__2PzaO {\n  background-color: #fefefe;\n  padding: 20px;\n  min-width: 100px;\n  max-width: 80%;\n  min-height: 100px;\n  border-radius: 3px;\n}\n\n.style_card__u2KDx {\n  border-radius: 3px;\n  box-shadow: 0 4px 10px -6px #cbcbcb;\n  border: 1px solid #eaeaea;\n}\n\n.style_cardHeader__1Vgdv {\n  padding: 13px;\n  font-size: 15px;\n  font-weight: 700;\n  border-bottom: 1px solid #eaeaea;\n}\n\n.style_cardContent__2JTKS {\n  padding: 13px;\n  font-size: 13px;\n}";
  var style = { "dropdown": "style_dropdown__1iLEP", "dropdownIconOnly": "style_dropdownIconOnly__zKeTR", "dropdownContent": "style_dropdownContent__3Scfa", "dropdownContentOpen": "style_dropdownContentOpen__3QnrS", "dropdownItem": "style_dropdownItem__3ibdF", "dropdownItemIconSection": "style_dropdownItemIconSection__1pvPO", "dropdownItemIcon": "style_dropdownItemIcon__2MCIn", "input": "style_input__ddhtL", "menu": "style_menu__3MX_3", "lined": "style_lined__2W4x5", "menuitem": "style_menuitem__4BR2k", "menuitemactive": "style_menuitemactive__2NnB3", "modal": "style_modal__L4bgu", "modalActive": "style_modalActive__1cDEg", "modalContent": "style_modalContent__2PzaO", "card": "style_card__u2KDx", "cardHeader": "style_cardHeader__1Vgdv", "cardContent": "style_cardContent__2JTKS" };
  styleInject(css);

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var CardHeader = function CardHeader(props) {
    var classes = [style.cardHeader];
    var styleOverride = props.options && props.options.override ? props.options.override : null;

    if (props.className) {
      classes.push(props.className);
    }

    return React__default.createElement(
      'div',
      { className: classes.join(' '), style: styleOverride },
      props.children
    );
  };

  var CardContent = function CardContent(props) {
    var classes = [style.cardContent];
    var styleOverride = props.options && props.options.override ? props.options.override : null;

    if (props.className) {
      classes.push(props.className);
    }

    return React__default.createElement(
      'div',
      { className: classes.join(' '), style: styleOverride },
      props.children
    );
  };

  var Card = function (_Component) {
    inherits(Card, _Component);

    function Card() {
      classCallCheck(this, Card);
      return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    createClass(Card, [{
      key: 'render',
      value: function render() {
        var _React$createElement;

        var classes = [style.card];
        var styleOverride = this.props.options && this.props.options.override ? props.options.override : null;

        if (this.props.className) {
          classes.push(this.props.className);
        }

        return React__default.createElement(
          'div',
          (_React$createElement = { className: 'card' }, defineProperty(_React$createElement, 'className', classes.join(' ')), defineProperty(_React$createElement, 'style', styleOverride), _React$createElement),
          this.props.children
        );
      }
    }]);
    return Card;
  }(React.Component);
  Card.Header = CardHeader;
  Card.Content = CardContent;

  var Icon = function (_Component) {
    inherits(Icon, _Component);

    function Icon() {
      classCallCheck(this, Icon);
      return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    createClass(Icon, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(reactFontawesome.FontAwesomeIcon, { icon: this.props.icon });
      }
    }]);
    return Icon;
  }(React.Component);

  var Input = function (_Component) {
    inherits(Input, _Component);

    function Input() {
      classCallCheck(this, Input);
      return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    createClass(Input, [{
      key: 'render',
      value: function render() {
        var placeholder = this.props.placeholder;

        var overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;

        return React__default.createElement('input', { type: 'text', placeholder: placeholder, defaultValue: this.props.defaultValue, value: this.props.value, onChange: this.props.onChange, className: style.input, style: overrideStyle });
      }
    }]);
    return Input;
  }(React.Component);

  var DropdownMenu = function DropdownMenu(props) {
    return React__default.createElement(
      'div',
      { className: 'dropdown-menu' },
      props.children
    );
  };

  var DropdownItem = function DropdownItem(props) {
    if (props.options.icon) {
      return React__default.createElement(
        'div',
        { className: style.dropdownItemIconSection, onClick: props.onClick },
        React__default.createElement(reactFontawesome.FontAwesomeIcon, { icon: props.options.icon, className: style.dropdownItemIcon }),
        props.options.text
      );
    } else {
      return React__default.createElement(
        'div',
        { className: style.dropdownItem, onClick: props.onClick },
        props.options.text
      );
    }
  };

  var Dropdown = function (_Component) {
    inherits(Dropdown, _Component);

    function Dropdown(props) {
      classCallCheck(this, Dropdown);

      var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

      _this.state = { isOpen: false };
      _this.toggleOpen = _this.toggleOpen.bind(_this);

      _this.setWrapperRef = _this.setWrapperRef.bind(_this);
      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    createClass(Dropdown, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: 'setWrapperRef',
      value: function setWrapperRef(node) {
        this.wrapperRef = node;
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(event) {
        // check for click outside dropdown to close
        if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.toggleOpen();
        }
      }
    }, {
      key: 'toggleOpen',
      value: function toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var dropdownContainerContent = void 0;
        var dropdownStyle = style.dropdown;

        if (this.props.options.type === 'iconOnly') {
          dropdownStyle = style.dropdownIconOnly;
          this.props.options.override = _extends({ 'cursor': 'default' }, this.props.options.override);
          dropdownContainerContent = React__default.createElement(
            'span',
            { onClick: function onClick() {
                return _this2.toggleOpen();
              }, style: { cursor: 'pointer' } },
            React__default.createElement(reactFontawesome.FontAwesomeIcon, { icon: this.props.options.icon })
          );
        } else {
          dropdownContainerContent = React__default.createElement(
            'span',
            null,
            this.props.options.text,
            ' ',
            React__default.createElement(reactFontawesome.FontAwesomeIcon, { icon: 'sort-down', className: 'icon' })
          );
        }

        // Add class if one exists
        if (this.props.class) {
          dropdownStyle = dropdownStyle + ' ' + this.props.class;
        }

        return React__default.createElement(
          'div',
          { className: dropdownStyle, style: this.props.options.override, onClick: this.props.options.type !== 'iconOnly' ? function () {
              return _this2.toggleOpen();
            } : null, ref: this.setWrapperRef },
          dropdownContainerContent,
          React__default.createElement(
            'div',
            { className: this.state.isOpen ? style.dropdownContentOpen : style.dropdownContent },
            this.props.children
          )
        );
      }
    }]);
    return Dropdown;
  }(React.Component);
  Dropdown.Menu = DropdownMenu;
  Dropdown.Item = DropdownItem;

  var MenuItem = function MenuItem(props) {
    var classes = '' + (props.isActive === 'true' ? style.menuitemactive : style.menuitem);
    var override = props.isActive ? props.options.override.isActive : null;
    return React__default.createElement(
      'div',
      { className: classes, style: override, onClick: props.onClick },
      props.options.text
    );
  };

  var Menu = function (_Component) {
    inherits(Menu, _Component);

    function Menu() {
      classCallCheck(this, Menu);
      return possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    createClass(Menu, [{
      key: 'render',
      value: function render() {
        var classes = [];

        if (this.props.options && this.props.options.type) {
          classes.push(style[this.props.options.type]);
        } else {
          classes.push(style.menu);
        }

        return React__default.createElement(
          'div',
          { className: classes.join(' ') },
          this.props.children
        );
      }
    }]);
    return Menu;
  }(React.Component);
  Menu.Item = MenuItem;

  var ModalContent = function (_Component) {
    inherits(ModalContent, _Component);

    function ModalContent(props) {
      classCallCheck(this, ModalContent);

      var _this = possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this, props));

      _this.setWrapperRef = _this.setWrapperRef.bind(_this);
      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }

    createClass(ModalContent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: 'setWrapperRef',
      value: function setWrapperRef(node) {
        this.wrapperRef = node;
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(event) {
        // check for click outside dropdown to close
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.props.closeModal();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var overrideStyle = this.props.options && this.props.options.override ? this.props.options.override : null;
        return React__default.createElement(
          'div',
          { ref: this.setWrapperRef, className: style.modalContent, style: overrideStyle },
          this.props.children
        );
      }
    }]);
    return ModalContent;
  }(React.Component);

  var Modal = function (_Component2) {
    inherits(Modal, _Component2);

    function Modal(props) {
      classCallCheck(this, Modal);

      var _this2 = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

      _this2.state = { isOpen: props.isOpen };
      _this2.closeModal = _this2.closeModal.bind(_this2);
      return _this2;
    }

    createClass(Modal, [{
      key: 'closeModal',
      value: function closeModal() {
        if (this.props.onClose) {
          this.props.onClose();
        }

        this.setState({ isOpen: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var childrenWithProps = React__default.Children.map(this.props.children, function (child) {
          return React__default.cloneElement(child, { options: _this3.props.options, closeModal: _this3.closeModal });
        });

        return React__default.createElement(
          'div',
          { className: style.modal + ' ' + (this.props.isOpen === 'true' || String(this.props.isOpen) === 'true' ? style.modalActive : null) },
          childrenWithProps
        );
      }
    }]);
    return Modal;
  }(React.Component);
  Modal.Content = ModalContent;

  fontawesomeSvgCore.library.add(freeBrandsSvgIcons.fab, freeSolidSvgIcons.faHeart, freeSolidSvgIcons.faSortDown, freeSolidSvgIcons.faEllipsisV, freeSolidSvgIcons.faFolderPlus, freeSolidSvgIcons.faLink, freeSolidSvgIcons.faEye, freeSolidSvgIcons.faShareAlt, freeSolidSvgIcons.faCloudDownloadAlt, freeSolidSvgIcons.faCog, freeSolidSvgIcons.faChartLine, freeSolidSvgIcons.faQuestionCircle, freeSolidSvgIcons.faFileInvoiceDollar);

  var index = { Card: Card, Icon: Icon, Input: Input, Dropdown: Dropdown, Menu: Menu, Modal: Modal };

  return index;

})));
