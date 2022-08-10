export interface ITodoItem {
    id: string | number
    name: string
    description: string
    date: Date
    status: TodoStatus
}

export type TodoStatus = 'idle' | 'inwork' | 'cancel' | 'success' 