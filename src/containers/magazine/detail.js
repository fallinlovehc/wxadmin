import React, { Component } from 'react';
import { Magazine } from '@services'

class MagazineDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {}
        }
    }
    detail = (id) => {
        const query = {
            bookCode: id
        }
        Magazine.detail(query).then(res => {
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
        this.detail(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                我是详情
            </div>
        );
    }
}

export default MagazineDetail;