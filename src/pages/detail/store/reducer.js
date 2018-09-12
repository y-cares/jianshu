import { fromJS } from 'immutable'
import {
  GET_NEWS_DETAILS
} from './constants'

const defaultState = fromJS({
  newsDetails: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_NEWS_DETAILS:
      console.log(1, action.data)
      return state.set('newsDetails', fromJS(action.data))
    default:
      return state
  }
}
