# react-override-ui

The goal of this library is to have a set of components that are:
* Easy to install via NPM
* Easy to override

Current UI components:
* **Modal**
* **Icon** (Uses font awesome icons. Not all icons are added. You may need to make a PR to add the ones you want if they don't exist)
* **Dropdown**
* **Menu** (only "lined" type currently supported)

In all components, you can pass an `options` object to override CSS.

For example:
```
const override = {
  "borderBottom": "2px solid purple"
};
```

## Modal Example
```
import { Modal } from "react-override-ui";

<Modal isOpen={this.state.modalOpen} onClose={() => this.onModalClose()}>
  <Modal.Content>
    Modal Content Here
  </Modal.Content>
</Modal>
```

## Icon Example
```
import { Icon } from "react-override-ui";

<Icon icon="cog" />
```

## Dropdown Example
```
import { Dropdown } from "react-override-ui";

const dropdownItems = [
  {
    text: "Link",
    icon: "link", // Icons not necessary, but are supported as menu items
    clickHandler: () => // do something
  },
  {
    text: "Preview",
    icon: "eye",
    clickHandler: () => // do something
  }
];

<Dropdown>
  <Dropdown.Menu>
    {this.props.dropdownItems.map((item, index) => (
      <Dropdown.Item options={item} key={index} onClick={item.clickHandler} />
    ))}
  </Dropdown.Menu>
</Dropdown>
```

## Menu Example
```
import { Menu } from "react-override-ui";

const menuOptions = {
  type: "lined",
  override: {
    "borderBottom": "2px solid purple" // not necessary (example only)
  }
};

<Menu options={menuOptions}>
  {menuItemOptions.map((item, index) => (
    <Menu.Item
      options={item}
      key={index}
      isActive={this.props.currentUrl === item.url ? true : false}
      onClick={() => this.setNavTab(item.url)}
    />
  ))}
</Menu>
```

## Card Example
```
import { Card } from "react-override-ui";

<Card>
  <Card.Header>Card Header</Card.Header>
  <Card.Content>Card Content</Card.Content>
</Card>
```
