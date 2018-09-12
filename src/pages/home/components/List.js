import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import { Link } from 'react-router-dom'
import {
  getMoreList
} from '../store/actionCreator'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends PureComponent {
  render() {
    let { articleList, page, getMoreList } = this.props
    articleList = articleList.toJS()
    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.id}`}>
                <ListItem key={index}>
                  <img src={item.imgUrl} alt="" />
                  <ListInfo>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文章</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(getMoreList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
