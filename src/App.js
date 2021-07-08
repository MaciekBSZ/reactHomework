import React, { useState, useEffect, useRef } from 'react'
import Name from './Name'

function App() {
	const [title, setTitle] = useState('Tytuł strony')
	const render = useRef(true)
	useEffect(() => {
		render.current ? (render.current = false) : alert('EFEKT!')
	}, [title])
	return (
		<>
			<h1>{title}</h1>
			<button onClick={() => setTitle('Nowy tytuł strony')}>Zmień tytuł</button>
			<button onClick={() => setTitle('Jeszcze nowszy tytuł strony')}>Kolejny tytuł strony</button>
			<button onClick={() => setTitle('Ultymatywny tytuł!')}>Another title!</button>
			<Name name='Maciek' />
		</>
	)
}

export default App
