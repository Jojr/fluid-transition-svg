import * as types from '../../actions/main/types';

const initialState = {
  data: [
    {
      //isLoaded: true,
      //isFake: true,
    },
  ],
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case types.GET_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
