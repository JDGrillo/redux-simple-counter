const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type, value, color } = action;
    if (type === "CHANGEVALUE") {
        return {
            value: state.value + value,
            color: state.color
        }
    }
    else if (type === "CHANGECOLOR") {
        return {
            value: state.value,
            color: color
        }
    }
    return state
}