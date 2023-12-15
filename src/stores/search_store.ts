import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchSettings', () => {
  // const sortOptions = ref([
  //   { name: 'Title', isActive: false, descending: true },
  //   { name: 'Deadline', isActive: false, descending: true },
  //   { name: 'Expenditure', isActive: false, descending: true },
  //   { name: 'Last Added', isActive: false, descending: true }
  // ])

  const sortOptions = ref({
    Title: { isActive: false, descending: true },
    Deadline: { isActive: false, descending: true },
    Expenditure: { isActive: false, descending: true },
    LastAdded: { isActive: false, descending: true }
  })

  return { sortOptions }
})
