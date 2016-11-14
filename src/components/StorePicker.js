import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    // stop the form from submitting
    event.preventDefault();
    console.log("changed URL");
    // first grab the text from the box

    // second were going to transition from / to /store/:storeId
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ this.goToStore }>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={ getFunName() } ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
