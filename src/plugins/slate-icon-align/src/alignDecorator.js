// @flow
import * as React from 'react';
import type {IconProps} from 'shared/src/types';
import {haveDataKeyEqualValueInSomeBlocks} from '../../slate-util-have/src/index';
import blockAddData from '../../slate-helper-block-adddata/src/index';
import blockClearDataByKey from '../../slate-helper-block-cleardatabykey/src/index';

type Props = IconProps;

export const applyChange = (change, type, align) => {
  const isActive = haveDataKeyEqualValueInSomeBlocks(change, type, align);

  if (isActive)
    return change.call(blockClearDataByKey, type);
  return change.call(blockAddData, {data: {[type]: align}});
}

export default (type: string, defaultIcon: string, align: string) =>
  (Block: React.Element<any>) => {
  return class AlignDecorator extends React.Component<Props> {
    typeName: string

    constructor(props: Props) {
      super(props);

      this.typeName = props.type || type;
    }

    onClick = (e: Event) => {
      e.preventDefault();
      let {change, onChange} = this.props;
      
      onChange(applyChange(change, this.typeName, align));
    }

    render() {
      const {change, icon, ...rest} = this.props;
      const onClick = e => this.onClick(e);
      const isActive = haveDataKeyEqualValueInSomeBlocks(change, type, align);

      return (
        // $FlowFixMe
        <Block
          type={this.typeName}
          icon={icon || defaultIcon}
          onClick={onClick}
          isActive={isActive}
          {...rest}
        />
      );
    }
  };
};
