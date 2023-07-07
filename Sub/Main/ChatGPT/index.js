document.getElementById("prompt-form").addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  
  event.preventDefault();

  // Get the user's prompt from the form input
  var prompt = document.getElementById("prompt-input").value;

  // Call the OpenAI API to generate a response
  var request = new XMLHttpRequest();
  request.open("POST", "https://api.openai.com/v1/engines/text-davinci-002/completions");
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Authorization", "Bearer sk"+"-ROaVs"+"XWjH"+"jxN"+"YAWA"+"zH5"+"iT3"+"Bl"+"bkF"+"JR"+"KT"+"nk7h"+"w3eVCcGeR"+"n"+"U"+"I"+"9");//<<== PLACE YOUR API KEY IN THE QUOTES
  request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Parse the JSON response and display the generated text
      var response = JSON.parse(this.responseText);
      var generatedText = response.choices[0].text;
      document.getElementById("generated-text").textContent = generatedText;

      // Clear the input field
      navigator.clipboard.writeText(generatedText);
      document.getElementById("prompt-input").value = "";
    }
  };
  var data = JSON.stringify({
    "prompt": prompt,
    "max_tokens": 400
  });
  request.send(data);
});
