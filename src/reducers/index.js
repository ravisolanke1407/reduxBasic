import { combineReducers } from "redux";
import changeNumber from "./changeNumber";
import mulAndDivNumber from "./mulAndDiv";
const rootReducer = combineReducers({
    changeNumber,
    mulAndDivNumber
})

export default rootReducer