// @flow

import React from 'react';
import type { Props } from './props';

import './index.pcss';

const Index = (props: Props) => (
  <div className="index">
    {props.indexShowing &&
      [
        <div className="index__header">Builder</div>,
        <div className="index__footer">Oleh Aloshkin</div>,
      ]
    }
    <button
      onClick={() => {
        props.setUiIndexShowing(!props.indexShowing);
      }}
    >
      {props.indexShowing ? 'Hide' : 'Show'}
    </button>
  </div>
);

export default Index;
