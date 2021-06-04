import React from 'react';
import Card from './card';

const ShoppingList = (props) => {
    let shoppingList = props.items;

    return(
        <div>
            <p className="items">Items</p>

            <ol className="item-list">
                {shoppingList.map((item, index) => {
                    return(<Card index={index} item={item}/>)
                })}
            </ol>
        </div>
    );

}
export default ShoppingList;
