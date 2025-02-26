import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import './App.css'

function App() {
  const theme = React.useMemo(() => createTheme({ palette: { mode: 'light' } }), [])

  return <ThemeProvider theme={theme}>App.tsx</ThemeProvider>
}

export default App
