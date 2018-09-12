import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import {
  TopicWrapper,
  TopicItem
} from '../style.js'


class Topic extends PureComponent {
  render() {
    let { topicList } = this.props
    topicList = topicList.toJS()
    return (
      <div>
        <TopicWrapper>
          {
            topicList.map(item => {
              return (
                <TopicItem key={item.id}>
                  <img src={item.imgUrl} alt=""/>
                  {item.title}
                </TopicItem>
              )
            })
          }
        </TopicWrapper>
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStatetoProps, mapDispatchToProps)(Topic)
