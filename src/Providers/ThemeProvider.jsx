import React, { createContext, useState, useEffect } from 'react'

// Create a context for the theme
export const ThemeContext = createContext()

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  // On component mount, check local storage for the saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)

    // Apply the theme class to the document's root element
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    // Add or remove the 'dark' class based on the new theme
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* The theme class is managed by the root element, no need to add it here */}
      <div>{children}</div>
    </ThemeContext.Provider>
  )
}
