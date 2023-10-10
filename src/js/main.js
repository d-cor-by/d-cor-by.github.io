import GLightbox from 'glightbox'
import setupIcons from './components/fontawesome.js'

import 'glightbox/dist/css/glightbox.css'
import '/css/app.css'

const photos = import.meta.glob(['/images/photos/full/*'])

document.addEventListener('DOMContentLoaded', function() {
  setupIcons()

  document.querySelectorAll('.current-year').forEach(element => {
    element.innerText = new Date().getFullYear()
  })

  Promise.all(
    Object.keys(photos).map(path => photos[path]().then((module) => ({ path, url: module.default })))
  )
    .then((photos) => {
      photos.forEach(({ path, url }) => {
        document.querySelector(`a[data-origin="${path}"]`)?.setAttribute('href', url)
      })

      GLightbox({
        loop: true,
        preload: false,
      })
    })
})
