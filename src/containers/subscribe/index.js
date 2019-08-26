import React, { Component } from 'react';
import { Tag, Divider, Table, Form } from 'antd'

import Search from '@components/Search'

class System extends Component {
  columns = [
    {
      title: '会员号',
      dataIndex: 'orderSeq',
      key: 'orderSeq',
      render: text => <a>{text}</a>,
    },
    {
      title: '会员名',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: '订阅时间',
      dataIndex: 'mobiie',
      key: 'mobiie',
    },
    {
      title: '订阅内容',
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
        title: '状态',
        dataIndex: 'aaaa',
        key: 'aaaa',
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
      label: '会员号',
      field: 'orderSeq',
      key: 'orderSeq',
      type: 'input',
      placeholder: '订单号',
    }, {
      label: '会员名',
      field: 'orderName',
      key: 'orderName',
      type: 'input',
    }, {
      label: '订阅时间',
      field: 'mobile',
      key: 'mobile',
      type: 'input',
    }, {
      label: '状态',
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
          orderName: '测试',
          mobiie: '2012-12-12',
          tags: ['电子刊', '异类'],
          aaaa: '会员'
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '2012-12-12',
          tags: ['电子刊', '异类'],
          aaaa: '到期'
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '2012-12-12',
          tags: ['电子刊', '异类'],
          aaaa: '会员'
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

export default System;