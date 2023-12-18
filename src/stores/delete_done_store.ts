// deleteStore.ts
import { defineStore } from 'pinia'
import type { ToDoEntry } from '@/stores/entry_store'
import { ref } from 'vue'

export const useDeleteStore = defineStore('deleteStore', () => {
  const deletedEntries = ref<{ entry: ToDoEntry; isDelete: boolean }[]>([])

  function addDeletedEntry(entry: ToDoEntry, isDelete: boolean): void {
    deletedEntries.value.push({ entry, isDelete })
  }

  return { deletedEntries, addDeletedEntry }
})
