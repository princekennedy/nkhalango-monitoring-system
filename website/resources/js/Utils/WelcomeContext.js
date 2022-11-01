import React, { useState, createContext } from 'react'


export const WelcomeContext = createContext();

export const WelcomeProvider = (props) => {
	const [welcome, setWelcome] = useState(true)

	return (
		<WelcomeContext.Provider value={[welcome, setWelcome]}>
			{props.children}
		</WelcomeContext.Provider>
	)
}
