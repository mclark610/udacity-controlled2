import React from 'react';

const DeleteLastItemFromList = (props) => {
    return(
        <button onClick={props.deleteLastItem} disabled={props.buttonDisabled}>
          Delete Last Item
        </button>
    );
}

export default DeleteLastItemFromList;
