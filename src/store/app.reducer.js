import { Actions } from './actions.js'

// reducers should not mutate state
const postReducer = (previousState = [], action) => {
    switch (action.type) {
        case Actions.ADD_POST: {
            // change state once you add a post
        }

        case Actions.DELETE_POST: {
            //change state once you delete a post
        }

        default:
            return previousState
    }
}

export { postReducer }
