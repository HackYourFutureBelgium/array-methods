function nonPushHandler() {
  // read input from UI
  const pushInput = document.getElementById('non-push-input');
  const newValue = pushInput.value;

  // perform core logic
  const pushedCopy = [...nonMutated, newValue];

  // write result to UI
  const codeString = `const pushedCopy = [...nonMutated, ${newValue}];`;

  const currentRendered = renderArray(pushedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(pushedCopy);
}
const nonPushButton = document.getElementById('non-push-button');
nonPushButton.addEventListener('click', nonPushHandler);
