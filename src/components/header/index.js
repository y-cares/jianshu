import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import { Link } from 'react-router-dom'
import { 
  changeHeaderInputFocus,
  getSearchList,
  changeMouseEnter,
  changePageList
} from './store/actionCreators'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoContainer,
  SearchInfoItem
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  getContainerArea () {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    for (let i = (page * 10); i < (page + 1) * 10; i ++) {
      if (newList[i]) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseEnter}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe626;</i>
              换一批
            </SearchInfoSwitch>  
          </SearchInfoTitle>
          <SearchInfoContainer>
            { pageList }
          </SearchInfoContainer>
        </SearchInfo>
      )
    } else {
      return ''
    }
  }
  render () {
    const { focused, list, handleInputFoucs } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              onFocus={() => {handleInputFoucs(list)}}
              onBlur={handleInputFoucs}
              className={focused ? 'focused' : ''}></NavSearch>
            <i className={`iconfont ${focused ? 'active-i' : ''}`}>&#xe6cf;</i>
            { this.getContainerArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button>注册</Button>
          <Button className="books">
            <i className="iconfont">&#xe624;</i>
            写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
// header 子的reducer的路径
const mapStateToProps = state => ({
  // 由于 reducer 中已经将 state 转化为 immutable 对象
  // 所以这里需要通过 get 方法拿到需要的属性
  // focused: state.get('header').get('focused')
  // getIn 深层查找
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  totalPage: state.getIn(['header', 'totalPage']),
})

const mapDispatchToProps = dispatch => ({
  handleInputFoucs(list = {}) {
    const action = changeHeaderInputFocus()
    dispatch(action)
    if (list.size === 0) dispatch(getSearchList())
    
  },
  handleMouseEnter() {
    const action = changeMouseEnter()
    dispatch(action)
  },
  handleChangePage(page, totalPage, spin) {
    const index = page >= (totalPage - 1) ? 0 : page + 1
    const action = changePageList(index)
    dispatch(action)
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
    if (originAngle) {
      originAngle = parseInt(originAngle, 10)
    } else {
      originAngle = 0
    }
    spin.style.transform = `rotate(${originAngle + 360}deg)`
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

