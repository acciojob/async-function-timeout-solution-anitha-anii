async function showMessageWithDelay(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return message;
}



    const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', async () => {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  const message = await showMessageWithDelay(textInput, delayInput);
  output.textContent = message;
});
