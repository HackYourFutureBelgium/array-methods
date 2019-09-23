function nonSortHandler() {
  // read input from UI
  // no arguments, no input! (for basic sort)

  // perform core logic
  const sortedCopy = [...nonMutated].sort();

  // write result to UI
  const codeString = 'const sortedCopy = [...nonMutated].sort();';

  const currentRendered = renderArray(sortedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(sortedCopy);
}
const nonSortButton = document.getElementById('non-sort-button');
nonSortButton.addEventListener('click', nonSortHandler);
