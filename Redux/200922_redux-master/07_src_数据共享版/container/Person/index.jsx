import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
	state = {
		name:'',
		age:''
	}

	addPerson = ()=>{
		//获取用户的输入
		const {name,age} = this.state
		this.props.jiayiren({name,age})
		
	}

	savePersonData = type => event => this.setState({[type]:event.target.value})

	render() {
		return (
			<div>
				<h1>我是Person组件</h1>
				<h4>我读取Count组件的和是：{this.props.sum}</h4>
				<input onChange={this.savePersonData('name')} type="text" placeholder="名字"/>
				<input onChange={this.savePersonData('age')} type="text" placeholder="年龄"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.yiduiren.map((personObj,index)=>{
							return <li key={index}>{personObj.name}---{personObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({
		sum:state.he,
		yiduiren:state.rens
	}),
	{
		jiayiren:createAddPersonAction
	}
)(Person)
