<script setup lang="ts">
import CompactEntry from '../components/CompactEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

function collapseOthers() {
  console.log("Collapse Others")
}

</script>

<template>
  <main>
    <div
      v-for="entry in store.entries.filter((entry) => entry.isVisible == true).slice(0, 5)"
      :key="entry.todoEntry.title"
    >
      <CompactEntry :entry="entry" :style="'margin-bottom: 5px'" @collapse-others="collapseOthers"></CompactEntry>
    </div>
  </main>
</template>
