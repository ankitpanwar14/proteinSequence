const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PROTEIN_SEQUENCE':
      return { ...state, proteinsequencereceived: false, loading: true };
    case 'PROTEIN_SEQUENCE_RECEIVED':
      return { ...state, proteinsequencereceived: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
