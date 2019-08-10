import React, { Component } from 'react';

export default class TodoItem extends Component<any, any> {
	render() {
		const { todo: { title, status, date } } = this.props;

		return (
			<div>
				<span>{title}</span>
				<span>{status}</span>
				<span>{date}</span>
			</div>
		);
	}
}
