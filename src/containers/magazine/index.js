import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Table, Button, Icon } from 'antd'
import { Magazine } from '@services'
import moment from 'moment'
import Search from '@components/Search'

class MagazinePage extends Component {
  columns = [
    {
      title: '电子刊号',
      dataIndex: 'bookCode',
      key: 'bookCode',
      // render: text => <Link>{text}</Link>,
    },
    {
      title: '电子刊名',
      dataIndex: 'bookTitle',
      key: 'bookTitle',
    },
    {
      title: '发行日期',
      dataIndex: 'sellStartTime',
      key: 'sellStartTime',
      render: text => moment(Date(text)).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: '期号',
      key: 'issueNo',
      dataIndex: 'issueNo',
    },
    {
      title: '缩略图',
      key: 'bookCoverUrl',
      dataIndex: 'bookCoverUrl',
      render: (text, record) => (
        <img style={{width: 50}} src={text} alt={record.bookTitle}/>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={`/magazine/${record.bookCode}`}>详情</Link>
        </span>
      ),
    },
  ];

  searchColumn = [
    {
      label: '电子刊号',
      field: 'bookCode',
      key: 'bookCode',
      type: 'input',
    }, {
      label: '电子刊名',
      field: 'bookTitle',
      key: 'bookTitle',
      type: 'input',
    }, {
      label: '发行日期',
      field: 'sellStartTime',
      key: 'sellStartTime',
      type: 'input',
    }
  ]

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  onSubmit = (data) => {
    console.log(data)
  }

  list = () => {
    Magazine.list().then(res => {
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

  handleAdd = () => {
    this.props.history.push('/magazine/add')
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
        <div>
          <Button type="primary" icon="plus" onClick={this.handleAdd}>新增</Button>
        </div>
        <Table 
          columns={this.columns}
          dataSource={data}
          loading={loading}
          rowKey={(record, index) => (index.toString())} />
      </div>
    );
  }
}

export default withRouter(MagazinePage);