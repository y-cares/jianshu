import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { 
  getHometList,
  changeScrollTopShow
} from './store/actionCreator'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

// PureComponent 会在原来 Component 组件底层添加一个
// shouldComponentUpdate 的生命周期函数，来自动判断当前组件的
// 从父组件获取的 props 是否发生改变，来判断是否进行更新此组件
// 尽量与 immutable.js 进行配合使用可减少相应的 bug
class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeList()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.scrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.scrollTopShow)
  }
  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }
  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4450/d17fd4b5bec7134323d089a46a71aa98f01d75bb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>返回<br/>顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHometList())
  },
  scrollTopShow() {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 300) {
      dispatch(changeScrollTopShow(true))
    } else {
      dispatch(changeScrollTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
