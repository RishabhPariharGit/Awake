// set initial hidden styles (JS ONLY)


function readmorerp(){
    const textdisplay = document.getElementById('description-hidden-rp');
    const closebtn = document.getElementById('close-desc-btn');
    const readmorebtn  =  document.getElementById('readmore-btn');
    readmorebtn.style.display = "none";
    closebtn.style.display = "block";
    closebtn.style.textAlign = "center";
    textdisplay.style.maxHeight = "500px"; // large enough to expand
    textdisplay.style.opacity = "1";
}

function closedesc(){
    const closedescription = document.getElementById('description-hidden-rp');
    const closedesbtn = document.getElementById('close-desc-btn');
    const readmoredescbtn  =  document.getElementById('readmore-btn');

    readmoredescbtn.style.display = "block";
    closedesbtn.style.display = "none";
    closedescription.style.maxHeight = "0";
    closedescription.style.opacity = "0";
    closedescription.style.overflow = "hidden";
}