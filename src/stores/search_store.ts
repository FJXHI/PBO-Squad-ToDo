import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchSettings', () => {
  const sortOptions = ref([
    { name: 'Title', isActive: false, descending: true },
    { name: 'Deadline', isActive: false, descending: true },
    { name: 'Expenditure', isActive: false, descending: true },
    { name: 'Last Added', isActive: false, descending: true }
  ])

  return { sortOptions }
})
