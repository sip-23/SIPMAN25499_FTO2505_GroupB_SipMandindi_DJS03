import { useState } from 'react'
import sippiCupLogo from './assets/SippiCup_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={sippiCupLogo} className="logo-sippi-cup mx-auto mb-4" alt="Sippi-Cup logo" />
        </a>
      </div>
      <h1>Count Up to 1000 to launch Sippi-Cup</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
