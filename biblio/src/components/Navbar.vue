<template>
    <header>
        <nav>
            <div class="logo-container">
                <div class="menu-toggle" @click="toggleMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <a href="/" class="logo">Biblio+</a> <!-- Make the logo a link -->
            </div>
            <ul class="nav-links" :class="{ open: menuOpen }">
                <li><a href="#">Žanri</a></li>
                <li><a href="#">Grāmatas</a></li>
                <li><a href="#">Pārlūkot</a></li>
                <li><a href="#">Saglabāts</a></li>
            </ul>
            <div class="search-container">
                <input type="text" placeholder="Meklēt..." />
            </div>
            <div class="button-container">
                <button class="dark-mode-toggle">
                    <span class="material-icons">dark_mode</span>
                </button>
                <button class="my-person-button">
                    <span class="material-icons">person</span>
                </button>
                <button class="my-login-button">
                    <span class="material-icons">login</span>
                </button>
            </div>
        </nav>
    </header>
</template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  };

  
  </script>
  
  <style scoped>

    html, body
    { margin: 0; padding: 0; width: 100%; height: 100%; }

  /* Main navigation bar styles */
  /* Main navigation bar styles */
header {
    background-color: #213555; /* Dark blue background */
    padding: 10px 20px;
    box-shadow: 0 3px 3px #213555;
}

nav {
    display: flex;
    align-items: center; /* Align items vertically in the center */
    justify-content: space-between; /* Distribute space between items */
    margin: 0;
}

.logo-container {
    display: flex;
    justify-content: flex-start; /* Align logo and nav links to the left */
    align-items: center; /* Center items vertically */
    width: 100%;
    margin-left: 40px;
}

nav .logo {
    color: rgb(255, 235, 235); /* Logo text color */
    font-size: 24px;
    font-weight: bold;
    margin-right: 30px; /* Space between logo and nav links */
}

.nav-links {
    display: flex; /* Arrange nav items in a row */
    justify-content: center; /* Center the nav items */
    gap: 20px; /* Space between items */
    list-style: none; /* Remove default list styling */
    margin: 0; /* Remove default margin */
    flex-grow: 1; /* Allow nav links to grow and take available space */
}

.nav-links li {
    margin-right: 20px;
}

.nav-links a {
    color: rgb(255, 235, 235); /* Link text color */
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 15px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #f8a106; /* Highlight color on hover */
}

/* Search container styles */
.search-container {
    margin-left: auto; /* Push the search bar to the right */
    display: flex; /* Use flexbox for layout */
}

.search-container input {
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    width: 400px; /* Default width */
    box-sizing: border-box;
}

/* BUTTONS */
.button-container {
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    margin-left: 20px; /* Space between search bar and buttons */
}

button {
    background: none; /* No background */
    border: none; /* No border */
    color: rgb(255, 235, 235); /* Button text color */
    font-size: 24px; /* Icon size */
    cursor: pointer; /* Pointer cursor on hover */
    margin-left: 10px; /* Space between buttons */
    transition: color 0.3s; /* Transition for hover effect */
}

button:hover {
    color: #f8a106; /* Highlight color on hover */
}

/* Media query for responsive navbar */
@media (max-width: 768px) {
    nav {
        flex-direction: column; /* Stack items vertically */
        align-items: flex-start; /* Align items to the left */
    }

    .logo-container {
        margin-left: 0; /* Remove left margin on smaller screens */
    }

    .nav-links {
        flex-direction: column; /* Stack nav items vertically */
        width: 100%; /* Full width for nav links */
        align-items: center; /* Center items */
        margin-top: 10px; /* Space above nav links */
    }

    .nav-links li {
        margin: 5px 0; /* Space between items */
    }

    .search-container {
        width: 100%; /* Full width for search bar */
        margin-top: 10px; /* Space above search bar */
    }

    .search-container input {
        width: 90%; /* Adjust width for smaller screens */
        margin: 0 auto; /* Center the search input */
    }

    .button-container {
        margin-top: 10px; /* Space above buttons */
    }
}


/* Hamburger menu styles */
.menu-toggle {
    display: none; /* Hidden by default */
    flex-direction: column; /* Stack bars vertically */
    cursor: pointer; /* Pointer cursor on hover */
}

.menu-toggle .bar {
    width: 25px; /* Width of the bars */
    height: 3px; /* Height of the bars */
    background-color: #fff; /* Color of the bars */
    margin: 4px 0; /* Space between bars */
    transition: 0.3s; /* Transition for smooth effect */
}

/* Media query for responsive navbar */
@media (max-width: 768px) {
    .nav-links {
        display: none; /* Hide nav links by default */
        flex-direction: column; /* Stack nav items vertically */
        width: 100%; /* Full width for nav links */
        align-items: center; /* Center items */
        margin-top: 10px; /* Space above nav links */
    }

    .nav-links.open {
        display: flex; /* Show nav links when open */
    }

    .menu-toggle {
        display: flex; /* Show hamburger menu on small screens */
    }
}

.logo {
    color: rgb(255, 235, 235); /* Logo text color */
    font-size: 24px;
    font-weight: bold;
    text-decoration: none; /* Remove underline */
    margin-right: 30px; /* Space between logo and nav links */
}


  </style>
  