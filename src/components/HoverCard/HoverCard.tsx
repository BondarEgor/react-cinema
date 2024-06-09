import React from 'react'
import { styled } from '@mui/system'
import { Card } from '@mui/material'

const HoverCard = styled(Card)({
	transition: 'transform 1s',
	'&:hover': {
		transform: 'scale(1.02)',
	},
})

export default HoverCard
