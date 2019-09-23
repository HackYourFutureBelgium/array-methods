function popHandler() {
  // read input from UI
  // no arguments no inputs, for basic pop

  // perform core logic
  mutated.pop();

  // write result to UI
  const codeString = 'mutated.pop();';
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const popButton = document.getElementById('mutating-pop-button');
popButton.addEventListener('click', popHandler);
