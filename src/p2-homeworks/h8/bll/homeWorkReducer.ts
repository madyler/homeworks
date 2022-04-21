import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            newState.sort((a, b) => {
                if (a.name > b.name) {
                    return action.payload === 'up' ? 1 : -1
                }
                if (a.name < b.name) {
                    return action.payload === 'up' ? -1 : 1
                }
                return 0
            })
            return newState
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}