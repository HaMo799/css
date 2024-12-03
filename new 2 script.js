  // Hide boot screen and show page after loading
  //  window.addEventListener('load', function() {
    //  setTimeout(function() {
      //  document.getElementById('boot-screen').style.display = 'none';
       // document.getElementById('page').style.display = 'block'; // Show the page content
    //  }, 3000); // Simulated loading time (3 seconds)
   // });
    
    
      window.onload = function () {
      const loader = document.getElementById("boot-screen");
      const content = document.getElementById("page");

      // Hide the loader and show the main content
      loader.style.display = "none";
      content.style.display = "block";
    };
	
	 // Array of text messages to display
  const aboutTexts = [
    "This IoT Patient Monitor helps track vital signs in real-time.",
    "The dashboard integrates various sensors for a comprehensive health overview.",
    "Data is securely stored and accessible for analysis.",
    "Our mission is to make healthcare monitoring efficient and effective.",
    "Stay updated with patient history and diagnostics through this platform."
  ];

  let textIndex = 0; // Current text index
  const aboutTextElement = document.getElementById("about-text");

  // Animation function
  function animateTextChange(newText) {
    // Fade out
    aboutTextElement.style.opacity = "0";
    aboutTextElement.style.transform = "translateY(-20px)"; // Moves text upward
    aboutTextElement.style.transition = "opacity 1s, transform 1s"; // Smooth transition

    // Wait for fade-out to complete
    setTimeout(() => {
      // Change the text
      aboutTextElement.innerText = newText;

      // Fade in
      aboutTextElement.style.opacity = "1";
      aboutTextElement.style.transform = "translateY(0px)"; // Brings text back to original position
    }, 1000); // Matches the fade-out duration
  }

  // Function to cycle through texts
  function updateAboutText() {
    textIndex = (textIndex + 1) % aboutTexts.length; // Cycle through texts
    animateTextChange(aboutTexts[textIndex]);
  }

  // Trigger the text update every 5 seconds
  setInterval(updateAboutText, 5000);
  
  
  // Toggle history iframe
document.getElementById('history-link').addEventListener('click', function() {
    var historyEmbed = document.getElementById('history-embed');
    var hidepage = document.getElementById('page');

    // Toggle the iframe visibility
    if (historyEmbed.style.display === "none" || historyEmbed.style.display === "") {
        historyEmbed.style.display = "block";
        hidepage.style.display = "none";
    } else {
        historyEmbed.style.display = "none";
        hidepage.style.display = "block";
    }
});