import React, { Component } from 'react'
import { connect } from 'react-redux'
// 因外部使用的时loadable，按需加载组件
// 而路由对应的组件为 loadable.js 文件中生成的组件
// 所以，这个无法直接通过 this.props.match.params.id 来获取id
// 所以需要借助于 withRouter 这个方法
import { withRouter } from 'react-router-dom'
import { toJS } from 'immutable'
import {
  getNewsIdAction,
  getNewsDetailsAction
} from './store/actionCreator'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  componentDidMount() {
    
    const { match: {params: {id}}, articleList } = this.props
    this.props.getNewsDetails(id, articleList)
  }
  render() {
    const { newsDetails } = this.props
    const newDetail = newsDetails.toJS()
    return (
      <DetailWrapper>
        <Header>{newDetail.title}</Header>
        <Content>
          <img src={newDetail.imgUrl} alt=""/>
          {
            [0, 1, 2, 3,].map(item => {
              return (
                <p key={item}>{newDetail.desc}</p>
              )
            })
          }
        </Content>
      </DetailWrapper>
    )
  }
}

const mapStateToProps = state => ({
    articleList: state.getIn(['home', 'articleList']),
    newsDetails: state.getIn(['detail', 'newsDetails'])
})

const mapDispatchToProps = dispatch => ({
  getNewsDetails(id, articleList) {
    const newList = articleList.toJS()
    const newsDetail = newList.find(item => item.id == id)
    dispatch(getNewsDetailsAction(newsDetail))
  }
})

// 用 withRouter 包裹组件，意思让 Detail 又能获取 Route 中所有的参数和内容
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
