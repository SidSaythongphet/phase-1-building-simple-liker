// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll(".like-glyph");


for (const heart of hearts) {
  heart.addEventListener('click', heartMe)
}

function heartMe (hearts) {  
  const heartIcon = hearts.target  
  mimicServerCall()
    .then( () => {
      if (heartIcon.innerText === EMPTY_HEART) {
        heartIcon.innerText = FULL_HEART
        heartIcon.classList.add('activated-heart')
      } else {
        heartIcon.classList.remove('activated-heart')
        heartIcon.innerText = EMPTY_HEART
      }
    })
    .catch( () => {
      const err = document.querySelector("#modal")
      err.classList.remove('hidden')
      setTimeout( () => {
        err.classList.add('hidden')}, 3000)
    })
  function heartRed() {
    if(hearts.classList === 'activated-heart') {
      heartIcon.style.color = "red"
    }
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
