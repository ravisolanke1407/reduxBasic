export const incrementNumber =(number)=>{
    return{
        type:"INCREMENT",
        payload:number
    }
}

export const decrementNumber =(number)=>{
    return{
        type:"DECREMENT",
        payload:number
    }
}

export const multiplyNumber =(number)=>{
    return{
        type:"MUL",
        payload:number
    }
}

export const divideNumber =(number)=>{
    return{
        type:"DIV",
        payload:number
    }
}