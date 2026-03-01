import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './homeworks/MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp/>
    <MyAwesomeApp/>
  </StrictMode>,
)
