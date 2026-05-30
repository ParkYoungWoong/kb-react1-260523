import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Router from '@/routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>
)
