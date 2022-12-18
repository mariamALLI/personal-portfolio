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

// Contact form script

const scriptURL = 'https://script.google.com/macros/s/AKfycbzAjl-mghjNkfF3nzAbJXETpBEQtDANkJBoHb9gz-aH8BBgUjq15kxox1VAtk2FsHIg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})