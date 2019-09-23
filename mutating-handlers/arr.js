function mutatedHandler() {
  // read input from UI
  // no arguments no inputs

  // perform core logic
  // nothing to do! just showing the mutated as it is

  // write result to UI
  const codeString = 'mutated;'
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const mutatedButton = document.getElementById('mutating-array-button');
mutatedButton.addEventListener('click', mutatedHandler);
