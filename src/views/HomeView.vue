<script setup lang="ts">
import CompactEntry from '../components/CompactEntry.vue'
// import Expenditure from '../classes/Expenditure'
import { useToDoEntryStore } from '@/stores/entry_store'

const store = useToDoEntryStore()

function collapseOthers() {
  // Iterate through all entries and collapse them
  for (const entry of store.entries) {
    console.log(entry.metadata.isExpanded)
    if (entry.metadata.isExpanded) {
      entry.metadata.isExpanded = false
    }
  }
}
</script>

<template>
  <div :style="`position: relative;`">
    <div
      v-for="entry in store.entries.filter((entry) => entry.metadata.isVisible == true).slice(0, 5)"
      :key="entry.title"
    >
      <CompactEntry
        :entry="entry"
        :style="'margin-bottom: 5px'"
        @collapse-others="collapseOthers"
      ></CompactEntry>
    </div>
  </div>
</template>
