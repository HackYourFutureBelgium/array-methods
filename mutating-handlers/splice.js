function spliceHandler() {
  // read input from UI
  const spliceInputA = document.getElementById('splice-input-a');
  const stringA = spliceInputA.value;
  const a = Number(stringA);

  const spliceInputB = document.getElementById('splice-input-b');
  const stringB = spliceInputB.value;
  const b = Number(stringB);

  const spliceInputC = document.getElementById('splice-input-c');
  const c = spliceInputC.value;

  // perform core logic
  mutated.splice(a, b, c);

  // write result to UI
  const codeString = `mutated.splice(${a}, ${b}, ${c});`;
  const currentRendered = renderArray(mutated, codeString);
  const mutatedHistory = document.getElementById('mutating-array-history');
  mutatedHistory.insertBefore(currentRendered, mutatedHistory.firstChild);

  console.log(codeString);
  console.log(mutated);
}
const spliceButton = document.getElementById('mutating-splice-button');
spliceButton.addEventListener('click', spliceHandler);
