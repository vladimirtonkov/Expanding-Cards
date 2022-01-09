
let Items = document.querySelectorAll('.block__item');

Items.forEach(elem => elem.addEventListener('click', () => {

  Items.forEach(e => e.classList.remove('active'))
  
  if(!elem.classList.contains('active')) {
    elem.classList.add('active')
  }

}))

