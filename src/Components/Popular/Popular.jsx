import React from 'react';
import './Popular.css';
import data_product from '../Assets/Frontend_Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1>A Superlative Collection</h1>
      <hr />
      <div className="popular-item">
        {data_product.map(({ id, name, image, new_price, old_price }) => (
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
};

export default Popular;
