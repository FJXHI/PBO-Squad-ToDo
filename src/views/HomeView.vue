<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import CompactEntry from '../components/CompactEntry.vue'
import TodoEntry from '../classes/TodoEntry'
import Expenditure from '../classes/Expenditure'
import {TimeUnit} from "../classes/TimeUnit"
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore();

store.addEntry(new TodoEntry("Test Entry 1", "Test 1 Description", [255, 59, 48, 255], undefined, new Date("2024-01-07"), new Expenditure(5, TimeUnit.Hour)));
store.addEntry(new TodoEntry("Test Entry 2", "Test 2 Description", [50, 173, 230, 255], undefined, undefined, new Expenditure(30, TimeUnit.Minute)));
store.addEntry(new TodoEntry("Test Entry 3", "Test 3 Description", [162, 132, 94, 255], undefined, new Date("2027-09-29"), undefined));
store.addEntry(new TodoEntry("Test Entry 4", "Test 4 Description", [52, 199, 89, 255], undefined, undefined, undefined));
store.addEntry(new TodoEntry("Test Entry 5", "Test 5 Description", [255, 204, 0, 255], undefined, undefined, undefined));
</script>

<template>
  <main>
    <div v-for="entry in store.entries">
      <CompactEntry :entry="entry"></CompactEntry>
    </div>
  </main>
</template>