export function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, login: true }
        case 'logoff':
            return { ...state, login: true }
        default:
            throw new Error()
    }
}