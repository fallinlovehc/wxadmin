import React, { Component } from 'react';
import { Tag, Divider, Table, Form } from 'antd'

import Search from '@components/Search'

class Order extends Component {
  columns = [
    {
      title: '订单号',
      dataIndex: 'orderSeq',
      key: 'orderSeq',
      render: text => <a>{text}</a>,
    },
    {
      title: '订单名',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: '手机号码',
      dataIndex: 'mobiie',
      key: 'mobiie',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>详情</a>
        </span>
      ),
    },
  ];

  searchColumn = [
    {
      label: '订单号',
      field: 'orderSeq',
      key: 'orderSeq',
      type: 'input',
      placeholder: '订单号',
    }, {
      label: '订单名',
      field: 'orderName',
      key: 'orderName',
      type: 'input',
    }, {
      label: '手机号码',
      field: 'mobile',
      key: 'mobile',
      type: 'input',
    }, {
      label: '测试',
      field: 'test',
      key: 'test',
      type: 'input',
    }
  ]

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '13987362332',
          tags: ['电子刊', '异类'],
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '13987362332',
          tags: ['电子刊', '异类'],
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '13987362332',
          tags: ['电子刊', '异类'],
        },
      ]
    }
  }

  onSubmit = (data) => {
    console.log(data)
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Search
          column={this.searchColumn}
          onSubmit={this.onSubmit}
        ></Search>
        <Table 
          columns={this.columns}
          dataSource={data}
          rowKey={(record, index) => (index.toString())} />
      </div>
    );
  }
}

export default Order;