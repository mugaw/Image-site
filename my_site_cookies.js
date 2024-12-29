// my_site_cookies.js

// Create a cookie called "site_visit"
document.cookie = "site_visit=true; expires=Thu, 18 Dec 2043 12:00:00 UTC; path=/"; 

// Function to check if the cookie exists
function cookieExists(cookieName) {
  return document.cookie.split(';').some((item) => item.trim().startsWith(cookieName));
}

// Check if the cookie exists
if (cookieExists("site_visit")) {
  // If the cookie exists, log the pageview to the console (for demonstration)
  console.log("Pageview recorded."); 
}