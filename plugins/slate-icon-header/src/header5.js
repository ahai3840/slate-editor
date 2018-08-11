// @flow
import React, {Component} from 'react';
import ToolbarIcon from '../../slate-icon-shared/src/index';
import {HEADING_5} from '../../slate-constant/src/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_5, 'Header5')
export default class Heading5 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

