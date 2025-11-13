const heading = document.getElementById('MainHeading');
const pageui = document.getElementById('main-ui-wrapper');

heading.addEventListener('mouseover',()=>{
    heading.style.color = 'white';
    pageui.style.backgroundColor = 'black'
});

heading.addEventListener('mouseout', ()=>{
    heading.style.color = 'black';
    pageui.style.backgroundColor = '#2fc042'
})
