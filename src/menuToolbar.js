// @flow
import * as React from "react";
import type {Value, Change} from 'slate';
import styled from 'styled-components';
import {Container} from './components/item';
import FullScreenIcon from './components/fullScreen';

import {AlignCenter, AlignLeft, AlignRight} from './plugins/slate-icon-align/src/index';
import Table from './plugins/slate-icon-table/src/index';
import {Header1, Header2, Header3} from './plugins/slate-icon-header/src/index';
import Image from './plugins/slate-icon-image/src/index';
import {OlList, UlList} from './plugins/slate-icon-list/src/index';
import Undo from './plugins/slate-icon-undo/src/index';
import Redo from './plugins/slate-icon-redo/src/index';

type Props = {
  value: Value,
  isFull?: boolean,
  onChange: (change: Change) => void,
  menuToolbarOption: {[string]: any}[],
  goFull: () => void,
  serviceConfig: any,
  galleryConfig?: any
}

const IconContainer = styled.div`
  display: inline-block;
  background: transparent;
  color: #222;
  cursor: pointer;
  -webkit-transition: background 0.2s ease 0s;
  border-bottom: 0.5px solid #ebebeb;

  &:hover {
    background: #ebebeb;
  }
`

const Seperator = styled.div`
  height: 35px;
  width: 1px;
  margin: 2px 0;
  background: #ebebeb;
  display: inline-block;
  vertical-align: top;
`;

export default class Toolbar extends React.Component<Props> {
  render() {
    const { value, onChange, goFull, isFull, serviceConfig, galleryConfig, menuToolbarOption } = this.props;

    const options = menuToolbarOption || [
      { type: Undo, title: "撤销" },
      { type: Redo, title: "重做" },
      'seperator',
      { type: Header1, title: "标题一" },
      { type: Header2, title: "标题二" },
      { type: Header3, title: "标题三" },
      'seperator',
      { type: AlignLeft, title: "居左t" },
      { type: AlignCenter, title: "居中" },
      { type: AlignRight, title: "居右" },
      'seperator',
      { type: OlList, title: "编号列表" },
      { type: UlList, title: "项目符号列表" },
      'seperator',
      { type: Table, title: "表格" },
    ]

    return (
      <Container>
        {options.map((option, i) => {
          let Type = typeof(option) === "string" ? option : (option.type || option);
          let title = option.title;

          if (Type === 'seperator')
            return <Seperator key={i}/>
          if (Type === 'fullScreen') {
            return (
              <IconContainer
                key={i}
                title={title}>
                <FullScreenIcon className="__canner-editor_topToolbarItem" goFull={goFull} isFull={isFull}/>
              </IconContainer>
            )
          }

          // special plugin
          if (Type === 'image') {
            Type = Image
          }

          return (
            <IconContainer
              key={i}
              title={title}>
              <Type
                change={value.change()}
                onChange={onChange}
                className="__canner-editor_topToolbarItem"
                disableClassName="__canner-editor_topToolbarItemDisabled"
                strokeClassName="qlStroke"
                serviceConfig={Type === Image && serviceConfig}
                galleryConfig={Type === Image && galleryConfig}
                strokeMitterClassName="qlStrokeMitter"
                fillClassName="qlFill"
                evenClassName="qlEven"
                colorLabelClassName="qlColorLabel"
                thinClassName="qlThin"
                activeStrokeMitterClassName="qlStrokeMitterActive"
                activeClassName="__canner-editor_topToolbarItem __canner-editor_topToolbarItemActive"
                activeStrokeClassName="qlStrokeActive"
                activeFillClassName="qlFillActive"
                activeThinClassName="qlThinActive"
                activeEvenClassName="qlEvenActive"
              />
            </IconContainer>
          )
        })}
      </Container>
    );
  }
}
