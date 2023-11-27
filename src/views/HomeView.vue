<script setup lang="ts">
import CompactEntry from '../components/CompactEntry.vue'
import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore();

store.addEntry({
  title: "Test Entry 1",
  description: "Test 1 Description",
  color: {r: 255, g: 59, b: 48},
  deadline: new Date("2024-01-07"),
  expenditure: {time: 5, unit: "h"}
});
store.addEntry({
  title: "Test Entry 2",
  description: "Test 2 Description",
  color: {r: 50, g: 173, b: 230},
  expenditure: {time: 30, unit: "min"}
});
store.addEntry({
  title: "Test Entry 3",
  description: "Test 3 Description",
  color: {r: 162, g: 132, b: 94},
  deadline: new Date("2027-09-29"),
});
store.addEntry({
  title: "Test Entry 4",
  description: "Test 4 Description",
  color: {r: 52, g: 199, b: 89}
});
store.addEntry({
  title: "Test Entry 5",
  description: "Test 5 Description",
  color: {r: 255, g: 204, b: 0}
});
store.addEntry({
  title: "Test Entry 6",
  description: "Test 6 Description",
  color: {r: 255, g: 59, b: 48}
});
store.addEntry({
  title: "Test Entry 7",
  description: "Test 7 Description",
  color: {r: 50, g: 173, b: 230}
});
store.addEntry({
  title: "Test Entry 8",
  description: "Test 8 Description",
  color: {r: 162, g: 132, b: 94}
});
</script>

<template>
  <main>

    <div v-for="entry in store.entries.slice(0, 5)">
      <CompactEntry :entry="entry" :style="'margin-bottom: 5px'"></CompactEntry>

    </div>
  </main>
</template>