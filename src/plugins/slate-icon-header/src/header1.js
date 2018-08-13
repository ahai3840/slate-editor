// @flow
import React, {Component} from 'react';
import ToolbarIcon from '../../slate-icon-shared/src/index';
import {HEADING_1} from '../../slate-constant/src/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_1, 'Header')
export default class Heading1 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

