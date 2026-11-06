import { useState } from 'react'
import './App.css'
import RegularFetchView from './components/RegularFetchView'
import TanStackView from './components/TanStackView'

function App() {

  const [tab, setTab] = useState<'regular' | 'tanstack'>('regular')
  

  return (
    <main>
      <h1>Character Manager</h1>
      <button onClick={() => setTab('regular')}>Regular Fetch</button>
      <button onClick={() => setTab('tanstack')}>TanStack Query</button>

      {tab === 'regular' ? <RegularFetchView/> : <TanStackView/>}

    </main>
  )
}

export default App