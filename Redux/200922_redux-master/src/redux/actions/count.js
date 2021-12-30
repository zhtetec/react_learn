//该文件是用于定义创建action的函数
//引入常量
import {DECREMENT, INCREMENT} from '../constant'

//创建加的action对象
export const increment = value => {
	return {type:INCREMENT,data:value}
}

export const decrement = value => {
	return {type:DECREMENT,data:value}
}

/* 
	异步action中通常会开启异步任务，异步任务有结果后，通常会调用dispatch去分发一个同步action
*/
export const incrementAsync = (value,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(value))
		},time)
	}
}
