const accordings = document.querySelectorAll('.according');

accordings.forEach(according =>{
    const icon=according.querySelector('.icon');
    const answer = according.querySelector('.answer');

    according.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})