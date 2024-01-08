import { useDeleteStore } from '@/stores/delete_done_store'
import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'

// local storage names
const active = 'entries'
const archived = 'archived'

/**
 * Loads entries from local storage and adds them to the todo entry store.
 */
export function loadEntries(): void {
  // revertToDebugEntries()

  const entries = getEntriesFromLS()

  const store = useToDoEntryStore()
  store.clearEntries()

  entries.forEach((entry) => {
    store.addEntry(entry)
  })
}

/**
 * Saves the given entry to the store and local storage.
 * @param entriy - The entry to save.
 */
export function addEntry(entry: ToDoEntry): void {
  const store = useToDoEntryStore()
  store.addEntry(entry)

  localStorage.setItem(active, JSON.stringify(store.entries))

  // console.log("ls", getEntriesFromLS());
}

function getEntriesFromLS(): ToDoEntry[] {
  const entries = localStorage.getItem(active)
  if (entries) {
    const parsedEntries = JSON.parse(entries)
    return parsedEntries.map((entry: ToDoEntry) => {
      if (entry.todoEntry.deadline) {
        entry.todoEntry.deadline = new Date(entry.todoEntry.deadline)
      }
      return entry
    })
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

  localStorage.removeItem(active)
}

/**
 * Completes an entry by removing it from the to-do entry store and adding it to the deleted entry store.
 * @param entry - The entry to be completed.
 * @param isDelete - A boolean indicating whether the entry should be permanently deleted or not.
 */
export function completeEntry(entry: ToDoEntry, isDelete: boolean): void {
  const store = useToDoEntryStore()
  store.removeEntry(entry)

  const archivedStore = useDeleteStore()
  archivedStore.addDeletedEntry(entry, isDelete)

  localStorage.setItem(active, JSON.stringify(store.entries))
  localStorage.setItem(archived, JSON.stringify(archivedStore.deletedEntries))
}

/**
 * Retrieves the deleted entries from local storage.
 * @returns An array of ToDoEntry objects representing the deleted entries.
 */
export function getArchivedEntries(): ToDoEntry[] {
  const entries = localStorage.getItem(archived)

  if (entries) {
    return JSON.parse(entries)
  } else {
    return []
  }
}

// ------------------ Debug Functions ------------------

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
  console.log('Reverted to debug entries')
}

/**
 * Clears the entire local storage.
 */
export function clearLocalStorage(): void {
  localStorage.clear()
  console.log('Cleared local storage')
}
