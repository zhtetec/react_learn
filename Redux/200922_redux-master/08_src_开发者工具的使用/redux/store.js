//该文件是创建整个redux中最为核心的store对象

//引入createStore函数，用于创建store对象
import {createStore,applyMiddleware} from 'redux'
//引入combineReducers，用于组合多个reducer
import {combineReducers} from 'redux'
//引入composeWithDevTools，用于支持开发者工具的使用
import {composeWithDevTools} from 'redux-devtools-extension'

//引入为了Count组件服务的reducer
import countReducer from './reducers/count'
//引入为了Person组件服务的reducer
import personReducer from './reducers/person'

//引入用于支持异步action的中间件
import thunk from 'redux-thunk'

//combineReducers传入的那个对象，就是redux中保存的总状态
const allReducer = combineReducers({
	he:countReducer,
	rens:personReducer
})

//创建并暴露一个store对象
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
