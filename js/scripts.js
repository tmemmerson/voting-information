$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#of-age').show();
    
  } else {
    $('#under-age').show();
  }
});