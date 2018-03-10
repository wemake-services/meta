(function (document) {
  'use strict'

  // This function extracts ids from headings
  // and uses them to create anchor icons.
  function addLinksToHeadings () {
    var headings = document.querySelectorAll('h1,h2,h3')
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i]
      var link = '#' + h.id
      h.innerHTML = '<a href="' + link + '">' + h.innerHTML + '</a>'
    }
  }

  function enableTOC () {
    var tocLink = document.querySelector('#toc_link')
    var tocContainer = document.querySelector('.toc__component')

    tocLink.onclick = function () {
      tocContainer.classList.toggle('visible')
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    addLinksToHeadings()
    enableTOC()
  })

})(document)
