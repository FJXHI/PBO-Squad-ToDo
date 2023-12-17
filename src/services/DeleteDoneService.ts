import type { ToDoEntry } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store'
import { useDeleteStore } from '@/stores/delete_done_store'

export function removeAndAddEntry(entry: ToDoEntry, isDelete: boolean): void {
  const EntryStore = useToDoEntryStore()
  const deleteStore = useDeleteStore()
  console.log('removeAndAddEntry', isDelete, entry)

  EntryStore.removeEntry(entry)
  deleteStore.addDeletedEntry(entry, isDelete)
}
