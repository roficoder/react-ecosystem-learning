import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
)
