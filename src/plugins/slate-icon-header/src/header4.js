// @flow
import React, {Component} from 'react';
import ToolbarIcon from '../../slate-icon-shared/src/index';
import {HEADING_4} from '../../slate-constant/src/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_4, 'Header4')
export default class Heading4 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

