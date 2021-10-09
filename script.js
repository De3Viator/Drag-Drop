const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop)
}
function dragStart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0) //подъем
}

function dragEnd(e) {
    e.target.classList.remove('hold', 'hide')//опускание
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add('hovered')//Входит в зону колонки
}

function dragLeave(e) {
    e.target.classList.remove('hovered')//Выходит из зоны колонки
}

function dragDrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item);
}