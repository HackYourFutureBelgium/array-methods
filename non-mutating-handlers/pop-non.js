function nonPopHandler() {
  // read input from UI
  // no arguments no inputs, for basic pop

  // perform core logic
  const poppedCopy = nonMutated.slice(0, -1);

  // write result to UI
  const codeString = 'const poppedCopy = nonMutated.slice(0, -1);';

  const currentRendered = renderArray(poppedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(poppedCopy);
}
const nonPopButton = document.getElementById('non-pop-button');
nonPopButton.addEventListener('click', nonPopHandler);
