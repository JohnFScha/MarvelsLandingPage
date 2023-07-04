// Function to make an AJAX request and load HTML content
function loadPage(url, containerId) {
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById(containerId).innerHTML = this.responseText
    }
  }
  xhttp.open("GET", url, true)
  xhttp.send()
}

// Function to handle navigation and load the corresponding page
function navigateTo(page) {
  const containerId = "content-container"
  
  // Load the corresponding HTML page based on the navigation
  switch(page) {
    case "characters":
      loadPage("characters.html", containerId)
      break
    case "comics":
      loadPage("comics.html", containerId)
      break
    case "games":
      loadPage("games.html", containerId)
      break
    case "news":
      loadPage("news.html", containerId)
      break
    default:
      loadPage("index.html", containerId)
  }
}

// Function to handle navigation click events
function handleNavigationClick(event) {
  event.preventDefault()
  const page = event.target.getAttribute("data-page")
  navigateTo(page)
}

// Add click event listeners to navigation links
const navigationLinks = document.getElementsByClassName("navigation-link")
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", handleNavigationClick)
}

// Initial page load (Home page)
navigateTo("index.html")