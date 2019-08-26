import React, { Component } from 'react';
import { Tag, Divider, Table, Form } from 'antd'

import Search from '@components/Search'

class Magazine extends Component {
  columns = [
    {
      title: '电子刊号',
      dataIndex: 'orderSeq',
      key: 'orderSeq',
      render: text => <a>{text}</a>,
    },
    {
      title: '电子刊名',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: '发行日期',
      dataIndex: 'mobiie',
      key: 'mobiie',
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
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
      label: '电子刊号',
      field: 'orderSeq',
      key: 'orderSeq',
      type: 'input',
    }, {
      label: '电子刊名',
      field: 'orderName',
      key: 'orderName',
      type: 'input',
    }, {
      label: '发行日期',
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
          orderName: '华晨宇电子刊',
          mobiie: '2012-12-12',
          tags: '在售',
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '2012-12-12',
          tags: '在售',
        },
        {
          orderSeq: 'od2132312',
          orderName: '华晨宇电子刊',
          mobiie: '2012-12-12',
          tags: '在售',
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

export default Magazine;