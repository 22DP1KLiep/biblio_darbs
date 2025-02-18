<template>
    <header>
        <nav>
        
            <div class="logo-container">
                <div class="menu-toggle" @click="toggleMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <a href="/" class="logo">Biblio+</a>
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
                <button class="my-login-button" @click="$router.push('/login')">
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
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
}

header {
    background-color: #213555;
    padding: 10px 20px;
    box-shadow: 0 3px 3px #213555;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    color: rgb(255, 235, 235);
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: "Arial", sans-serif;
}

.nav-links {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
}

.nav-links a {
    color: rgb(255, 235, 235);
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    transition: color 0.3s;
    font-family: "Arial", sans-serif;
}

.nav-links a:hover {
    color: #f8a106;
}

.search-container input {
    padding: 8px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
}

.button-container {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

button {
    background: none;
    border: none;
    color: rgb(255, 235, 235);
    font-size: 24px;
    cursor: pointer;
    margin-left: 10px;
    transition: color 0.3s;
    font-family: "Arial", sans-serif;
}

button:hover {
    color: #f8a106;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.3s;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .nav-links.open {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }

    .search-container {
        width: 100%;
        margin-top: 10px;
    }

    .search-container input {
        width: 90%;
        margin: 0 auto;
    }

    .button-container {
        margin-top: 10px;
    }
}
</style>
