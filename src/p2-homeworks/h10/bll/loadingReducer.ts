const initState = {
    isLoading: false
}

export type StateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE_LOADING', isLoading} as const)