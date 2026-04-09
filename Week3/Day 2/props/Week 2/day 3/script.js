let darkmode = localStorage.getItem('darkmode')
const changeTheme = document.getElementById('change-theme')
const themeStatus = document.getElementById('status')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    themeStatus.textContent = "dark mode"
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode')
    themeStatus.textContent = "light mode"
}

if(darkmode === "active") {
    enableDarkmode()
} else{
    disableDarkmode()
}

changeTheme.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

