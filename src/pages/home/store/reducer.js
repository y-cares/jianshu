import { fromJS, toJS } from 'immutable'
import {
  GET_HOME_LIST,
  GET_MORE_LIST,
  CHANGE_SCROLL_TOP_SHOW
} from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeList = (state, action) => {
  return state.merge({
    topicList: fromJS(action.data.topicList),
    articleList: fromJS(action.data.articleList),
    recommendList: fromJS(action.data.recommendList),
  })
}

const changeMoreList = (state, action) => {
  const list = state.get('articleList').concat(action.list)
  return state.merge({
    articleList: list,
    articlePage: action.page
  })
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_HOME_LIST:
      return changeHomeList(state, action)
    case GET_MORE_LIST:
      return changeMoreList(state, action)
    case CHANGE_SCROLL_TOP_SHOW:
      return state.set('showScroll', action.flag)
    default:
      return state
  }
}