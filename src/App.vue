<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import SearchBar from './components/SearchBar.vue'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

store.addEntry({
  title: 'Meeting with Client',
  description: 'Discuss project requirements and timeline',
  color: '#ff3b30',
  deadline: new Date('2024-01-07'),
  expenditure: { time: 5, unit: 'h' },
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})
store.addEntry({
  title: 'Prepare Presentation',
  description: 'Create slides for upcoming presentation',
  color: '#32ade6',
  expenditure: { time: 30, unit: 'min' },
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})
store.addEntry({
  title: 'Research New Feature',
  description: 'Explore options for implementing a new feature',
  color: '#a2845e',
  deadline: new Date('2027-09-29'),
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})

store.addEntry({
  title: 'Bug Fixing',
  description: 'Investigate and resolve reported bugs',
  color: '#34c759',
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})

store.addEntry({
  title: 'Code Refactoring',
  description: 'Improve code quality and maintainability',
  color: '#ffcc00',
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})

store.addEntry({
  title: 'Testing Phase',
  description: 'Perform comprehensive testing of the application',
  color: '#ff3b30',
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})

store.addEntry({
  title: 'UI Design Review',
  description: 'Evaluate and enhance user interface design',
  color: '#32ade6',
  metadata: {
    isVisible: true,
    isExpanded: false
  }
})

store.addEntry({
  title: 'Documentation Fix',
  description: 'Update project documentation with recent changes',
  color: '#a2855e',
  metadata: {
    isVisible: true,
    isExpanded: false
  }
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
