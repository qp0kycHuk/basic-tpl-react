import React from 'react'
import { ITodoItem } from '../models/TodoItem'
import { TodoItem } from './TodoItem'

interface TodoListProps {
    items: ITodoItem[]
}

export const TodoList = ({ items }: TodoListProps) => {
    return (
        <section>
            <div className="grid">
                {items.map((item) => (
                    <div className="grid-col-4" key={item.id}>
                        <TodoItem item={item} />
                    </div>
                ))}
            </div>
        </section>
    )
}