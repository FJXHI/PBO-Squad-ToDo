<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

store.addEntry({
  todoEntry: {
    title: 'Meeting with Client',
    description: 'Discuss project requirements and timeline',
    color: { r: 255, g: 59, b: 48 },
    deadline: new Date('2024-01-07'),
    expenditure: { time: 5, unit: 'h' }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Prepare Presentation',
    description: 'Create slides for upcoming presentation',
    color: { r: 50, g: 173, b: 230 },
    expenditure: { time: 30, unit: 'min' }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Research New Feature',
    description: 'Explore options for implementing a new feature',
    color: { r: 162, g: 132, b: 94 },
    deadline: new Date('2027-09-29')
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Bug Fixing',
    description: 'Investigate and resolve reported bugs',
    color: { r: 52, g: 199, b: 89 }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Code Refactoring',
    description: 'Improve code quality and maintainability',
    color: { r: 255, g: 204, b: 0 }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Testing Phase',
    description: 'Perform comprehensive testing of the application',
    color: { r: 255, g: 59, b: 48 }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'UI Design Review',
    description: 'Evaluate and enhance user interface design',
    color: { r: 50, g: 173, b: 230 }
  },
  isVisible: true,
  isExpanded: false
})
store.addEntry({
  todoEntry: {
    title: 'Documentation Fix',
    description: 'Update project documentation with recent changes',
    color: { r: 162, g: 132, b: 94 }
  },
  isVisible: true,
  isExpanded: false
})
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
