<script setup lang="ts">
import SquareEntry from '../components/SquareEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

for (let i = 1; i < 21+1; i++) {
  store.addEntry({
    title: 'Test Entry ' + i,
    description: 'Test ' + i + ' Description',
    color: { r: 255, g: 59, b: 48 },
    deadline: new Date('2024-01-07'),
    expenditure: { time: 5, unit: 'h' }
  })
}

</script>

<template>
  <main class="more">
    <div v-for="entry in store.entries.slice(0, 21)" :key="entry.title">
      <SquareEntry :entry="entry" :style="'margin-bottom: 5px'"></SquareEntry>
    </div>
  </main>
</template>

<style>
.more {
  display: flex;
  flex-wrap: wrap;
  /* 3 Elements per row? */
}

</style>