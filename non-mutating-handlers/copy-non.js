function trueCopyHandler() {
  // read input from UI
  // no arguments no inputs

  // perform core logic
  const trueCopyOfArray = [...nonMutated];

  // write result to UI
  const codeString = 'const trueCopyOfArray = [...nonMutated];';

  const currentRendered = renderArray(trueCopyOfArray, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(trueCopyOfArray);
}
const nonCopyButton = document.getElementById('non-copy-button');
nonCopyButton.addEventListener('click', trueCopyHandler);
