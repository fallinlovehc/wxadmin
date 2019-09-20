import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tag, Table } from 'antd'
import { Order } from '@services'
import moment from 'moment'
import Search from '@components/Search'

class OrderPage extends Component {
  columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      key: 'orderNo',
      // render: text => <Link>{text}</Link>,
    },
    {
      title: '订单名',
      dataIndex: 'bookTitle',
      key: 'bookTitle',
    },
    {
      title: '期刊号',
      dataIndex: 'issueNo',
      key: 'issueNo',
    },
    {
      title: '下单人',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '购买数量',
      dataIndex: 'buyNum',
      key: 'buyNum',
    },
    {
      title: '购买金额',
      dataIndex: 'buyAmount',
      key: 'buyAmount',
    },
    {
      title: '订单状态',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      render: (text, record) => (
        <span>{(() => {
            switch(record.orderStatus){
                case '0': return '待支付';
                case '1': return '支付成功';
                case '2': return '支付失败';
                default: return '';
            }
        })()}</span>
      )
    },
    {
      title: '交易号',
      dataIndex: 'payNumber',
      key: 'payNumber',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: text => moment(Date(text)).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link>详情</Link>
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
      data: [],
      query: {
        pageIndex: 1,
        pageSize: 10,
        orderStatus: '9'
      },
    }
  }

  onSubmit = (data) => {
    console.log(data)
  }

  list = () => {
    const {
      query
    } = this.state;
    Order.list(query).then(res => {
      console.log(res)
      if (res.code === 'Z000') {
        this.setState({
          data: res.result,
          loading: false,
        });
      }
    }).catch(err => {

    })
  }

  componentDidMount() {
    this.list();
  }

  render() {
    const { 
      data,
      loading,
    } = this.state;
    return (
      <div>
        <Search
          column={this.searchColumn}
          onSubmit={this.onSubmit}
        ></Search>
        <Table 
          columns={this.columns}
          dataSource={data}
          loading={loading}
          rowKey={(record, index) => (index.toString())} />
      </div>
    );
  }
}

export default OrderPage;