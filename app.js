// FelineSTUDIO Real API - เก็บใน LocalStorage
const API_KEY = 'feline_api_cats';

async function getCats() {
  let cats = JSON.parse(localStorage.getItem(API_KEY));
  if (!cats) {
    const res = await fetch('api/cats.json');
    cats = await res.json();
    localStorage.setItem(API_KEY, JSON.stringify(cats));
  }
  return cats;
}

async function loadCats() {
  const cats = await getCats();
  document.getElementById('result').innerHTML = cats.map(c => `
    <div class="card">
      <b>🐱 ${c.name}</b> - ${c.breed}
      <br>
      <button onclick="editCat(${c.id})">✏️ แก้ไข</button>
      <button onclick="deleteCat(${c.id})">🗑️ ลบ</button>
    </div>
  `).join('');
}

async function addCat() {
  const name = document.getElementById('name').value;
  const breed = document.getElementById('breed').value;
  if (!name || !breed) return alert('ใส่ชื่อกับพันธุ์ก่อนนะ');
  const cats = await getCats();
  cats.push({ id: Date.now(), name, breed });
  localStorage.setItem(API_KEY, JSON.stringify(cats));
  document.getElementById('name').value = '';
  document.getElementById('breed').value = '';
  loadCats();
}

async function deleteCat(id) {
  let cats = await getCats();
  cats = cats.filter(c => c.id !== id);
  localStorage.setItem(API_KEY, JSON.stringify(cats));
  loadCats();
}

async function editCat(id) {
  const newName = prompt('ชื่อใหม่:');
  if (!newName) return;
  let cats = await getCats();
  cats = cats.map(c => c.id === id ? { ...c, name: newName } : c);
  localStorage.setItem(API_KEY, JSON.stringify(cats));
  loadCats();
}

loadCats();
