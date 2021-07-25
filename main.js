const wordEl = document.getElementById('typed-word');
const words = [ 'web designer', 'front-end developer', 'backend-developer', 'writer', 'goodbye this is mosdev' ];
const typingSpeed = 400;
const erasingSpeed = 100;
const pauseBeforeErasing = 2000;

let charIndex = 0;
let wordIndex = 0;

wordEl.classList.add('active');

// auto-typing.
function autoTyping() {

   // typing.
   if( charIndex < words[wordIndex].length ) {

      wordEl.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout( autoTyping, typingSpeed );

   }

   else {
       // erasing.
       setTimeout( erasing, pauseBeforeErasing );
 
   }

}

// erasing function.
function erasing() {

     if( charIndex > 0 ) {

        charIndex--;
        wordEl.textContent = words[wordIndex].substring( 0, charIndex );
        setTimeout( erasing, erasingSpeed / 2 );
        
        if( charIndex === 0 ) {
            wordEl.classList.remove('active');
            setTimeout( () => {
               wordEl.classList.add('active');
            }, 500 );
        }         

     }

     else {
         // render next word.
         wordIndex++;
         if( wordIndex >= words.length ) {
             wordIndex = 0;
         }

         setTimeout( autoTyping, typingSpeed );

     }
}

window.addEventListener( 'DOMContentLoaded', function() {
    setTimeout( autoTyping, 200 );
} );

