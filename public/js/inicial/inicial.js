import { textoCateg } from '../../json/textoCateg.js';

const pararafoCateg = document.querySelector('.categorias .texto p');
const txtCateg = document.querySelector('.categorias .texto h2');
const categ = document.querySelectorAll('.listaCategorias #categ');
  
categ.forEach(box => {    
  box.addEventListener('click', () => {      
    const texto = box.textContent.trim();    
    pararafoCateg.textContent = textoCateg.find(item => item.titulo === texto).txt;
    txtCateg.textContent = texto;
  });
});


