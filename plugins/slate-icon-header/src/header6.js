// @flow
import React, {Component} from 'react';
import ToolbarIcon from '../../slate-icon-shared/src/index';
import {HEADING_6} from '../../slate-constant/src/blocks';
import headerDecorator from './headerDecorator';

@headerDecorator(HEADING_6, 'Header6')
export default class Heading6 extends Component<{}> {
  render() {
    return (
      <ToolbarIcon {...this.props}/>
    );
  }
}

