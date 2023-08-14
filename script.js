//about me
const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

//nav bar
const sidemenu = document.getElementById('side-menu');
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-12.5rem";
}