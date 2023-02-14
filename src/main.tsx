import React, { startTransition } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider >
    <QueryClientProvider client={queryClient}>
      
        <App />
     
    </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
