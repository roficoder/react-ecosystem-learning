import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/app.routes'
import { Component, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import LanguageContext, { defaultLanguageContextValue, Language, translationStore } from './context/language';
// import ComponentOne from './Components/ComponentOne';

const logFunction = (message: string) => console.log(message);

export function App() {

  const changeLanguage = (newLanguage: Language) => {
    setContextState((pre) => ({
      ...pre,
      language: newLanguage,
      translations: translationStore[newLanguage]
    }))
  }

  const [contextState, setContextState] = useState({
    ...defaultLanguageContextValue,
    changeLanguage: changeLanguage
  });


  useEffect(() => {
    console.log(contextState)
  }, [contextState])
  return (
    <>
      <BrowserRouter>
        <LanguageContext.Provider value={contextState}>
          <AppRoutes />
        </LanguageContext.Provider>
      </BrowserRouter>
    </>
  )
}

