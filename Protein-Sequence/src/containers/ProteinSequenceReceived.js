import React from 'react';
import { connect } from 'react-redux'
import '../stylesheets/App.css'

const tableStyle={
  hight:'auto',
  width:'80%',
  border:'2px solid black',
  borderRadius:'5%'
}
const tableHeaderStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'blue',
  border:'1px solid black'
}
const tableBodyStyle = {
  color: 'black',
  border:'1px solid black'
}
const errorMessage = {
  color: 'red'
}

//this.state = {page: 1, rows:5};
var pageProp ={
  'page':1,
  'rows':20
}

function pagination(Transcript,page,rows){
  var trimStart = (pageProp.page -1 ) * pageProp.rows;
  var trimEnd = trimStart + pageProp.rows;
  
  if(Transcript!= null){
  var trimmedData = (Object.entries(Transcript).slice(trimStart,trimEnd));

  var pages = Math.round(Object.keys(Transcript).length / pageProp.rows)
  }
  console.log('trimmeddata', trimmedData)

   return{
     'Transcript':trimmedData,
     'pages':pages
   }
}


function ProteinSequenceReceived ({Transcript}){
  // var trimmedData;
  // var trimStart = (page -1 ) * rows;
  // var trimEnd = trimStart + rows;

  // //console.log(trimStart,trimEnd);
  // if(Transcript != null){
  // trimmedData = (Object.entries(Transcript).slice(1,6));
  // //console.log(trimmedData);

  // var pages = Math.ceil(Object.keys(Transcript).length / rows)

  // }
  //console.log(typeof Transcript);
  var datas = pagination(Transcript,pageProp.page,pageProp.rows);
  

  var newTranscript = datas.Transcript;
  console.log('Data:',newTranscript);
 

  // render(){
    return(
      Transcript ?
      <div>
      <h2 className='table-style'>SOURCE: {Transcript[0].source}</h2>
          <table className='table-style'>
            <thead className='table-header-style'>
              <tr className='table-row-style'>
                <th>ID</th>
                <th>Species</th>
                <th>Logic Name</th>
                <th>Parent ID</th>
                <th>BioType</th>
                <th>Display Name</th>
                <th>Assembly Name</th>
                <th>Strand</th>
              </tr>
            </thead>
            <tbody className='table-body-style'>
              {newTranscript.map(function (name, index) {
                //console.log(index);
                //console.log(name);
                return (
                  <tr key={index} className='table-row-style'>
                    <td>{name[1].id}</td>
                    <td>{name[1].species}</td>
                    <td>{name[1].logic_name}</td>
                    <td>{name[1].Parent}</td>
                    <td>{name[1].biotype}</td>
                    <td>{name[1].display_name}</td>
                    <td>{name[1].assembly_name}</td>
                    <td>{name[1].strand}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div>
            <button>previous</button>
            <button>next</button>
          </div>
    </div>: null
    )
  // }; 
}

const mapStateToProps = (state) => ({
  Transcript: state.proteinsequencereceived,
})

ProteinSequenceReceived = connect(
  mapStateToProps,
  null
)(ProteinSequenceReceived)

export default ProteinSequenceReceived;


