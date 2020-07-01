function nonUnshiftHandler() {
  // read input from UI
  const unshiftInput = document.getElementById('non-unshift-input');
  const newValue = unshiftInput.value;

  // perform core logic
  const unshiftedCopy = [newValue, ...nonMutated];

  // write result to UI
  const codeString = `const unshiftedCopy = [${newValue}, ...nonMutated];`;

  const currentRendered = renderArray(unshiftedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(unshiftedCopy);
}
const nonUnshiftButton = document.getElementById('non-unshift-button');
nonUnshiftButton.addEventListener('click', nonUnshiftHandler);
