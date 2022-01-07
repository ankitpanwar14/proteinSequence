import React from 'react';
import { connect } from 'react-redux';
import { getProteinSequence } from '../actions'
import '../stylesheets/App.css'
import ProteinSequenceReceived from './ProteinSequenceReceived';

let styles = {
  backgroundColor: 'Darkgray',
  width: '250px',
  height: '50px',
  borderRadius: '10px',
  display: 'block',
  margin: '20px',
  fontSize: '12px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, geneSymbol: null };
  }

  callProteinChangeSequence(event){
    this.setState({geneSymbol: event })
    {this.props.getProteinSequence}
  }

  callProteinSequence(){
    console.log(this.state.geneSymbol);
    //this.setState({geneSymbol: sequenceid})
    {this.props.getProteinSequence}
  }

  render() {
    return (
      <div>
        <div className="input-title">
          <label for="sequenceid">Gene Symbol</label>
        </div>
        <div>
          <input className='input-style' id='sequenceid' type='text' name='sequenceid' 
          onChange={e => this.callProteinChangeSequence(e.target.value)}></input>
        </div>
        
        <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'lightgreen' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getProteinSequence}
      >Get protein sequence</button>
      </div>      
    );
  }
};



const mapDispatchToProps = {
  getProteinSequence: getProteinSequence,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
