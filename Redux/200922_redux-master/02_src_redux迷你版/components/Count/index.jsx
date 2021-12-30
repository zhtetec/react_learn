import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
	state = {
		wind:'北风6级'
	}

	increment = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		//通知redux加
		store.dispatch({type:'increment',data:value*1})
	}

	decrement = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		//通知redux减
		store.dispatch({type:'decrement',data:value*1})
	}

	incrementIfOdd = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		if(store.getState() % 2 !== 0){
			store.dispatch({type:'increment',data:value*1})
		}
	}

	incrementAsync = ()=>{
		//获取用户选择的数字
		const {value} = this.numberNode
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}


	render() {
		return (
			<div>
				<h2>当前求和为：{store.getState()}</h2>
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
