function shiftHandler() {
  // read input from UI
  // no arguments no inputs, for basic shift

  // perform core logic
  mutated.shift();

  // write result to UI
  const codeString = 'mutated.shift();';
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const shiftButton = document.getElementById('mutating-shift-button');
shiftButton.addEventListener('click', shiftHandler);
