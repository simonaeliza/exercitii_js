const produs = {
  poza:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59JoSibEmBxX3XENEby24EGh6nIBVVGjeWw&s',
  nume:'Shoes',
  descriere: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  pret: 100.00,
  rating: '',
  button: 'Buy now',
};


console.log(produs);

const container = document.getElementById('container');

function adaugaProdusInContainer(produs) {
container.innerHTML += ` <div class="product-card">
   <img src=${produs.poza} />
         <h3>
            ${produs.nume}
         </h3>
         <p>
         ${produs.descriere}
         </p>
         <span>
            ${'$' + produs.pret.toFixed(2)}
         </span>
         <div class="rating-box">
         <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
         </div>
         </div>
         <button class="btn">
         ${produs.button}
         </button>
</div> `;
}

// adaugaProdusInContainer(produs);

const produse = [
  
  {
    poza:'data:image/jpeg;base64,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',
    nume:'Earphone',
    descriere: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    pret: 40.00,
    rating: '',
    button: 'Buy now',
  },

  {
    poza:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmeAe14NKMiBSlweuJaJyZsikeEQfdNXLTrw&s',
    nume:'Watch',
    descriere: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    pret: 70.84,
    rating: '',
    button: 'Buy now',
  },

  {
    poza:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsP7WiI25e-ULOkGXVrjQEz7MSx7rcwzwWPw&s',
    nume:'Mobile',
    descriere: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    pret: 1000.84,
    rating: '',
    button:'Buy now',
  },

];

function afiseazaToateProdusele(produse) {
	for (let i = 0; i <= produse.length - 1; i++) {
		adaugaProdusInContainer(produse[i]);
	}
}

afiseazaToateProdusele(produse);


const stars = document.querySelectorAll(".stars i");
console.log(stars);



stars.forEach((star, index1)=> {
  star.addEventListener("click", () => {
  stars.forEach((star, index2) => {
index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
});
  });
});




const colors = [ '#1996c7', 'rgb(61, 42, 129)', 'black', 'orange'];
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
  button.style.backgroundColor = colors[index];
});



 



