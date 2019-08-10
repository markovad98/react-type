export const initialState: Istate = {
	todoList: [
		{
			title: 'Learn React',
			status: true,
			id: 1,
			date: `Число: ${new Date().getDate()}, час: ${new Date().getHours()}`
		},
		{
			title: 'Learn Redux',
			status: true,
			id: 2,
			date: `Число: ${new Date().getDate()}, час: ${new Date().getHours()}`
		}
	]
};

export interface Istate {
	todoList: { title: string; status: boolean; id: number; date: string }[] | [];
}

export interface Iaction {
	type: string | null;
	payload: any | null;
}

export const reducer = (state: Istate = initialState, action: Iaction): any => {
	switch (action.type) {
		case 'DELETE_TODO':
			return {
				todoList: state.todoList.filter((todo) => todo.id !== action.payload)
			};
		default:
			return state;
	}
};
