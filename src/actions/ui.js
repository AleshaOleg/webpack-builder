// @flow

import * as types from '../constants/types';

export const setUiIndexShowing = (data: boolean) => ({
  type: types.SET_UI_INDEX_SHOWING,
  data,
});
