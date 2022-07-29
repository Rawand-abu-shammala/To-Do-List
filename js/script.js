let button = document.querySelector('button');
let input = document.querySelector('input');
let form = document.querySelector('form');
let section = document.querySelector('section');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let task = `
    <div class="task">
    <i class="fa-solid fa-star icon"></i>
    <p>${input.value} </p>
    <div>
        <i class="fa-solid fa-heart icon"></i>
        <i class="fa-solid fa-trash-can icon"></i>
    </div>
</div>
    `
    section.innerHTML += task ;
    input.value ='';
});

section.addEventListener('click',function(e){
    if(e.target.className == 'fa-solid fa-trash-can icon') {
        e.target.parentElement.parentElement.remove();

    }
    else if (e.target.className =='fa-solid fa-heart icon'){

        e.target.classList.add('green');

        e.target.parentElement.parentElement.querySelector('p').classList.add('done');
    }
    else if (e.target.className == 'fa-solid fa-heart icon green') {
        e.target.classList.remove('green');
        e.target.parentElement.parentElement.querySelector('p').classList.remove('done');
    }
    else if (e.target.className == 'fa-solid fa-star icon') {
        e.target.classList.add('yellow');
        section.prepend(e.target.parentElement);
    }

    else if (e.target.className == 'fa-solid fa-star icon yellow') {
            e.target.classList.remove('yellow');
        }


});


let message = document.getElementById('message');
let counter = document.getElementById('counter');

message.onkeyup = function() {

    counter.textContent = 50 - this.value.length;

    if(counter.textContent < 0) {
        counter.style.color = 'red';
    }else {
        counter.style.color = 'black';
    }
}
