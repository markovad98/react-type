export interface Istate {
	todoList: Itodo[];
	darkTheme: boolean;
	searchInput: string;
	todoListByFilter: Itodo[];
}

export interface Itodo {
	title: string;
	status: boolean;
	id: number;
}

export interface Iaction {
	type: string;
	payload?: any;
}

export const initialState: Istate = {
	todoList: [],
	todoListByFilter: [],
	darkTheme: false,
	searchInput: ''
};

export const reducer = (state: Istate = initialState, action: Iaction): any => {
	switch (action.type) {
		case 'DELETE_TODO':
			return {
				...state,
				todoList: state.todoList.filter((todo: Itodo) => todo.id !== action.payload),
				todoListByFilter: state.todoListByFilter.filter((todo: Itodo) => todo.id !== action.payload)
			};
		case 'ADD_TODO':
			return {
				...state,
				todoList: state.todoList.concat([
					{
						title: action.payload,
						status: true,
						id: state.todoList.length ? Math.max(...state.todoList.map((todo) => todo.id)) + 1 : 1
					}
				]),
				todoListByFilter: state.todoList.concat([
					{
						title: action.payload,
						status: true,
						id: state.todoList.length ? Math.max(...state.todoList.map((todo) => todo.id)) + 1 : 1
					}
				])
			};
		case 'SWITCH_THEME':
			return {
				...state,
				darkTheme: !state.darkTheme
			};
		case 'CHANGE_SEARCH':
			return {
				...state,
				searchInput: action.payload
			};
		case 'FILTER_TODO':
			state.todoListByFilter = state.todoList;
			if (state.searchInput === '') {
				return {
					...state,
					todoListByFilter: state.todoList
				};
			} else {
				return {
					...state,
					todoListByFilter: state.todoListByFilter.filter(
						(todo) => todo.title.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1
					)
				};
			}

		default:
			return state;
	}
};
