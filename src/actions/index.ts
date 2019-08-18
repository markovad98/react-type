export const deleteTodo = (id: number) => {
	return {
		type: 'DELETE_TODO',
		payload: id
	};
};

export const addTodo = (title: string) => {
	return {
		type: 'ADD_TODO',
		payload: title
	};
};

export const switchTheme = () => {
	return {
		type: 'SWITCH_THEME',
		payload: null
	};
};

export const changeSearch = (text: string) => {
	return {
		type: 'CHANGE_SEARCH',
		payload: text
	};
};

export const filterTodo = () => {
	return {
		type: 'FILTER_TODO',
		payload: null
	};
};
