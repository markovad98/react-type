export const deleteTodo = (id: number) => {
	return {
		type: 'DELETE_TODO',
		payload: id
	};
};
