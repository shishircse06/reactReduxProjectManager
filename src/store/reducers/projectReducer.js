const initState = {
	projects:[
		{'id': 1, 'title': 'first project', 'content':'first project content'},
		{'id': 2, 'title': 'second project', 'content':'second project content'},
		{'id': 3, 'title': 'third project', 'content':'second project content'}
	]
}
const projectReducer = (state = initState, action) => {
	return state
}

export default projectReducer