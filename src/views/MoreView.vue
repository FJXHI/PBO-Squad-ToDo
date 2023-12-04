<script setup lang="ts">
import SquareEntry from '../components/SquareEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()
</script>

<template>
  <main class="more">
    <div v-for="entry in store.entries.slice(0, 21)" :key="entry.todoEntry.title">
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
