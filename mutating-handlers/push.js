function pushHandler() {
  // read input from UI
  const pushInput = document.getElementById('push-input');
  const newValue = pushInput.value;

  // perform core logic
  mutated.push(newValue);

  // write result to UI
  const codeString = `mutated.push(${newValue}); `;
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const pushButton = document.getElementById('mutating-push-button');
pushButton.addEventListener('click', pushHandler);
