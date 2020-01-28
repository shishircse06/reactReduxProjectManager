const initState = {
	projects:[
		{'id': 1, 'title': 'first project', 'content':'first project content'},
		{'id': 2, 'title': 'second project', 'content':'second project content'},
		{'id': 3, 'title': 'third project', 'content':'second project content'}
	]
}
const projectReducer = (state = initState, action) => {
	switch(action.type){
		case 'CREATE_PROJECT':
			console.log('project creation', action.project)
			return state
		case 'CREATE_PROJECT_ERROR':
			console.log('project creation error', action.err)
			return state
		default:
			return state	
	}
}

export default projectReducer