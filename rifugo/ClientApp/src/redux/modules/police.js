export const Types = {
    SET_POLICE: 'police/SET_POLICES',
    SET_POLICE: 'police/SET_POLICE',
  };
  
  const initialState = {
    police: [],
    policeSelected: null,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.SET_POLICE:
        return { ...state, police: action.payload };
      case Types.SET_POLICE:
        return { ...state, policeSelected: action.payload };
      default:
        return state;
    }
  }
  
  export function setPolice(police) {
    return {
      type: Types.SET_POLICE,
      payload: police,
    };
  }
  
  export function setPolices(polices) {
    return {
      type: Types.SET_POLICE,
      payload: polices,
    };
  }