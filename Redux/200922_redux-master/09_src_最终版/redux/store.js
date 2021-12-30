//该文件是创建整个redux中最为核心的store对象

//引入createStore函数，用于创建store对象
import {createStore,applyMiddleware} from 'redux'
//引入composeWithDevTools，用于支持开发者工具的使用
import {composeWithDevTools} from 'redux-devtools-extension'
//引入用于支持异步action的中间件
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducer from './reducers'


//创建并暴露一个store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
