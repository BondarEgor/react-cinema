import { Backdrop, CircularProgress } from '@mui/material'
import { LoaderProps } from '../../types/LoaderProps'

export default function Loader({ loading }: LoaderProps) {
	return (
		<>
			<Backdrop
				sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 10 }}
				open={loading}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
		</>
	)
}
