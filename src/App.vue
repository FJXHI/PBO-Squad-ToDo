<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

store.addEntry({
  title: 'Test Entry 1',
  description: 'Test 1 Description',
  color: { r: 255, g: 59, b: 48 },
  deadline: new Date('2024-01-07'),
  expenditure: { time: 5, unit: 'h' }
})
store.addEntry({
  title: 'Test Entry 2',
  description: 'Test 2 Description',
  color: { r: 50, g: 173, b: 230 },
  expenditure: { time: 30, unit: 'min' }
})
store.addEntry({
  title: 'Test Entry 3',
  description: 'Test 3 Description',
  color: { r: 162, g: 132, b: 94 },
  deadline: new Date('2027-09-29')
})
store.addEntry({
  title: 'Test Entry 4',
  description: 'Test 4 Description',
  color: { r: 52, g: 199, b: 89 }
})
store.addEntry({
  title: 'Test Entry 5',
  description: 'Test 5 Description',
  color: { r: 255, g: 204, b: 0 }
})
store.addEntry({
  title: 'Test Entry 6',
  description: 'Test 6 Description',
  color: { r: 255, g: 59, b: 48 }
})
store.addEntry({
  title: 'Test Entry 7',
  description: 'Test 7 Description',
  color: { r: 50, g: 173, b: 230 }
})
store.addEntry({
  title: 'Test Entry 8',
  description: 'Test 8 Description',
  color: { r: 162, g: 132, b: 94 }
})
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
