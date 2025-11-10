const heading = document.getElementById('MainHeading');

heading.addEventListener('mouseover',()=>{
    heading.style.color = 'white';
});

heading.addEventListener('mouseout', ()=>{
    heading.style.color = 'black';
})