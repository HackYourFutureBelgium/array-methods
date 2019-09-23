function unshiftHandler() {
  // read input from UI
  const unshiftInput = document.getElementById('unshift-input');
  const newValue = unshiftInput.value;

  // perform core logic
  mutated.unshift(newValue);

  // write result to UI
  const codeString = `mutated.unshift(${newValue});`;
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const unshiftButton = document.getElementById('mutating-unshift-button');
unshiftButton.addEventListener('click', unshiftHandler);
