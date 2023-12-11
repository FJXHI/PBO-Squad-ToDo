// deleteStore.js
import { defineStore } from 'pinia';
import type { ToDoEntry } from '@/stores/entry_store'
import { ref } from 'vue';

export const useDeleteStore = defineStore('deleteStore', () => {
  const deletedEntries = ref<ToDoEntry[]>([]);

  function addDeletedEntry(entry: ToDoEntry): void {
    deletedEntries.value.push(entry);
  }

  return { deletedEntries, addDeletedEntry };
});
