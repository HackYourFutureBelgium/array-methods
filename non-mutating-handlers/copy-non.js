function copyHandler() {
  // read input from UI
  // no arguments no inputs

  // perform core logic
  const copyOfArray = [...nonMutated];

  // write result to UI
  const codeString = 'const copyOfArray = [...nonMutated];';

  const currentRendered = renderArray(copyOfArray, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(copyOfArray);
}
const nonCopyButton = document.getElementById('non-copy-button');
nonCopyButton.addEventListener('click', copyHandler);
