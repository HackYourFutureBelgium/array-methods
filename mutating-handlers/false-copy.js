function falseCopyHandler() {
  // read input from UI
  // no arguments no inputs

  // perform core logic
  const falseCopyOfArray = mutated;

  // write result to UI
  const codeString = 'const falseCopyOfArray = mutated;';

  const currentRendered = renderArray(falseCopyOfArray, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(falseCopyOfArray);
}
const falseCopyButton = document.getElementById('false-copy-button');
falseCopyButton.addEventListener('click', falseCopyHandler);
