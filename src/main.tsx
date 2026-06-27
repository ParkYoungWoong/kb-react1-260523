import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Router from '@/routes/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  // 옵션!
})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
)
