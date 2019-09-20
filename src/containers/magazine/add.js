import React, { Component } from 'react';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Button,
    DatePicker,
    Input,
    
} from 'antd';
import UploadImage from '@components/UploadImage'

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

class MagazineAdd extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let bookCoverUrlArr,
                    bookIndexUrlsArr;
                bookCoverUrlArr = this.formatImage(values.bookCoverUrl)
                bookIndexUrlsArr = this.formatImage(values.bookIndexUrls)
                this.handleAdd({
                    ...values,
                    bookCoverUrl: bookCoverUrlArr.join(),
                    bookIndexUrls: bookIndexUrlsArr.join(),
                })
            }
        });
    };

    handleAdd = (data) => {
        console.log(data)
    } 

    formatImage = (array) => {
        let arr = []
        for (let v of array) {
            arr.push(!!v.response && v.response.url)
        }
        return arr
    }

    normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div className="form-default">
                <div className="form-title">新增电子刊</div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        
                    <Form.Item label="电子刊封面">
                        {getFieldDecorator('bookCoverUrl', {
                            rules: [{ required: true, message: '请上传电子刊封面' }],
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <UploadImage />
                        )}
                    </Form.Item>
                    <Form.Item label="电子刊首页图片">
                        {getFieldDecorator('bookIndexUrls', {
                            rules: [{ required: true, message: '请上传电子刊首页图片' }],
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <UploadImage limit={5}/>
                        )}
                    </Form.Item>
                    <Form.Item label="电子刊标题">
                        {getFieldDecorator('bookTitle', {
                            rules: [{ required: true, message: '请填写电子刊标题' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="期刊号">
                        {getFieldDecorator('issueNo', {
                            rules: [{ required: true, message: '请填写电子刊期刊号' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="电子刊类别" hasFeedback>
                        {getFieldDecorator('bookType', {
                            // rules: [{ required: true, message: '请选择电子刊类别' }],
                        })(
                            <Select>
                                <Option value="china">China</Option>
                                <Option value="usa">U.S.A</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="电子刊简介">
                        {getFieldDecorator('bookContent')(
                            <TextArea />
                        )}
                    </Form.Item>
                    <Form.Item label="售卖时间">
                        {getFieldDecorator('sellTime', {
                            rules: [{ required: true, message: '请填写电子刊期刊号' }],
                        })(
                            <RangePicker />
                        )}
                    </Form.Item>
                    <Form.Item label="售卖单价">
                        {getFieldDecorator('sellUnitPrice', {
                            rules: [{ required: true, message: '请填写电子刊期刊号' }],
                        })(<InputNumber />)}
                        <span className="ant-form-text"> / 本</span>
                    </Form.Item>

                    <Form.Item label="是否需要阅读码">
                        {getFieldDecorator('hasReadingCode', { valuePropName: 'checked' })(<Switch checkedChildren="是" unCheckedChildren="否" />)}
                    </Form.Item>
                    <Form.Item label="上架情况">
                        {getFieldDecorator('hasSell', { valuePropName: 'checked' })(<Switch checkedChildren="是" unCheckedChildren="否" />)}
                    </Form.Item>
                    <Form.Item label="是否加入轮播">
                        {getFieldDecorator('hasSwiper', { valuePropName: 'checked' })(<Switch checkedChildren="是" unCheckedChildren="否" />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                        <Button style={{marginLeft: 12}} onClick={() => { this.props.history.goBack()}}>
                            返回
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'magazine_add' })(MagazineAdd)