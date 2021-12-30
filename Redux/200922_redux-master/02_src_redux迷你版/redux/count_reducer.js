//该文件是定义为Count组件服务器的reducer

//reducer可以：初始化状态、加工状态
export default function countReducer(preState=0,action){
	console.log('countReducer执行了',preState,action)
	//从action对象中获取type、data
	const {type,data} = action

	//根据type，决定如何操作状态
	switch (type) {
		case 'increment': //如果是加
			return preState + data
		case 'decrement': //如果是加
			return preState - data
		default: //不是加，也不是减，那么就是初始化
			return preState
	}
}
