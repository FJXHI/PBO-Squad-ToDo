<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
import HomeView from './views/HomeView.vue'

</script>

<template>
  <header>

    <!--<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

    <div>
      <!-- <HelloWorld msg="You did it!" /> -->
      <!-- <div class="wrapper"> -->
      <!--<HelloWorld msg="You did it!" />-->
      <!--search bar here-->
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink>Logo Haus? -->
        <!-- <RouterLink to="/edit">Edit</RouterLink>+ -->
        <!-- <RouterLink to="/more">More</RouterLink>Logo 3 Streifen? -->
      <!-- </nav> -->
    </div>
  </header>
  <main class="full-width">
    <p>Hello</p>
    <RouterView />

    <!-- <RouterView /> -->
    <!--edit options ...-->
  </main>
  <footer>
    <nav>
      <NavigationBar />
    </nav>
  </footer>
</template>

<style scoped>
.full-width {
    position: absolute;
    left: 0px;
    right: 0px
}

body {
  margin: 0;
  background: #eee;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

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
  position: fixed; /* Keeps it in place */
  bottom: 0; /* Stick it to the bottom */
  width: 100%; /* Full width */
}
</style>