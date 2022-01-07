import React from 'react';
import Button from '../containers/Button';
import ProteinSequenceReceived from '../containers/ProteinSequenceReceived'
import Loading from '../containers/Loading'


let App = () => (
  <div>
    <Button />
    <Loading />
    <ProteinSequenceReceived />
  </div>
);


export default App;
