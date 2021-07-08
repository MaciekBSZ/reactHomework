import { useState } from 'react'

function Buttons() {
	const [firstBtn, firstTitle] = useState('Cześć!')
	const [seconBtn, secondTitle] = useState('Do widzenia!')
	return (
		<>
			<button onClick={() => firstTitle('No elo :)')}>{firstBtn}</button>
			<button onClick={() => secondTitle('No nara :(')}>{seconBtn}</button>
		</>
	)
}

export default Buttons
