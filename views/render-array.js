function renderArray(arr, message) {

  const ol = document.createElement('ol');
  ol.setAttribute('start', 0);

  for (let string of arr) {
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerHTML = string;

    li.appendChild(p);
    ol.appendChild(li);
  }

  const container = document.createElement('div');
  container.appendChild(ol);

  const header = document.createElement('h4');
  header.innerHTML = message;

  container.appendChild(header);

  return container;
}
