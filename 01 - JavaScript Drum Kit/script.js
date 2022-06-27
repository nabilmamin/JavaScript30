window.addEventListener('keydown', function(e) {
    const audioItem = document.querySelector(`audio[data-key = "${e.keyCode}"]`); // calls the audio element with data-key = keycode, uses ES6 template strings method above to call a variable in the parameter.
    // console.log(audioItem) //check that the code works with console.
    if (!audioItem) return; // when audioItem = null, we stop the function and prevent TypeError: null warnings in the console.
    audioItem.currentTime = 0; // rewind to the start, reduces delay of multiple key presses. 
    audioItem.play(); // plays the audio clip
    
    const keyItem = document.querySelector(`.key[data-key = '${e.keyCode}']`) // calls the div.class element '.key' with data-key = keycode. 
    // console.log(keyItem) //check that the code works with console.
    keyItem.classList.add('playing'); //toggle wont make sense here, we need a transition end event listener (or timeout);

    // const keys = document.querySelectorAll('.keys'); // nodelist of all div.key elements

    // function removeTransition(e) {
    //     // console.log(e) //we're testing the key.addEventListener with this callback function to see what data we're working with.
    //     //there are multiple logs due to each attribute that is being transition, we will pick just one:
    //     if (e.propertyName !== 'transform') return; //skip if its not a transform
    //     // console.log(e.propertyName) //will only return the propertyName of transform
    //     // console.log(this)
    //     // 'this' is equal to whatever got called against it, in this case .key (bc the function removeTransition is called in the addEventListener of .key so 'this' = '.key' (iterable version))
    //     this.classList.remove('playing')


    // } 

    // keys.forEach((key) => key.addEventListener('transitionend', removeTransition)); //iterate over all keys to listen for transition end and then call the funciton removeTransition;

});

window.addEventListener('keyup', function(e) {
    const keyItemUp = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!keyItemUp) return;
    keyItemUp.classList.remove('playing');
})