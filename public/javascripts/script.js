// Get all the div elements with the class "clickable-div"
const divs = document.querySelectorAll('.it');


// Add click event listener to each div
divs.forEach(function(div) {
  div.addEventListener('click', function() {

    divs.forEach(function(d) {
        if (d !== div) { // Reset margin-right for other divs
          d.style.marginRight = '0px';
        }
      });
    // Toggle margin-right between 20px and 0px when clicked
    if (div.style.marginRight === '0px') {
      div.style.marginRight = '150px';
    } else {
      div.style.marginRight = '0px';
    //   div.style.left = '-150px'; 
    }
  });
});
