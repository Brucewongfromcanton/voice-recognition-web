// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support the Web Speech API. Please use Chrome, Edge, or Firefox.');
  } else {
    // Create a new instance of SpeechRecognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
    // Configure the recognition settings
    recognition.continuous = false; // Set to true for continuous listening
    recognition.interimResults = false; // Set to true to get interim results
    recognition.lang = 'en-US'; // Set the language
  
    // Get DOM elements
    const startBtn = document.getElementById('start-btn');
    const output = document.getElementById('output');
  
    // Add event listener to the button
    startBtn.addEventListener('click', () => {
      recognition.start(); // Start listening
      output.textContent = 'Listening...';
    });
  
    // Handle the result event
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the recognized text
      output.textContent = `You said: ${transcript}`;
    };
  
    // Handle errors
    recognition.onerror = (event) => {
      output.textContent = `Error: ${event.error}`;
    };
  
    // Handle when speech recognition ends
    recognition.onend = () => {
      output.textContent = 'Speech recognition ended.';
    };
  }