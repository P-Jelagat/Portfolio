
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('show');
})

document.addEventListener('click', (e) =>{
    const clickedInsideMenu = menu.contains(e.target);
    const clickedMenuBtn = menuBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedMenuBtn){
        menu.classList.remove('show');
    }
})


// CONTACT FORM RESPONSIVENESS
const textArea = document.querySelector('textarea');
const count = document.querySelector('span');

textArea.addEventListener('input', ()=>{
    count.textContent = textArea.value.length;
    if (textArea.value.length >= 450 ){
        count.style.color = 'red'; 
    }else {
        count.style.color = 'black';
    }
})

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const details = document.querySelector('#details').value;
    const message = 
        `New inquiry
        name: ${name}
        email: ${email}
        details: ${details}`

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '254116108172';

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
    

});