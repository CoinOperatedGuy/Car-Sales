import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeFeature(props.feature)} className='button'>Remove</button>
      {props.feature.name} (-{props.feature.price})
    </li>
  );
};

export default AddedFeature;
