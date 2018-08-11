// @flow
import * as React from "react";
import inlineAddData from "@canner/slate-helper-inline-adddata";
import type { Change, Range } from "slate";
import { Modal, Form, Button, InputNumber, Checkbox } from "antd";

const FormItem = Form.Item;

type Props = {
  change: Change,
  onChange: (change: Change) => void,
  hideModal: () => void,
  node: any,
  form: any,
  isShow: boolean,
  width: number,
  height: number,
  target: Range
};

@Form.create()
export default class ImageModal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const originHeight = this.props.height;
    const originWidth = this.props.width;
    this.state = {
      restrict: true,
      originWidth,
      originHeight,
      width: this.props.width,
      height: this.props.height,
      ratio: originHeight !==0 ? originWidth / originHeight : 1
    };
  }
  

  handleCancel = () => {
    this.props.form.resetFields();
    this.props.hideModal();
  };

  handleChange = (key) => (value) => {
    this.setState({
      [key]: value,
    });
    const { restrict, ratio, width, height } = this.state;
    if(key === 'width'){
      this.props.form.setFieldsValue({
        width: value,
        height: restrict? value / ratio : height,
      });
    }else{
      this.props.form.setFieldsValue({
        width: restrict? value * ratio : height,
        height: value,
      });
    }
    
  };

  handleRestrict = (e: Event) => {
    this.setState({
      restrict: e.target.checked,
    });
  };

  handleOk = (e: Event) => {
    e.preventDefault();
    const { onChange, change, hideModal, form, target } = this.props;
    change.select(target);

    form.validateFields((err, values) => {
      if (!err) {
        const { width, height } = values;
        onChange(change => {
          change.call(inlineAddData, {
            data: {
              width: Math.round(width),
              height: Math.round(height)
            }
          });
        });
        form.resetFields();
        hideModal();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isShow } = this.props;
    const { restrict, width, height} = this.state;
    return (
      <Modal
        visible={isShow}
        zIndex={10000}
        title="设置图片尺寸"
        onCancel={this.handleCancel}
        footer={[
          <Button
            key="back"
            type="ghost"
            size="large"
            onClick={this.handleCancel}
          >
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={this.handleOk}
          >
            确定
          </Button>
        ]}
      >
        <Form horizontal="true">
         <FormItem >
          <Checkbox onChange={this.handleRestrict} checked={restrict}>约束比例</Checkbox>
         </FormItem>
          <FormItem label="宽度:" hasFeedback>
            {getFieldDecorator("width", {
              rules: [
                {
                  required: true,
                  message: "请输入图片宽度"
                }
              ],
              initialValue: width
            })(<InputNumber onChange={this.handleChange('width')}  onClick={e => e.preventDefault()} />)}
          </FormItem>

          <FormItem label="高度:" hasFeedback>
            {getFieldDecorator("height", {
              rules: [
                {
                  required: true,
                  message: "请输入图片高度"
                }
              ],
              initialValue: height
            })(<InputNumber onChange={this.handleChange('height')} onClick={e => e.preventDefault()} />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
