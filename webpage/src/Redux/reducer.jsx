import { combineReducers } from "redux"
const initialAddState = {
    result : 1
}

const addReducer = ( state = initialAddState , action) =>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                result: state.result + action.payload
            }
            default:
                return state
    }
}


const initialSubtractState = {
    result : 1,
}

const subtractReducer = ( state = initialSubtractState , action) =>{
    switch(action.type){
        case 'SUBTRACT' :
            return{
                ...state,
                result: state.result - action.payload
            }
            default:
                return state
    }
}


const initialMultipleState = {
    result : 1
}

const multipleReducer = ( state = initialMultipleState , action) =>{
    switch(action.type){
        case 'MULTIPLE':
            return{
                ...state,
                result: state.result * action.payload
            }
            default:
                return state
    }
}


const initialDivisionState = {
    result : 1
}

const divisionReducer = ( state = initialDivisionState , action) =>{
    switch(action.type){
        case 'DIVISION':
            return{
                ...state,
                result: state.result / action.payload
            }
            default:
                return state
    }
}


const initialModulusState = {
    result : 8
}

const modulusReducer = ( state = initialModulusState , action) =>{
    switch(action.type){
        case 'MODULUS':
            return{
                ...state,
                result: state.result % action.payload
            }
            default:
                return state
    }
}


const initialPowerState = {
    result : 6
}

const powerReducer = ( state = initialPowerState , action) =>{
    switch(action.type){
        case 'POWER':
            return{
                ...state,
                result: state.result ** action.payload
            }
            default:
                return state
    }
}
const rootReducer = combineReducers({
    add : addReducer,
    subtract :subtractReducer,
    multiple : multipleReducer,
    division : divisionReducer,
    modulus : modulusReducer,
    power : powerReducer
});

export default rootReducer;
