import React,{Component} from 'react'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux'

//定义Count的UI组件
class Count extends Component {
	state = {
		wind:'北风6级'
	}

	increment = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		//调用父组件传递过来的操作状态的方法
		this.props.jia(value*1)
	}

	decrement = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		//调用父组件传递过来的操作状态的方法
		this.props.jian(value*1)
	}

	incrementIfOdd = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		if(this.props.sum % 2 !== 0){
			this.props.jia(value*1)
		}
	}

	incrementAsync = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		this.props.jiaAsync(value*1,500)
	}

	render() {
		// console.log('Count的UI收到的props是',this.props)
		return (
			<div>
				<h2>当前求和为：{this.props.sum}</h2>
				<div>今天：{this.state.wind}</div>
				<select ref={c => this.numberNode = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		)
	}
}

//普通写法
/* const mapDispatchToProps = dispatch => ({
	jia: value => dispatch(createIncrementAction(value)),
	jian: value => dispatch(createDecrementAction(value)),
	jiaAsync: (value,time) => dispatch(createIncrementAsyncAction(value,time))
}) */

//精简写法
/* const mapDispatchToProps = {
	jia:createIncrementAction,
	jian:createDecrementAction,
	jiaAsync:createIncrementAsyncAction
} */

export default connect(
	state => ({sum:state}), //映射状态
	//映射操作状态的方法
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction
	}
)(Count)
