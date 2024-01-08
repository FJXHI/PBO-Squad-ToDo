import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'

/**
 * Loads entries from local storage and adds them to the todo entry store.
 */
export function loadEntries(): void {
  const store = useToDoEntryStore()

  const entries = getEntriesFromLS()

  entries.forEach((entry) => {
    store.addEntry(entry)
  })

  console.log(store.entries)
}

/**
 * Saves the given entry to the store and local storage.
 * @param entriy - The entry to save.
 */
export function addEntry(entry: ToDoEntry): void {
  const store = useToDoEntryStore()
  store.addEntry(entry)

  localStorage.setItem('entries', JSON.stringify(store.entries))
}

function getEntriesFromLS(): ToDoEntry[] {
  const entries = localStorage.getItem('entries')

  if (entries) {
    return JSON.parse(entries)
  } else {
    return []
  }
}

/**
 * Clears all entries stored in the local storage.
 */
export function clearEntries(): void {
  const store = useToDoEntryStore()
  store.clearEntries()

  localStorage.removeItem('entries')
}

/**
 * Reverts the entry storage to debug entries.
 * Debug entries are pre-defined ToDoEntry objects used for testing and debugging purposes.
 * This function clears the existing entries and adds the debug entries to the entry storage.
 */
export function revertToDebugEntries(): void {
  const debugEntries: ToDoEntry[] = []

  debugEntries.push({
    todoEntry: {
      title: 'Meeting with Client',
      description: 'Discuss project requirements and timeline',
      color: { r: 255, g: 59, b: 48 },
      deadline: new Date('2024-01-07'),
      expenditure: { time: 5, unit: 'h' }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Prepare Presentation',
      description: 'Create slides for upcoming presentation',
      color: { r: 50, g: 173, b: 230 },
      expenditure: { time: 30, unit: 'min' }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Research New Feature',
      description: 'Explore options for implementing a new feature',
      color: { r: 162, g: 132, b: 94 },
      deadline: new Date('2027-09-29')
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Bug Fixing',
      description: 'Investigate and resolve reported bugs',
      color: { r: 52, g: 199, b: 89 }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Code Refactoring',
      description: 'Improve code quality and maintainability',
      color: { r: 255, g: 204, b: 0 }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Testing Phase',
      description: 'Perform comprehensive testing of the application',
      color: { r: 255, g: 59, b: 48 }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'UI Design Review',
      description: 'Evaluate and enhance user interface design',
      color: { r: 50, g: 173, b: 230 }
    },
    isVisible: true,
    isExpanded: false
  })
  debugEntries.push({
    todoEntry: {
      title: 'Documentation Fix',
      description: 'Update project documentation with recent changes',
      color: { r: 162, g: 132, b: 94 }
    },
    isVisible: true,
    isExpanded: false
  })

  clearEntries()
  debugEntries.forEach((entry) => {
    addEntry(entry)
  })
}

/**
 * Clears the entire local storage.
 */
export function clearLocalStorage(): void {
  localStorage.clear()
}

/**
 * Retrieves the deleted entries from local storage.
 * @returns An array of ToDoEntry objects representing the deleted entries.
 */
export function getDeletedEntries(): ToDoEntry[] {
  const entries = localStorage.getItem('deletedEntries')

  if (entries) {
    return JSON.parse(entries)
  } else {
    return []
  }
}
