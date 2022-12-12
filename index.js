let aboutLinks = document.getElementsByClassName("about_links");
let aboutContents = document.getElementsByClassName("about_content")

function openTab(tabname){
    for(aboutLink of aboutLinks){
        aboutLink.classList.remove("active_link")
    }

    for(aboutContent of aboutContents){
        aboutContent.classList.remove("active_tab")
    }

    event.currentTarget.classList.add("active_link")
    document.getElementById(tabname).classList.add("active_tab")
}

let sideMenu = document.querySelector('#sidemenu')
function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}