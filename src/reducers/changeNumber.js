const InitialState = 10

 const changeNumber = (state = InitialState, action) => {
     console.log(action,state)
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export default changeNumber