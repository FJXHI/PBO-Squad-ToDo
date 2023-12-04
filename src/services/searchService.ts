import { useToDoEntryStore } from "@/stores/entry_store";



export function search(query: string): void {

    const store = useToDoEntryStore()

    const entries = store.entries

    entries.forEach(entry => {
        const contains = entry.todoEntry.title.toLowerCase().includes(query.toLowerCase())
        console.log(contains);

        entry.isVisible = contains ? true : false
    });
}