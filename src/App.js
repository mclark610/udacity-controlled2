import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './shopping_form';
import ShoppingList from './shopping_list';

import DeleteLastItemFromList from './delete_item';


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  addItemToList = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Shopping List</h2>
        <ShoppingForm addItemToList={this.addItemToList}/>
        <DeleteLastItemFromList deleteLastItem={this.deleteLastItem} buttonDisabled={this.noItemsFound()}/>
        <ShoppingList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
