  const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const btn = document.getElementById('btn');
    const output = document.getElementById('output');

    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function displayMessage() {
     
      const message = textInput.value;
      const delayInSeconds = Number(delayInput.value);

     
      await delay(delayInSeconds * 1000);

      output.textContent = message;
    }

    btn.addEventListener('click', () => {
      displayMessage();
    });