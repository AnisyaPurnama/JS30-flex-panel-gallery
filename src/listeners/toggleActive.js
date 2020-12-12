'use strict';

/**
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
