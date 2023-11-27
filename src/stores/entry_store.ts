import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import TodoEntry from '@/classes/TodoEntry'

export const useToDoEntryStore = defineStore('todoEntries', () => {
    const entries = ref<TodoEntry[]>([]);

    function addEntry(entry : TodoEntry) : void {
        entries.value.push(entry);
    }
  
    return { entries, addEntry }
})