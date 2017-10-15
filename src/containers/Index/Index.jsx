// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Props } from './props';

import * as UiActions from '../../actions/ui';
import IndexComponent from '../../components/Index/Index';

const Index = (props: Props) => (
  <IndexComponent
    indexShowing={props.indexShowing}
    setUiIndexShowing={props.actions.setUiIndexShowing}
  />
);

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    ...UiActions,
  }, dispatch);
  return { actions, dispatch };
};

const mapStateToProps = state => ({
  indexShowing: state.ui.indexShowing,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
