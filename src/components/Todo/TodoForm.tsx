import React from 'react'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'

export const TodoForm = () => {
	return (
		<Card>
			<div className="p-4">
				<div className="flex">
					<label className="form-field mr-3 flex-grow">
						<div className="form-input-cover">
							<input type="text" className="form-input" placeholder='Название' />
						</div>
					</label>
					<Button>Добавить</Button>
				</div>
			</div>
		</Card>
	)
}