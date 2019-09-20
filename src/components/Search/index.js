import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import './index.less'

class Search extends Component {
    state = {
        expand: false,
    };

    // To generate mock Form.Item
    getFields(data) {
        const count = !this.state.expand ? 3 : data.length;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < data.length; i++) {
            const t = data[i];
            children.push(
                <Col span={8} key={t.key} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={t.label}>
                        {getFieldDecorator(t.field, {
                            rules: t.rules,
                        })(<Input placeholder={t.placeholder || t.label} />)}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    }

    handleSearch = e => {
        const { props } = this;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if ('onSubmit' in props && !err) {
                props.onSubmit(values)
            } else {
                console.log(err)
                console.log(values)
            }
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        const { column } = this.props
        const labelCol = {
            span: 6
        }
        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch} labelCol={labelCol}>
                <Row gutter={24}>{this.getFields(column)}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            重置
                        </Button>
                        {column.length > 3 && (
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                更多筛选 <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a>
                        )}
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create({ name: 'advanced_search' })(Search);