import React from 'react';


class ShoppingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'',
        }
    }
    
    addItem = event => {
      event.preventDefault();

      this.props.addItemToList(this.state.value);

    };

    inputIsEmpty = () => {
      return this.state.value === '';
    };

    handleChange = event => {
      this.setState({ value: event.target.value });
    };

    render() {
        return(
            <form onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        )
    }

}

export default ShoppingForm;
