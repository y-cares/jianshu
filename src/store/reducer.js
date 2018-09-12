import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../components/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
// redux-immutable 将state对象修改为 immutable 对象
// 因为 header 组件中的 store 的 state 数据已通过 immutable 修改为 immutable 对象
// 但父级的 store 的 state 对象却并不是 immutable 对象，
// 为了保证数据的不可修改性，避免因误操作 才修改的 state 的值，
// 从根本上将 state 对象修改成 immutable 对象

// combineReducers 能将各个小的 reducer 合并成大的 reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer
