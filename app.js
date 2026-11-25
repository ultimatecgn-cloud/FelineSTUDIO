async function loadCats() {
  const res = await fetch('api/cats.json');
  const cats = await res.json();
  document.getElementById('result').innerHTML = cats.map(c => `<p>🐱 ${c.name} - ${c.breed}</p>`).join('');
}
