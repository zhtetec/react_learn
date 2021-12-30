//该文件是专门用于汇总所有reducer的

//引入combineReducers，用于组合多个reducer
import {combineReducers} from 'redux'
//引入为了Count组件服务的reducer
import countReducer from './count'
//引入为了Person组件服务的reducer
import personReducer from './person'

//combineReducers传入的那个对象，就是redux中保存的总状态
export default combineReducers({
	sum:countReducer,
	persons:personReducer
})
