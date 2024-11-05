const DEFAULT = 0
let counter = DEFAULT

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btnDecr').addEventListener('click', onDecreaseClicked);
    document.querySelector('#btnReset').addEventListener('click', onResetClicked);
    document.querySelector('#btnIncr').addEventListener('click', onIncreaseClicked);
});


// Actions taken after the 'Decrease' button was clicked. 
// Actions include decrease the counter.

function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after the 'Increase' button
 * was clicked. Actions include increase the counter.
 */

function onIncreaseClicked() {
    increaseCounter()
}

function onResetClicked() {
    resetCounter();
}


// Model

/**
 * Decreases the counter and render to UI.
 */

function decreaseCounter(){
    counter--
    showCounter()
}

/**
 * Resets the counter and renders to UI.
 */
function resetCounter(){
    counter = DEFAULT;
    showCounter();
}

/**
 * Increases the counter by one and renders to UI.
 */


function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns the counter to the corresponding UI Element.
 * And gives styling accordingly.
 */

function showCounter() {
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter
    styleCounterElement(counterDOM)
}