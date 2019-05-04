import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    const styles = {
      container: {
        border: '2px solid black'
      }
    };

    return (
      <div style={styles.container}>Menu</div>
    )
  }
}