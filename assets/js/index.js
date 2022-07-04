// Arcos de la trama

const links = document.querySelectorAll('.aux-link');


// Listeners

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.collapsible');
   M.Collapsible.init(elems);
});

links.forEach(link => {
   link.addEventListener('click', (e) => {
      const element = document.querySelector('#' + e.target.dataset.value);

      element.children[0].click();
   });
})