function updateSensorData() {
    // URL of the endpoint
    const endpoint = 'https://script.google.com/macros/s/AKfycbwmBeoU5PlqicEG1b8kAtKrpDZJlMqjdjZu6CdCY89NFCx1lXZbbif_HDv_p5nTAzU/exec?sts=read';

    // Fetch data from the endpoint
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the sensor values on the webpage
            document.getElementById('temp').textContent = `${data.temperature} `;
            document.getElementById('humd').textContent = `${data.humidity} %`;
            document.getElementById('bpm').textContent = `${data.heart_rate} BPM`;
            document.getElementById('spo2').textContent = `${data.spo2} %`;
            document.getElementById('airtemp').textContent = `${data.air_temperature} `;

            // Process and update the early diagnosis text by splitting it
            const earlydiagElement = document.getElementById('earlydiag');
            const earlydigText = data.earlydig; // Get the early dig text from the database
            
            // Split the text by commas
            const parts = earlydigText.split(',');

            // Clear the content of the earlydiag element
            earlydiagElement.innerHTML = '';

            // Insert each part into the #earlydiag element, each part on a new line
            parts.forEach(function(part) {
                var line = document.createElement('div');
                line.textContent = part.trim();  // Trim any leading/trailing spaces
                earlydiagElement.appendChild(line);
            });
        })
        .catch(error => {
            console.error('There was a problem fetching the sensor data:', error);
        });
}

myinterval=setInterval(updateWelcomeText, 5000);


// Initial fetch to populate data when the page loads
updateSensorData();

// Set an interval to update sensor data every 2 seconds
setInterval(updateSensorData, 2000);


const welocometext = [
    "<span style=' text-align:'center' '>This IoT Patient Monitor allows for continuous, real-time tracking of vital signs, providing immediate insights into the patient health.</span>",
    "The integrated dashboard combines data from multiple sensors",
    "Data is securely stored and accessible for analysis.",
    " Get notified of any critical changes or irregularities in real-time.",
    "easily integrate with existing healthcare systems to ensure smooth data sharing"
   ];
  
  
  function updateAboutText() {
    textIndex = (textIndex + 1) % aboutTexts.length; // Cycle through texts
    animateTextChange(aboutTexts[textIndex]);
  }






    
      window.onload = function () {
      const loader = document.getElementById("boot-screen");
      const content = document.getElementById("page");
      const title = document.getElementById('animated-title');
  	  text2 = title.innerText; // Get the content of the <h1>
  	  title.innerText = ''; // Clear the original text
      // Hide the loader and show the main content with a fade-out effect
	  loader.style.transition = "opacity 1s";  // Ensure smooth transition for opacity
      loader.style.opacity = "0"; // Fade out the loader

		  setTimeout(() => {
		    loader.style.display = "none"; // After fade out, hide the loader
		    content.style.display = "block"; // Show the main content
		   clearInterval(myinterval);
		   }, 1000); // 1000ms matches the fade-out duration        
  text2.split('').forEach((char, index) => {
        console.log(char)
        
     const span = document.createElement('span');
     
      // Ensure spaces are preserved as they are
    if (char === ' ') {span.innerText= '\u00A0'; span.style.display = 'inline-block';} // To keep the space visible and in position
    else span.innerText= char;
    console.log(span)

    
   
    title.appendChild(span);
    // Apply the delay for each character using animation delay
    span.style.animationDelay = `${index * 0.1}s`;});
      
    };
    
    
    
    
    
	
	 // Array of text messages to display
  const aboutTexts = [
    "This IoT Patient Monitor helps track vital signs in real-time.",
    "The dashboard integrates various sensors for a comprehensive health overview.",
    "Data is securely stored and accessible for analysis.",
    "Our mission is to make healthcare monitoring efficient and effective.",
    "Stay updated with patient history and diagnostics through this platform.",
    "<span style='color:rgb(131, 235, 52); font-weight: bold ; font-size:20px'> (e-health) </span> Coming Soon....."
  ];

  let textIndex = 0; // Current text index
  const aboutTextElement = document.getElementById("about-text");
  let boot_screen = document.getElementById("boot-screen");

  // Animation function
  function animateTextChange(newText) {
     // Fade out
    aboutTextElement.style.opacity = "0";
    aboutTextElement.style.transform = "translateY(-20px)"; // Moves text upward
    aboutTextElement.style.transition = "opacity 1s, transform 1s"; // Smooth transition

    // Wait for fade-out to complete
    setTimeout(() => {
      // Change the text
      aboutTextElement.innerHTML= newText;
      // Fade in
      aboutTextElement.style.opacity = "1";
      aboutTextElement.style.transform = "translateY(0px)"; // Brings text back to original position
    }, 1000); // Matches the fade-out duration
  }



function animateWelocmeChange(newText) {
     // Fade out
    aboutTextElement.style.opacity = "0";
    aboutTextElement.style.transform = "translateY(-20px)"; // Moves text upward
    aboutTextElement.style.transition = "opacity 1s, transform 1s"; // Smooth transition

    // Wait for fade-out to complete
    setTimeout(() => {
      // Change the text
      boot_screen.innerHTML= newText;
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
  
    // Function to cycle through texts
  function updateWelcomeText() {
    textIndex = (textIndex + 1) % welocometext .length; // Cycle through texts
    animateWelocmeChange(welocometext[textIndex]);
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


  // Toggle history iframe
document.getElementById('graph-link').addEventListener('click', function() {
    var historyEmbed = document.getElementById('graph-id');
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

document.addEventListener('DOMContentLoaded', adjustIframePosition); // Correct event listener setup

// Function to adjust iframe position and size
function adjustIframePosition() {
    console.log('The frame adjusted, see it');
    
    const menu = document.querySelector('#menu'); // Menu element
    const iframe1 = document.getElementById('iframeid1'); // Iframe element
     const iframe2 = document.getElementById('iframeid2'); // Iframe element
     const menuHeight = menu.offsetHeight;  // Get the menu height
    
    if (menu || iframe1) console.log('Menu or Iframe1 found');
    


 if (menu || iframe2) console.log('Menu or Iframe2 found');
       
    console.log('Menu:', menu);  // Log menu element
    console.log('Iframe:', iframe1);  // Log iframe element
	console.log('Iframe:', iframe2);  // Log iframe element

    // Ensure the iframe is positioned properly for 'top' to work
    iframe1.style.position = 'absolute'; // Ensure position is absolute or relative
    iframe1.style.top = `${menuHeight}px`;  
    iframe1.style.height = `calc(100% - ${menuHeight}px)`;  
    
	// Ensure the iframe is positioned properly for 'top' to work
    iframe2.style.position = 'absolute'; // Ensure position is absolute or relative
    iframe2.style.top = `${menuHeight}px`;  
    iframe2.style.height = `calc(100% - ${menuHeight}px)`;  
    


    console.log("Iframe top: " + iframe.style.top);
    console.log("Iframe height: " + iframe.style.height);
}

// Listen to window resize to adjust iframe position and size dynamically
window.addEventListener('resize', adjustIframePosition);
