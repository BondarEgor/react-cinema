import React from 'react'
import { styled } from '@mui/system'
import { Card } from '@mui/material'

const HoverCard = styled(Card)({
	transition: 'transform 0.7s',
	'&:hover': {
		transform: 'scale(1.02)',
	},
})

export default HoverCard
