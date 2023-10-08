import setupIcons from './components/fontawesome.js'

import '/css/app.css'

setupIcons()

document.querySelectorAll('.current-year').forEach(element => {
  element.innerText = new Date().getFullYear()
})
