import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';
import { switchTheme, changeSearch, filterTodo } from '../../actions';
import { Istate } from '../../reducers';

class Header extends Component<any, any> {
	public changeSearchInput = (e: any) => {
		this.setState({ searchInput: e.target.value });
	};

	render() {
		const { switchTheme, darkTheme, searchInput, todoList } = this.props;

		return (
			<div className="header">
				<button
					style={{
						background: darkTheme
							? 'linear-gradient(45deg, #7b47ff, #ff47a9)'
							: 'linear-gradient(45deg, #1affb3, #0f9bff)'
					}}
					className="header__switch-btn"
					onClick={switchTheme}
				>
					{darkTheme ? 'White theme' : 'Dark theme'}
				</button>

				<input
					disabled={todoList.length ? false : true}
					value={searchInput}
					onChange={(e) => {
						this.props.changeSearch(e.target.value);
						this.props.filterTodo();
					}}
					className="header__search"
					placeholder={todoList.length ? 'Search todo...' : 'Nothing to look for...'}
					type="text"
				/>
			</div>
		);
	}
}

const mapStateToProps = (state: Istate) => {
	return {
		darkTheme: state.darkTheme,
		searchInput: state.searchInput,
		todoList: state.todoList
	};
};

const mapDispatchToProps = {
	switchTheme,
	changeSearch,
	filterTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
