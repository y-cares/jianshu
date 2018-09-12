// immutable 管理数据格式
// fromJs 能将 JS 对象转化成 immutable 对象
// 为了解决 renducer 无法直接改变 state 的功能
// 注：immutable 对象也是无法修改的
// Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，//
// 就会返回一个新的Immutable对象，以此来保证数据的不可变
import { fromJS } from 'immutable'
import {
  CHANGE_HEADER_INPUT_FOCUS,
  GET_SEARCH_LIST,
  CHANGE_MOUSE_ENTER,
  CHANGE_PAGE_LIST
} from './constants'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 0,
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_HEADER_INPUT_FOCUS:
      // 为什么能够修改 immutable 对象的值？
      // immutable 对象的 set 方法，会结合之前的 immutable 对象的值
      // 和设置的值，返回一个全新的对象。
      const focused = state.get('focused')
      return state.set('focused', !focused)
    case GET_SEARCH_LIST:
      // merge 可以同事的去改变多个数据
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case CHANGE_MOUSE_ENTER:
      const mouseIn = state.get('mouseIn')
      return state.set('mouseIn', !mouseIn)
    case CHANGE_PAGE_LIST:
      return state.set('page', action.page)
    default:
      return state
  }
}