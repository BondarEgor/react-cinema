import { StyledEngineProvider, Button } from '@mui/material'
import { useState } from 'react'
import { FilteredButtons } from '../../types/filterButtons'


export default function ButtonGroup({ buttons }: FilteredButtons) {
	const [activeButton, setActiveButton] = useState<number | null>(null)

	return (
		<StyledEngineProvider injectFirst>
			<div className='flex flex-1 gap-6 mt-4'>
				{buttons.map(button => (
					<Button
						key={button.id}
						onClick={() => setActiveButton(button.id)}
						className={`custom-button ${
							activeButton === button.id ? 'active-button' : ''
						}`}
					>
						{button.value}
					</Button>
				))}
			</div>
		</StyledEngineProvider>
	)
}
