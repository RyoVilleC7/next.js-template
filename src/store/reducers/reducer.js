export const initialState = {
    foo: "bar"
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FOO":
            return {
                ...state,
                foo: "baz"
            }
    
        default:
            return state
    }
}