import { useDeleteStore } from '@/stores/delete_done_store'
import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'

// local storage names
const active = 'entries'
const archived = 'archived'

/**
 * Loads entries from local storage and adds them to the todo entry store.
 */
export function loadEntries(): void {
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
 * @param isDelete - A boolean indicating whether the entry was deleted or completed.
 */
export function completeEntry(entry: ToDoEntry, isDelete: boolean): void {
  entry.metadata.deletedAt = new Date()

  const store = useToDoEntryStore()
  store.removeEntry(entry)

  const archivedStore = useDeleteStore()
  archivedStore.addDeletedEntry(entry, isDelete)

  localStorage.setItem(active, JSON.stringify(store.entries))
  localStorage.setItem(archived, JSON.stringify(archivedStore.deletedEntries))
}

/**
 * Updates the local storage to the current entry and deleted storage
 */
export function updateLS() {
  const store = useToDoEntryStore()
  const delStore = useDeleteStore()

  localStorage.removeItem(active)
  localStorage.removeItem(archived)

  localStorage.setItem(active, JSON.stringify(store.entries))
  localStorage.setItem(archived, JSON.stringify(delStore.deletedEntries))
}

/**
 * Retrieves the deleted entries from local storage.
 * @returns An array of ToDoEntry objects representing the deleted entries.
 */
export function getArchivedEntries(): ToDoEntry[] {
  const entries = localStorage.getItem(archived)

  if (entries) {
    const parsedEntries = JSON.parse(entries)
    return parsedEntries.map((entry: ToDoEntry) => {
      entry.metadata.addedAt = new Date(entry.metadata.addedAt)
      entry.metadata.lastModifiedAt = new Date(entry.metadata.lastModifiedAt)
      if (entry.deadline) {
        entry.deadline = new Date(entry.deadline)
      }
      if (entry.metadata.deletedAt) {
        entry.metadata.deletedAt = new Date(entry.metadata.deletedAt)
      }
      return entry
    })
  } else {
    return []
  }
}

function getEntriesFromLS(): ToDoEntry[] {
  const entries = localStorage.getItem(active)
  if (entries) {
    const parsedEntries = JSON.parse(entries)
    return parsedEntries.map((entry: ToDoEntry) => {
      entry.metadata.addedAt = new Date(entry.metadata.addedAt)
      entry.metadata.lastModifiedAt = new Date(entry.metadata.lastModifiedAt)
      if (entry.deadline) {
        entry.deadline = new Date(entry.deadline)
      }
      if (entry.metadata.deletedAt) {
        entry.metadata.deletedAt = new Date(entry.metadata.deletedAt)
      }
      return entry
    })
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
    title: 'Meeting with Client',
    description: 'Discuss project requirements and timeline',
    color: '#ff3b30',
    deadline: new Date('2024-01-07'),
    expenditure: 5 * 60 * 60,
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })
  debugEntries.push({
    title: 'Prepare Presentation',
    description: 'Create slides for upcoming presentation',
    color: '#32ade6',
    deadline: new Date('2024-01-21'),
    expenditure: 30 * 60,
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'Research New Feature',
    description: 'Explore options for implementing a new feature',
    color: '#a2845e',
    deadline: new Date('2027-09-29'),
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'Bug Fixing',
    description: 'Investigate and resolve reported bugs',
    color: '#34c759',
    expenditure: 42 * 60,
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'Code Refactoring',
    description: 'Improve code quality and maintainability',
    color: '#ffcc00',
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'Testing Phase',
    description: 'Perform comprehensive testing of the application',
    color: '#ff3b30',
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'UI Design Review',
    description: 'Evaluate and enhance user interface design',
    color: '#32ade6',
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
  })

  debugEntries.push({
    title: 'Documentation Fix',
    description: 'Update project documentation with recent changes',
    color: '#a2855e',
    expenditure: 5 * 24 * 60 * 60,
    metadata: {
      isVisible: true,
      isExpanded: false,
      addedAt: new Date(),
      lastModifiedAt: new Date()
    }
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
 * Restore last delted/done Entry.
 */
export function restoreLastEntry(): void {
  const store = useToDoEntryStore()
  const archivedStore = useDeleteStore()

  const lastDeletedEntry = archivedStore.getLastDeletedEntry()
  if (lastDeletedEntry) {
    //console.log('Restore last deleted Entry: ', lastDeletedEntry.entry) //LOG
    lastDeletedEntry.entry.metadata.deletedAt = undefined
    store.addEntry(lastDeletedEntry.entry)

    archivedStore.removeLastDeletedEntry()

    localStorage.setItem(active, JSON.stringify(store.entries))
    localStorage.setItem(archived, JSON.stringify(archivedStore.deletedEntries))
  } else {
    console.log('No Entry to restore found') //LOG
  }
}
