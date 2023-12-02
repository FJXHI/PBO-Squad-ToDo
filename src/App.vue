<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <header>
    <SearchBar />
    <!-- <nav> -->
    <!-- <RouterLink to="/settings">Settings</RouterLink>-->
    <!-- </nav> -->
  </header>
  <main class="full-width">
    <RouterView />
  </main>
  <footer>
    <nav>
      <NavigationBar />
    </nav>
  </footer>
</template>

<style scoped>
main {
  position: absolute;
  left: 0px;
  right: 0px;
  margin-top: 4vh; /* Space for searchbar */
  padding-bottom: 8vh; /* Space for navbar */
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

/*
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  header nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .menu {
    display: center;
  }

  .menu nav {
    background-color: black;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }
} */

footer {
  position: fixed;
  /* Keeps it in place */
  bottom: 0;
  /* Stick it to the bottom */
  width: 100%;
  /* Full width */
}
</style>
