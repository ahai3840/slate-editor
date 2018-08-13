// @flow
import React, {Component} from 'react';
import ToolbarIcon from '../../slate-icon-shared/src/index';
import {HEADING_3} from '../../slate-constant/src/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_3, 'Header3')
export default class Heading3 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

