function nonShiftHandler() {
  // read input from UI
  // no arguments no inputs, for basic shift

  // perform core logic
  const shiftedCopy = nonMutated.slice(1);

  // write result to UI
  const codeString = 'const shiftedCopy = nonMutated.slice(1);';

  const currentRendered = renderArray(shiftedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(shiftedCopy);
}
const nonShiftButton = document.getElementById('non-shift-button');
nonShiftButton.addEventListener('click', nonShiftHandler);
