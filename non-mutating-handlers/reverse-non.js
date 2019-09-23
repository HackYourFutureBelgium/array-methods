function nonReverseHandler() {
  // read input from UI
  // no arguments no inputs, for basic reverse

  // perform core logic
  const reversedCopy = [...nonMutated].reverse();

  // write result to UI
  const codeString = 'const reversedCopy = [...nonMutated].reverse();';

  const currentRendered = renderArray(reversedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(reversedCopy);
}
const nonReverseButton = document.getElementById('non-reverse-button');
nonReverseButton.addEventListener('click', nonReverseHandler);
