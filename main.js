const inputH2 = document.querySelector('input'),
       h2 = document.querySelector('h2');

       h2.textContent = localStorage.getItem('calmDown');


inputH2.addEventListener('keyup', commit);


function commit(){
    localStorage.setItem('calmDown', inputH2.value);
    h2.textContent = localStorage.getItem('calmDown');
}
