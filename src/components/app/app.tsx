import React, { Component } from 'react';
import './app.css';
import TodoList from '../todo-list';
import AddTodo from '../add-todo';
import Header from '../header';
import { connect } from 'react-redux';
import { Istate } from '../../reducers';

class App extends Component<any, any> {
	render() {
		const { darkTheme } = this.props;
		const style = {
			main: {
				backgroundColor: darkTheme ? '#2e2e2e' : 'white'
			}
		};
		return (
			<div style={style.main} className="main">
				<div className="app">
					<Header />
					<AddTodo />
					<TodoList />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: Istate) => {
	return {
		darkTheme: state.darkTheme
	};
};

export default connect(mapStateToProps)(App);
