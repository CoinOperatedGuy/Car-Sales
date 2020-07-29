import React from 'react';

import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './actions/featureActions';

const App = ({addFeature, removeFeature, additionalPrice, additionalFeatures, car}) => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures removeFeature={removeFeature} car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeature,
  removeFeature
}

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
