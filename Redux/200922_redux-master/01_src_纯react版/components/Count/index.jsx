import React, { Component } from 'react'

export default class Count extends Component {
	state = {sum:0}

	increment = ()=>{
		//获取原状态
		const {sum} = this.state
		//获取用户选择的数字
		const {value} = this.numberNode
		//更新状态
		this.setState({sum:sum+value*1})
	}

	decrement = ()=>{
		//获取原状态
		const {sum} = this.state
		//获取用户选择的数字
		const {value} = this.numberNode
		//更新状态
		this.setState({sum:sum-value*1})
	}

	incrementIfOdd = ()=>{
		//获取原状态
		const {sum} = this.state
		//获取用户选择的数字
		const {value} = this.numberNode
		//更新状态
		if(sum % 2 !== 0){
			this.setState({sum:sum+value*1})
		}
	}

	incrementAsync = ()=>{
		//获取原状态
		const {sum} = this.state
		//获取用户选择的数字
		const {value} = this.numberNode
		//更新状态
		setTimeout(()=>{
			this.setState({sum:sum+value*1})
		},500)
	}


	render() {
		return (
			<div>
				<h2>当前求和为：{this.state.sum}</h2>
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
