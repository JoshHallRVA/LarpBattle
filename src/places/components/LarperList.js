import React from 'react';

const LarperList = props => {
    const larpers = props.larpers;
    const listItems = larpers.map((user) =>
      <li key={user.id} >{user.name}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default LarperList;