import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import PromptInput from './components/PromptInput'
import LoadingState from './components/LoadingState'
import ResultSection from './components/ResultSection'
import { generateContent } from './services/api'

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [userPrompt, setUserPrompt] = useState('')
  const [showAbout, setShowAbout] = useState(false)

  const handleSubmit = async (prompt) => {
    setLoading(true)
    setError(null)
    setResult(null)
    setUserPrompt(prompt)

    try {
      const data = await generateContent(prompt)
      setResult(data)
    } catch (err) {
      setError(
        err.message ||
        'Something went wrong while generating your lesson. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
    setUserPrompt('')

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="app">

      <Header
       onHome={handleReset}
      onAbout={() => setShowAbout(true)}
     />

      <main className="main-content">

        {!result && !loading && (
          <div id="home">
            <PromptInput onSubmit={handleSubmit} />
          </div>
        )}

        {loading && <LoadingState />}

        {error && (
          <div className="error-message">
            <h3>⚠️ Error</h3>
            <p>{error}</p>

            <button
              onClick={handleReset}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        )}

        {result && (
          <ResultSection
            result={result}
            userPrompt={userPrompt}
            onReset={handleReset}
          />
        )}

      </main>

      {showAbout && (
     <About onClose={() => setShowAbout(false)} />
    )}

      <footer className="footer">
        <p>© 2026 AI Learn & Visualize • </p>
      </footer>

    </div>
  )
}

export default App
