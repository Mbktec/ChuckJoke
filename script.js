
const joke = document.querySelector('.joke');

const clique = document.querySelector('button');

clique.addEventListener('click', () => {
    fetch(' https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => { 
       
        joke.textContent = data.value;
      })
    .catch(error => alert('Erreur:' + error));
})
