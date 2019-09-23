function sortHandler() {
  // read input from UI
  // no arguments, no input! (for basic sort)

  // perform core logic
  mutated.sort();

  // write result to UI
  const codeString = 'mutated.sort();';
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const sortButton = document.getElementById('mutating-sort-button');
sortButton.addEventListener('click', sortHandler);
