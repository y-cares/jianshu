import axios from 'axios'
import {
  GET_NEWS_DETAILS
} from './constants'

export const getNewsDetailsAction = data => ({
  type: GET_NEWS_DETAILS,
  data
})

