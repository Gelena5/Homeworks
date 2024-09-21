const textColorPicker = document.getElementById('textColorPicker');
const borderColorPicker = document.getElementById('borderColorPicker');

textColorPicker.addEventListener('change', (e) => {
  document.querySelectorAll('.note').forEach(note => {
    note.style.color = e.target.value;
  });
});

borderColorPicker.addEventListener('change', (e) => {
  document.querySelectorAll('.note').forEach(note => {
    note.style.borderColor = e.target.value;
  });
});

// ცვლადების დეკლარაცია
const addBtn = document.getElementById('add');
const notes = JSON.parse(localStorage.getItem('notes')) || [];

// ფუნქციები
const addNewNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });

  document.body.appendChild(note);
};

const updateLS = () => {
  const notesText = document.querySelectorAll('textarea');
  const notes = Array.from(notesText).map(note => note.value);
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Event listeners
addBtn.addEventListener('click', () => addNewNote());

notes.forEach(note => addNewNote(note));

const dataFunction = () => {
    const array = [1, 2, 3, 4, 5];
    const object = {
      name: "გიორგი",
      age: 25,
      city: "თბილისი"
    };
    
    return { array, object };
  };
  
  // ფუნქციის გამოძახება
  const { array, object } = dataFunction();
  console.log(array);  // [1, 2, 3, 4, 5]
  console.log(object);  // { name: "გიორგი", age: 25, city: "თბილისი" }