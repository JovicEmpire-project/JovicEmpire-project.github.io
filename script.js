// javascript for automatic slider
let currentSlide = 0; //keep track of current slide
const slides = document.querySelectorAll('.slide'); //select all slides
const totalSlides = slides.length; //get the total number of slides

//function to move to the next slides
function nextSlide() {
    //hide the current slide
    slides[currentSlide].classList.remove('active');

    //update the current slide index
    currentSlide = (currentSlide+1) % totalSlides; //loop back to the first slide after the last

    //show the new slide
    slides[currentSlide].classList.add('active');
}
//Set the interval for automatic sliding (e.g., every 3 seconds)
setInterval(nextSlide, 3000);

//Function to move to the previous slide
function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalslides; //Loop back to the last slide
    slides[currentSlide].classList.add('active');
}


// Select all dot elements
const dots = document.querySelectorAll('.dot');

// Function to update active dot
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active')); // Remove 'active' class from all dots
    dots[currentSlide].classList.add('active'); // Add 'active' class to the current dot
}

// Modify the nextSlide function to update dots
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    updateDots(); // Update dots after sliding
}

// Event listeners for dot clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = index; // Set currentSlide to the dot's index
        slides[currentSlide].classList.add('active');
        updateDots();
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  /* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
