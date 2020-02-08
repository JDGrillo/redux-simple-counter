const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    const inputDOM = document.getElementById('customAmount');
    inputDOM.value = "";
    counterDOM.innerHTML = state.value;
    counterDOM.style.color = state.color;
}