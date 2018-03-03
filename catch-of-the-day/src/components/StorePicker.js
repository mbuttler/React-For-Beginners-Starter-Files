import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {


    myInput = React.createRef();

    goToStore = (event) => {
    // stop form from submitting   
    event.preventDefault()
    // get text from input
        console.log(this)

    // change page to /store/submitted-content
    }

    render() {
        return (
         
        <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter  Store</h2>
            <input 
            type="text" 
            ref={this.myInput}
            required 
            placeholder="Store Name" 
            defaultValue={getFunName()}
            />
            <button type="submit">Visit store</button>
        </form>

        );
    }
}

export default StorePicker;
