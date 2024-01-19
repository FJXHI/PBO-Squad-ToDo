import { useToDoEntryStore, type ToDoEntry } from '@/stores/entry_store'
import { useSearchStore } from '@/stores/search_store'

export function search(query: string): void {
  const store = useToDoEntryStore()
  const entries = store.entries

  const searchParams = query.trim().split(' ')

  entries.forEach((entry) => {
    const containsTitle = searchParams.every((param) =>
      entry.title.toLowerCase().includes(param.toLowerCase())
    )

    const containsDescription = searchParams.every(
      (param) => entry.description?.toLowerCase().includes(param.toLowerCase())
    )

    entry.metadata.isVisible = containsTitle || containsDescription
  })
}

export function sortEntries(): void {
  const store = useToDoEntryStore()
  const entries = store.entries

  const searchStore = useSearchStore()
  const sortOptions = searchStore.sortOptions

  if (sortOptions['Title'].isActive) {
    entries.sort((entry1, entry2) => sortByTitle(entry1, entry2, sortOptions['Title'].isDescending))
  } else if (sortOptions['Deadline'].isActive) {
    entries.sort((entry1, entry2) =>
      sortByDeadline(entry1, entry2, sortOptions['Deadline'].isDescending)
    )
  } else if (sortOptions['Expenditure'].isActive) {
    entries.sort((entry1, entry2) =>
      sortByExp(entry1, entry2, sortOptions['Expenditure'].isDescending)
    )
  } else if (sortOptions['Last Added'].isActive) {
    entries.sort((entry1, entry2) =>
      sortByLastAdded(entry1, entry2, sortOptions['Last Added'].isDescending)
    )
  } else if (sortOptions['Last Modified'].isActive) {
    entries.sort((entry1, entry2) =>
      sortByLastModified(entry1, entry2, sortOptions['Last Modified'].isDescending)
    )
  } else {
    throw new Error('nothing to sort')
  }
}

/**
 * Sorts two ToDoEntry objects by their Title.
 * @param entry1 - The first ToDoEntry object to compare.
 * @param entry2 - The second ToDoEntry object to compare.
 * @param descending - Determines whether the sorting should be in descending order.
 * @returns A number indicating the order of the two objects.
 */
function sortByTitle(entry1: ToDoEntry, entry2: ToDoEntry, descending: boolean): number {
  const Title1 = entry1.title.toLowerCase()
  const Title2 = entry2.title.toLowerCase()

  // case A Z
  if (Title1 < Title2) {
    return descending ? -1 : 1
  } // case Z A
  if (Title1 > Title2) {
    return descending ? 1 : -1
  }

  return 0 // case equal
}

/**
 * Sorts two ToDoEntry objects based on their deadlines.
 * @param entry1 - The first ToDoEntry object to compare.
 * @param entry2 - The second ToDoEntry object to compare.
 * @param descending - Determines whether to sort in descending order.
 * @returns A number indicating the order of the two objects.
 */
function sortByDeadline(entry1: ToDoEntry, entry2: ToDoEntry, descending: boolean): number {
  const deadline1 = entry1.deadline
  const deadline2 = entry2.deadline

  if (deadline1 === null || deadline1 === undefined) {
    return 1
  }
  if (deadline2 === null || deadline2 === undefined) {
    return -1
  }

  if (deadline1 < deadline2) {
    return descending ? -1 : 1
  }
  if (deadline1 > deadline2) {
    return descending ? 1 : -1
  }

  return 0
}

/**
 * Sorts two ToDoEntry objects based on their expenditure property.
 * @param entry1 - The first ToDoEntry object to compare.
 * @param entry2 - The second ToDoEntry object to compare.
 * @param descending - Determines whether the sorting should be in descending order.
 * @returns A number indicating the order of the two objects.
 */
function sortByExp(entry1: ToDoEntry, entry2: ToDoEntry, descending: boolean): number {
  const expenditure1 = entry1.expenditure
  const expenditure2 = entry2.expenditure

  if (expenditure1 === null || expenditure1 === undefined) {
    return 1
  }
  if (expenditure2 === null || expenditure2 === undefined) {
    return -1
  }

  if (expenditure1 < expenditure2) {
    return descending ? -1 : 1
  }
  if (expenditure1 > expenditure2) {
    return descending ? 1 : -1
  }

  return 0
}

/**
 * Sorts two ToDoEntry objects based on their last added expenditure.
 * @param entry1 - The first ToDoEntry object to compare.
 * @param entry2 - The second ToDoEntry object to compare.
 * @param descending - Determines whether the sorting should be in descending order.
 * @returns A number indicating the order of the two objects.
 */
function sortByLastAdded(entry1: ToDoEntry, entry2: ToDoEntry, descending: boolean): number {
  const lastAdded1 = entry1.metadata.addedAt
  const lastAdded2 = entry2.metadata.addedAt

  if (lastAdded1 === null || lastAdded1 === undefined) {
    return 1
  }
  if (lastAdded2 === null || lastAdded2 === undefined) {
    return -1
  }

  if (lastAdded1 < lastAdded2) {
    return descending ? 1 : -1
  }
  if (lastAdded1 > lastAdded2) {
    return descending ? -1 : 1
  }

  return 0
}

/**
 * Sorts two ToDoEntry objects based on their last modified date.
 * @param entry1 - The first ToDoEntry object to compare.
 * @param entry2 - The second ToDoEntry object to compare.
 * @param descending - A boolean value indicating whether to sort in descending order.
 * @returns A number indicating the order of the two objects.
 */
function sortByLastModified(entry1: ToDoEntry, entry2: ToDoEntry, descending: boolean): number {
  const lastModified1 = entry1.metadata.lastModifiedAt
  const lastModified2 = entry2.metadata.lastModifiedAt

  if (lastModified1 === null || lastModified1 === undefined) {
    return 1
  }
  if (lastModified2 === null || lastModified2 === undefined) {
    return -1
  }

  if (lastModified1 < lastModified2) {
    return descending ? 1 : -1
  }
  if (lastModified1 > lastModified2) {
    return descending ? -1 : 1
  }

  return 0
}
