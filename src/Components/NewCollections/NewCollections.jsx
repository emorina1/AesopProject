import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map(({ id, name, image, new_price, old_price }) => (
          <Item 
            key={id}
            id={id}
            name={name}
            image={image}
            new_price={new_price}
            old_price={old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
