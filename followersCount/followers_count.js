let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display and count simultaneously
    checkCountValue(); // Check count value and display messages
  }
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //gets elt with that id, and replaces it with count (innerHTML to get to html code)
  }
  function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }