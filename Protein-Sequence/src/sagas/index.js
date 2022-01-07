import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProteinSequence() {
  //console.log('payload', payload);
  //const uri = "https://rest.ensembl.org/lookup/symbol/homsap" + this

  const json = yield fetch('https://rest.ensembl.org/lookup/symbol/homsap/BRAF.json?;expand=1')
    .then(response => response.json());

  yield put({ type: "PROTEIN_SEQUENCE_RECEIVED", json: json.Transcript || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_PROTEIN_SEQUENCE', fetchProteinSequence)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
