import axios from 'axios'
import { fromJS } from 'immutable'
import {
  CHANGE_HEADER_INPUT_FOCUS,
  GET_SEARCH_LIST,
  CHANGE_MOUSE_ENTER,
  CHANGE_PAGE_LIST
} from './constants'

const getSearchListAction = data => ({
  type: GET_SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const changeHeaderInputFocus = () => ({
  type: CHANGE_HEADER_INPUT_FOCUS
})

export const changeMouseEnter = () => ({
  type: CHANGE_MOUSE_ENTER
})

export const changePageList = (page) => ({
  type: CHANGE_PAGE_LIST,
  page
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data.data
      const action = getSearchListAction(data)
      dispatch(action)
    })
  }
}