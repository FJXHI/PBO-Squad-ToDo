import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Color {
  r: number
  g: number
  b: number
  a?: number
}
export interface Tag {
  tag: string
  tagColor: Color
}

export interface ToDoEntry {
  metadata: ToDoEntryMeta

  title: string
  description?: string

  // color is stored as string containing the hex code
  color: string

  deadline?: Date
  expenditure?: { time: number; unit: string }

  flatPriority?: number

  tags?: Tag[]
}

export interface ToDoEntryMeta {
  isVisible: boolean
  isExpanded: boolean
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

  return { entries, addEntry, removeEntry }
})
