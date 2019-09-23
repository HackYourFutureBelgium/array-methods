function renderArray(arr, message) {

  const container = document.createElement('div');

  const header = document.createElement('h4');
  header.innerHTML = message;
  container.appendChild(header);

  const ol = document.createElement('ol');
  ol.setAttribute('start', 0);

  for (let string of arr) {
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerHTML = string;

    li.appendChild(p);
    ol.appendChild(li);
  }

  container.appendChild(ol);


  return container;
}
