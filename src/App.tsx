import React, { useEffect, useState } from 'react'
import { TodoForm } from './components/Todo/TodoForm'
import { TodoList } from './components/Todo/TodoList'
import { ThemeProvider } from './hooks/use-theme'
import { ITodoItem } from './models/TodoItem'
import { Button } from './ui/Button'

const items: TodoItem[] = [
	{
		id: 111,
		name: 'Todo 1',
		description: 'lorem lorem lorem lorem lorem lorem ',
		date: new Date(),
		status: 'idle'
	},
	{
		id: 112,
		name: 'Todo 2',
		description: 'lorem lorem lorem lorem lorem lorem ',
		date: new Date(),
		status: 'idle'
	},
	{
		id: 113,
		name: 'Todo 3',
		description: 'lorem lorem lorem lorem lorem lorem ',
		date: new Date(),
		status: 'idle'
	},
]

export const App = () => {
	const [todos, setTodos] = useState<TodoItem[]>([])

	useEffect(() => {
		setTodos(items)
	}, [])


	return (
		<ThemeProvider>
			<section>
				<div className="text-h1 mb-5">Hello world</div>
				<TodoForm />
				<TodoList items={todos} />
			</section>
		</ThemeProvider>
	)
}