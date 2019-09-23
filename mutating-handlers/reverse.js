function reverseHandler() {
  // read input from UI
  // no arguments no inputs, for basic reverse

  // perform core logic
  mutated.reverse();

  // write result to UI
  const codeString = 'mutated.reverse();';
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const reverseButton = document.getElementById('mutating-reverse-button');
reverseButton.addEventListener('click', reverseHandler);
