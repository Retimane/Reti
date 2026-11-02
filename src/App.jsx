import { useState } from 'react'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import BottomNav from './components/BottomNav'

function App() {
  const [tab, setTab] = useState('home')
  const [searchText, setSearchText] = useState('')

  return (
    <>
      {tab === 'home' && (
        <HomePage
          searchText={searchText}
          setSearchText={setSearchText}
          onGoTo={setTab}
        />
      )}
      {tab === 'search' && (
        <SearchPage searchText={searchText} setSearchText={setSearchText} />
      )}
      {tab === 'appointments' && (
        <main>
          <h1>Appointments</h1>
          <p>Coming soon. Your requests will appear here.</p>
        </main>
      )}
      {tab === 'profile' && (
        <main>
          <h1>Profile</h1>
          <p>Coming soon. Language and privacy settings will go here.</p>
        </main>
      )}
      <BottomNav tab={tab} onChange={setTab} />
    </>
  )
}

export default App