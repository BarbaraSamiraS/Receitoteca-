const txtCateg = document.querySelector('.categorias .texto h2');
var categ = document.querySelectorAll('.listaCategorias #categ');
  
categ.forEach(box => {    
  box.addEventListener('click', () => {      
     const texto = box.textContent;      
     txtCateg.textContent = texto;
  }
}