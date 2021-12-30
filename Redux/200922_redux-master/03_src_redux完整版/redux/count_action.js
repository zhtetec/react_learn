//该文件是用于定义创建action的函数
//引入常量
import {DECREMENT, INCREMENT} from './constant'

//创建加的action对象
export const createIncrementAction = value => ({type:INCREMENT,data:value})
export const createDecrementAction = value => ({type:DECREMENT,data:value})
