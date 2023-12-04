import { useToDoEntryStore } from '@/stores/entry_store'

export function search(query: string): void {
  const store = useToDoEntryStore()
  const entries = store.entries

  const searchParams = query.trim().split(' ')
  console.log(searchParams)

  entries.forEach((entry) => {
    // const contains = entry.todoEntry.title.toLowerCase().includes(query.toLowerCase())
    const contains = searchParams.some((param) =>
      entry.todoEntry.title.toLowerCase().includes(param.toLowerCase())
    ) // some vs every?
    entry.isVisible = contains ? true : false
  })
}