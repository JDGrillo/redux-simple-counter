const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENTONE") {
        return {
            value: state.value + 1
        }
    }
    else if (type === "DECREMENTONE") {
        return {
            value: state.value - 1
        }
    }
    else if (type === "INCREMENTFIVE") {
        return {
            value: state.value + 5
        }
    }
    else if (type === "DECREMENTFIVE") {
        return {
            value: state.value - 5
        }
    }
    return state
}