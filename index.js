const container = document.querySelector('.container');
const notes = document.querySelectorAll('.note');
const submitBtn = document.getElementById('submit');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

let noteSelected = '';
for(let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', () => {
        noteSelected = notes[i].innerText;
    });
}

submitBtn.addEventListener('click', () => {
    if(noteSelected === '') {
        alert('Please give us a valid note! \nThank you! 😁❤');
    } else {
        container.classList.add('active');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('disabled', 'disabled');
        buttons[i].style.cursor = 'auto';
    }

    result.innerText = 'You selected ' + noteSelected + ' out of 5';
    
    setTimeout(function () { 
        location.reload();
      }, 3 * 1000);
    }  
});