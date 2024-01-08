<script setup lang="ts">
import SquareEntry from '../components/SquareEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()
</script>

<template>
  <main class="more">
    <div
      v-for="entry in store.entries
        .filter((entry) => entry.metadata.isVisible == true)
        .slice(0, 30)"
      :key="entry.title"
    >
      <SquareEntry :entry="entry" :style="'margin-bottom: 5px'"></SquareEntry>
    </div>
  </main>
</template>

<style>
.more {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>
