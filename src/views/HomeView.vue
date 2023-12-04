<script setup lang="ts">
import CompactEntry from '../components/CompactEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

</script>

<template>
  <main>
    <div v-for="entry in store.entries.slice(0, 5)" :key="entry.title">
      <CompactEntry :entry="entry" :style="'margin-bottom: 5px'"></CompactEntry>
    </div>
  </main>
</template>
