<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
import { loadEntries } from './services/entryStorageService'

loadEntries()
</script>

<template>
  <div class="main">
    <header>
      <SearchBar />
    </header>
    <main class="w-full">
      <RouterView />
    </main>
    <footer>
      <nav>
        <NavigationBar />
      </nav>
    </footer>
  </div>
</template>

<style scoped>
main {
  left: 0px;
  right: 0px;
  margin-top: 5.7vb; /* Space for searchbar */
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.main {
  position: relative;
}

footer {
  position: fixed;
  /* Keeps it in place */
  bottom: 0;
  /* Stick it to the bottom */
  width: 100%;
  /* Full width */
}
</style>
