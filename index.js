// Your code here


function addingEventListener() {
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  }
  
  function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  module.exports = { addingEventListener, moveDodgerLeft, moveDodgerRight };
