import GLightbox from 'glightbox'
import setupIcons from './components/fontawesome.js'

import 'glightbox/dist/css/glightbox.css'
import '/css/app.css'

document.addEventListener('DOMContentLoaded', function() {
  setupIcons()

  document.querySelectorAll('.current-year').forEach(element => {
    element.innerText = new Date().getFullYear()
  })

  GLightbox({
    loop: true,
  })
})
