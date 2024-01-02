import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SortOptions {
  [key: string]: {
    isActive: boolean
    isDescending: boolean
  }
}

export const useSearchStore = defineStore('searchSettings', () => {
  const sortOptions = ref<SortOptions>({
    "Title": { isActive: true, isDescending: true },
    "Deadline": { isActive: false, isDescending: true },
    "Expenditure": { isActive: false, isDescending: true },
    "Last Added": { isActive: false, isDescending: true }
  })

  return { sortOptions }
})
