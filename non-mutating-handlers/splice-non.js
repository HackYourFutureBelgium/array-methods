function nonSpliceHandler() {
  // read input from UI
  const spliceInputA = document.getElementById('non-splice-input-a');
  const stringA = spliceInputA.value;
  const a = Number(stringA);

  const spliceInputB = document.getElementById('non-splice-input-b');
  const stringB = spliceInputB.value;
  const b = Number(stringB);

  const spliceInputC = document.getElementById('non-splice-input-c');
  const c = spliceInputC.value;

  // perform core logic
  const splicedCopy = [...nonMutated.slice(0, a), c, ...nonMutated.slice(a + b)];

  // write result to UI
  const codeString = `const splicedCopy = [...nonMutated.slice(0, ${a}), "${c}", ...nonMutated.slice(${a + b})];`;

  const currentRendered = renderArray(splicedCopy, codeString);
  const nonMutatedHistory = document.getElementById('non-array-history');
  nonMutatedHistory.insertBefore(currentRendered, nonMutatedHistory.firstChild);

  console.log(codeString);
  console.log(splicedCopy);
}
const nonSpliceButton = document.getElementById('non-splice-button');
nonSpliceButton.addEventListener('click', nonSpliceHandler);
