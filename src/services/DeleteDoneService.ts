import type { ToDoEntry } from '@/stores/entry_store'
import { useToDoEntryStore } from '@/stores/entry_store';
import { useDeleteStore } from '@/stores/delete_done_store';

export function removeAndAddEntry(entry: ToDoEntry): void {
    const EntryStore = useToDoEntryStore();
    const deleteStore = useDeleteStore();

    EntryStore.removeEntry(entry);
    deleteStore.addDeletedEntry(entry);
}