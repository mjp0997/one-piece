const links = document.querySelectorAll('.aux-link');
const spyLinks = document.querySelectorAll('.spy-link');


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

spyLinks.forEach(link => {
   link.addEventListener('click', () => {
      spyLinks.forEach(link => link.classList.remove('selected', 'amber-text', 'text-darken-2'));
      spyLinks.forEach(link => link.classList.add('grey-text', 'text-darken-4'));

      link.classList.remove('grey-text', 'text-darken-4');
      link.classList.add('selected', 'amber-text', 'text-darken-2');
   })
})