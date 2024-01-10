<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'
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
  /*position: absolute;*/
  left: 0px;
  right: 0px;
  margin-top: 3.2rem; /* Space for searchbar */
  /* padding-bottom: 8vh; Space for navbar */
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
