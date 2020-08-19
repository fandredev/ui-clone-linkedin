import * as types from '../actionTypes';

const INITIAL_STATE = {
  isLoading: true,
};

export default (state = INITIAL_STATE, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case types.HIDE_SHIMMER: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    default: {
      return state;
    }
  }
};
