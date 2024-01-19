import { defineStore } from 'pinia'
import type { ToDoEntry } from '@/stores/entry_store'
import { ref } from 'vue'

export const useDeleteStore = defineStore('deleteStore', () => {
  const deletedEntries = ref<{ entry: ToDoEntry; isDelete: boolean }[]>([])

  function addDeletedEntry(entry: ToDoEntry, isDelete: boolean): void {
    deletedEntries.value.push({ entry, isDelete })
  }
  function removeDeltedEntry(entry: ToDoEntry, isDelete: boolean): void {
    const index = deletedEntries.value.indexOf({ entry, isDelete })
    if (index > -1) {
      deletedEntries.value.splice(index, 1)
    }
  }

  function getLastDeletedEntry(): { entry: ToDoEntry; isDelete: boolean } | null {
    if (deletedEntries.value.length > 0) {
      return deletedEntries.value[deletedEntries.value.length - 1]
    }
    return null
  }

  function removeLastDeletedEntry(): void {
    if (deletedEntries.value.length > 0) {
      deletedEntries.value.pop()
    }
  }

  return {
    deletedEntries,
    addDeletedEntry,
    removeDeltedEntry,
    getLastDeletedEntry,
    removeLastDeletedEntry
  }
})
