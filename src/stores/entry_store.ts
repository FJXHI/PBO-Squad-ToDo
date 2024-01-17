import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Tag {
  tag: string
  tagColor: string
}

export interface ToDoEntry {
  metadata: ToDoEntryMeta

  title: string
  description?: string

  // color is stored as string containing the hex code
  color: string

  deadline?: Date
  expenditure?: number

  flatPriority?: number

  tags?: Tag[]
}

export interface ToDoEntryMeta {
  isVisible: boolean
  isExpanded: boolean

  addedAt: Date
  lastModifiedAt: Date
  deletedAt?: Date
}

export const useToDoEntryStore = defineStore('todoEntries', () => {
  const entries = ref<ToDoEntry[]>([])

  function addEntry(entry: ToDoEntry): void {
    entries.value.push(entry)
  }

  function removeEntry(entry: ToDoEntry): void {
    const index = entries.value.indexOf(entry)
    if (index > -1) {
      entries.value.splice(index, 1)
    }
  }

  function clearEntries(): void {
    entries.value = []
  }

  return { entries, addEntry, removeEntry, clearEntries }
})
