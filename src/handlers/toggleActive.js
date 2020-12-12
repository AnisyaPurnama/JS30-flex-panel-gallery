'use strict';
/**
 * creates a mirror-image rendering of the user input and displays the growing artwork
 * @param {Event} event - triggered whenever a user releases a key in the input area
 */
  // ignore the event if the user is correcting a mistake
  // remove newlines from the input value
  //  keeps things pretty for the art
  //  and allows user to use enter to submit the same input unchanged
  
  function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }