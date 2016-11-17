import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore(event) {
    // stop the form from submitting
    event.preventDefault();
    console.log("changed URL");
    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second were going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store name" defaultValue={ getFunName() } ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

// Makes the router available
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
