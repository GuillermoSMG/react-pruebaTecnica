import React, { useState, createContext } from 'react'

import './App.css'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export const ThemeContext = createContext(null)

function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const [theme, setTheme] = useState('dark')

  const handleClick = async () => {
    refreshRandomFact()
  }

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className='main' id={theme}>
        <h1 className='title'>Gatitos</h1>
        <div className='buttons'>
          <button className='button buttonTheme' onClick={toggleTheme}>{theme === 'light' ? 'Dark 🌔' : 'Light ☀️'}</button>
          <button className='button buttonFact' onClick={handleClick}>Get new FACT</button>
        </div>
        <div className="body">
          {fact && <p className='fact'>{fact}</p>}
          {imageUrl && <img className='img' src={imageUrl} alt={`Image extracted useing first three words for ${fact}`} />}
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
