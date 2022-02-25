const btn = document.querySelector('#btn');
const navbar =  document.querySelector('.navbar');
const toggleFunction = () => {
if(navbar.classList.contains('active')){
    navbar.classList.remove('active')
}
else{
    navbar.classList.add('active')
}
}
btn.addEventListener('click', toggleFunction);

console.log(toggleFunction);

btn.addEventListener('click',() =>{ 
    document.body.classList.toggle('body-shadow')
})