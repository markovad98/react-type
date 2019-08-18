import React, { Component } from 'react';
import './add-todo.css';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { Input } from 'antd';
import { Istate } from '../../reducers';

class AddTodo extends Component<any, any> {
	state = {
		inputText: ''
	};

	onInput = (e: any) => {
		this.setState({ inputText: e.target.value });
	};

	onKeyPress = (e: any) => {
		if (e.key === 'Enter') {
			this.state.inputText
				? this.props.addTodo(this.state.inputText) && this.setState({ inputText: '' })
				: alert('хiй!');
		}
	};

	render() {
		return (
			<section className="add-todo">
				<Input
					className="add-todo-input"
					placeholder="Title of todo"
					type="text"
					value={this.state.inputText}
					onChange={this.onInput}
					onKeyPress={this.onKeyPress}
				/>
			</section>
		);
	}
}

const mapStateToProps = (state: Istate) => {
	return state;
};

const mapDispatchToProps = {
	addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
