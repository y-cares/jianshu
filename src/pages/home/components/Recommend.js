import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends PureComponent {
  render() {
    let { recommendList } = this.props
    recommendList = recommendList.toJS()
    return (
      <RecommendWrapper>
        {
          recommendList.map(item => {
            return (
              <RecommendItem key={item.id} imgUrl={item.imgUrl} />
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})
const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Recommend)