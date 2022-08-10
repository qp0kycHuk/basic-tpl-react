import React from 'react'
import { ITodoItem } from '../models/TodoItem'
import { Card } from '../../ui/Card'

interface TodoItemProps {
    item: ITodoItem
}

export const TodoItem = ({ item }: TodoItemProps) => {
    return (
        <Card>
            <div className="p-4">
                <div className="text-h4 mb-2">{item.name}</div>
                <div className="text-body-2 fade-80">{item.description}</div>
            </div>
        </Card>
    )
}