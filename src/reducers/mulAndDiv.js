import store from "../store";

const InitialState = 10
console.log(store)
const mulAndDivNumber = (state = InitialState,action)=>{
    switch (action.type) {
        case "MUL":return state * action.payload;
        case "DIV":return state/action.payload;
        default:return state;
    }
}   

export default mulAndDivNumber