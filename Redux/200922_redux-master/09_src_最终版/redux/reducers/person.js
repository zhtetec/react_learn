import {ADD_PERSON} from '../constant'

const initState = [
	{name:"圆圆的海峰",age:180},
	{name:"会开车的老刘",age:190}
]

export default function personReducer(preState=initState,action){
	const {type,data} = action
	switch (type) {
		case ADD_PERSON:
			return [data,...preState]
		default:
			return preState
	}
}