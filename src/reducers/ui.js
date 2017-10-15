// @flow

import * as types from '../constants/types';

const ui = (state: Object = {
  indexShowing: true,
}, action: Object) => {
  switch (action.type) {
    case types.SET_UI_INDEX_SHOWING:
      return {
        ...state,
        indexShowing: action.data,
      };
    default:
      return state;
  }
};

export default ui;
