import axios from 'axios'
import { fromJS } from 'immutable'
import {
  GET_HOME_LIST,
  GET_MORE_LIST,
  CHANGE_SCROLL_TOP_SHOW
} from './constants'

const getHomeListAction = (data) => ({
  type: GET_HOME_LIST,
  data,
})

const getMoreListtAction = (list, page) => ({
  type: GET_MORE_LIST,
  list: fromJS(list),
  page
})

export const getHometList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
      const action = getHomeListAction(res.data.data)
      dispatch(action)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeMoreList.json?page=${page + 1}`).then(res => {
      const action = getMoreListtAction(res.data.data, page + 1)
      dispatch(action)
    })
  }
}

export const changeScrollTopShow = (flag) => ({
  type: CHANGE_SCROLL_TOP_SHOW,
  flag,
})

