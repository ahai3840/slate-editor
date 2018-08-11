// @flow
import * as React from "react";
import { Editor } from "slate-react";
import type {Value, Change} from 'slate';
import styled from 'styled-components';
import Toolbar from './menuToolbar';
import toolbar from 'slate-toolbar';
import {BLOCKS} from '../plugins/slate-constant/src/index';
import Bold, {BoldPlugin} from '../plugins/slate-icon-bold/src/index';
import Clean from '../plugins/slate-icon-clean/src/index';
import {TablePlugin} from '../plugins/slate-icon-table/src/index';
import { HeaderOnePlugin, HeaderTwoPlugin, HeaderThreePlugin} from '../plugins/slate-icon-header/src/index';
import {ImagePlugin} from '../plugins/slate-icon-image';
import {ListPlugin} from '../plugins/slate-icon-list/src/index';
import Underline, {UnderlinePlugin} from '../plugins/slate-icon-underline/src/index';
import {ParagraphPlugin} from '../plugins/slate-icon-shared/src/index';

import { AlignCenter, AlignLeft, AlignRight } from '../plugins/slate-icon-align';
import EditList from 'slate-edit-list';
import TrailingBlock from 'slate-trailing-block'
// default value
import {DEFAULT as DEFAULTLIST} from '../plugins/slate-helper-block-list';

import "github-markdown-css";

const plugins = [
  TrailingBlock(),
  EditList(DEFAULTLIST),
  ParagraphPlugin(),
  BoldPlugin(),
  UnderlinePlugin(),
  HeaderOnePlugin(),
  HeaderTwoPlugin(),
  HeaderThreePlugin(),
  TablePlugin(),
  ImagePlugin(),
  ListPlugin(),
];

type Props = {
  readOnly: boolean,
  autoFocus: boolean,
  menuToolbarOption: {[string]: any}[],
  value: Value,
  onChange: (change: Change) => void,
  className: string,
  placeholderClassName: string,
  placeholder?: any,
  serviceConfig?: any,
  galleryConfig?: any
}

type EditorProps = {
  readOnly: boolean,
  autoFocus: boolean,
  value: Value,
  className: string,
  placeholderClassName: string,
  placeholder?: any,
  onChange: (change: Change) => void,
  serviceConfig?: any,
  galleryConfig?: any
}

type State = {
  isFull: boolean
}

const Container = styled.div`
  ${props => props.isFull && (`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99000
  `)}
  background-color: #FFF;
  height: 430px;
  padding-top: 40px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px 1px rgba(0,0,0,0.16);
  overflow-y: ${props => props.isFull ? 'scroll' : 'auto'};
  overflow-x: auto;
`

const EditorContainer = styled.div`
  padding: 25px;
  margin-top: ${props => props.isFull ? '60px' : '10px'};
`

const FixedToolbar = styled.div`
  position: fixed;
  top: 10px;
  z-index: 10;
  width: 100%;
`

const toolbarOptions = {
  icons: [
    Bold,
    Underline,
    AlignLeft, 
    AlignCenter,
    AlignRight,
    Clean,
  ],
  position: 'top',
  disabledTypes: [
    BLOCKS.CODE,
    BLOCKS.CODE_LINE,
    BLOCKS.HEADING_1,
    BLOCKS.HEADING_2,
    BLOCKS.HEADING_3,
    BLOCKS.HEADING_4,
    BLOCKS.HEADING_5,
    BLOCKS.HEADING_6
  ]
}


export default class EditorComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFull: false,
    };
  }

  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  }

  render() {
    const {
      value, 
      onChange, 
      serviceConfig, 
      galleryConfig, 
      menuToolbarOption, 
      readOnly, 
      placeholder,
      placeholderClassName,
      className,
      autoFocus,
      ...rest
    } = this.props;
    const {isFull} = this.state;
    return readOnly ? (
      <CannerEditor
        className={className}
        value={value} 
        onChange={arg => arg} 
        readOnly={readOnly} 
        placeholder={placeholder}
        autoFocus={autoFocus}
        placeholderClassName={placeholderClassName} />
      ) : (
      <Container isFull={isFull} {...rest}>
        {
          isFull ? (
            <FixedToolbar>
              <Toolbar
                isFull={true}
                value={value}
                serviceConfig={serviceConfig}
                galleryConfig={galleryConfig}
                menuToolbarOption={menuToolbarOption}
                onChange={onChange}
                goFull={this.goFull}/>
            </FixedToolbar>
          ) : (
            <Toolbar
              serviceConfig={serviceConfig}
              galleryConfig={galleryConfig}
              menuToolbarOption={menuToolbarOption}
              value={value}
              onChange={onChange}
              goFull={this.goFull}/>
          )
        }
        <EditorContainer isFull={isFull}>
          <CannerEditor
            className={className}
            value={value} 
            onChange={onChange} 
            readOnly={readOnly}
            placeholder={placeholder}
            autoFocus={autoFocus}
            placeholderClassName={placeholderClassName}
           />
        </EditorContainer>
      </Container>
    );
  }
}

@toolbar(toolbarOptions)
class CannerEditor extends React.Component<EditorProps> {

  shouldComponentUpdate(nextProps: EditorProps) {
    if (this.props.value === nextProps.value)
      return false
    return true
  }

  render() {
    const {
      value, 
      onChange, 
      readOnly, 
      placeholder,
      className,
      placeholderClassName,
      autoFocus
    } = this.props;
    return (
      <Editor 
        className={className?`markdown-body ${className}` :"markdown-body"}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        plugins={plugins}
        placeholder={placeholder}
        autoFocus={autoFocus}
        placeholderClassName={placeholderClassName}
        />
    )
  }
}
