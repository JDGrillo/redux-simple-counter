const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENTONE" action every time the +1 button is pressed
const incrementOneButton = document.getElementById('incrementOne');
incrementOneButton.addEventListener('click', e => dispatch({ type: "INCREMENTONE" }));

// Dispatch the "DECREMENTONE" action every time the -1 button is pressed
const decrementOneButton = document.getElementById('decrementOne');
decrementOneButton.addEventListener('click', e => dispatch({ type: "DECREMENTONE" }));

// Dispatch the "INCREMENTFIVE" action every time the +1 button is pressed
const incrementFiveButton = document.getElementById('incrementFive');
incrementFiveButton.addEventListener('click', e => dispatch({ type: "INCREMENTFIVE" }));

// Dispatch the "DECREMENTFIVE" action every time the -1 button is pressed
const decrementFiveButton = document.getElementById('decrementFive');
decrementFiveButton.addEventListener('click', e => dispatch({ type: "DECREMENTFIVE" }));