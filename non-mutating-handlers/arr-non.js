function nonMutatedHandler() {
  // read input from UI
  // no arguments no inputs

  // perform core logic
  // nothing to do! just showing the nonMutateday as it is

  // write result to UI
  const codeString = 'nonMutated;';
  const currentRendered = renderArray(nonMutated, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(nonMutated);
}
const nonMutatedButton = document.getElementById('non-array-button');
nonMutatedButton.addEventListener('click', nonMutatedHandler);
