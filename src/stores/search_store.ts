import { ref } from 'vue'
import { defineStore } from 'pinia'

interface SortOptions {
  [key: string]: {
    isActive: boolean
    isDescending: boolean
  }
}

/**
 * Defines a store for the search settings, so it is accessible from all components.
 */
export const useSearchStore = defineStore('searchSettings', () => {
  const sortOptions = ref<SortOptions>({
    Title: { isActive: true, isDescending: true },
    Deadline: { isActive: false, isDescending: true },
    Expenditure: { isActive: false, isDescending: true },
    'Last Added': { isActive: false, isDescending: true },
    'Last Modified': { isActive: false, isDescending: true }
  })

  return { sortOptions }
})
