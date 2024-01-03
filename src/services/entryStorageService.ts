import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'
import exp from 'constants'

/**
 * Loads entries from local storage and adds them to the todo entry store.
 */
export function loadEntries(): void {
  const store = useToDoEntryStore()

  const entries = getEntriesFromLS()

  entries.forEach((entry) => {
    store.addEntry(entry)
  })
}

/**
 * Saves the given entries to the local storage.
 * @param entries - An array of entries to be saved.
 */
export function saveEntries(entries: ToDoEntry[]): void {
  localStorage.setItem('entries', JSON.stringify(entries))
}

export function getEntriesFromLS(): ToDoEntry[] {
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

export function revertToDebugEntries(): void {
  clearEntries()

  const store = useToDoEntryStore()

  store.addEntry({
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
  store.addEntry({
    todoEntry: {
      title: 'Prepare Presentation',
      description: 'Create slides for upcoming presentation',
      color: { r: 50, g: 173, b: 230 },
      expenditure: { time: 30, unit: 'min' }
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'Research New Feature',
      description: 'Explore options for implementing a new feature',
      color: { r: 162, g: 132, b: 94 },
      deadline: new Date('2027-09-29')
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'Bug Fixing',
      description: 'Investigate and resolve reported bugs',
      color: { r: 52, g: 199, b: 89 }
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'Code Refactoring',
      description: 'Improve code quality and maintainability',
      color: { r: 255, g: 204, b: 0 }
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'Testing Phase',
      description: 'Perform comprehensive testing of the application',
      color: { r: 255, g: 59, b: 48 }
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'UI Design Review',
      description: 'Evaluate and enhance user interface design',
      color: { r: 50, g: 173, b: 230 }
    },
    isVisible: true,
    isExpanded: false
  })
  store.addEntry({
    todoEntry: {
      title: 'Documentation Fix',
      description: 'Update project documentation with recent changes',
      color: { r: 162, g: 132, b: 94 }
    },
    isVisible: true,
    isExpanded: false
  })

  saveEntries(store.entries)
}

export function clearLocalStorage(): void {
  localStorage.clear()
}

export function getDeletedEntries(): ToDoEntry[] {
  const entries = localStorage.getItem('deletedEntries')

  if (entries) {
    return JSON.parse(entries)
  } else {
    return []
  }
}
