import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'

function HomePage() {
  const [searchText, setSearchText] = useState('')
  return (
    <main>
      <h1>Reti</h1>
      <p>Healthcare made easier.</p>
      <input
       type="search"
       className="search-input"
       placeholder="Search for a doctor or specialty"
       value={searchText}
       onChange={(event) => setSearchText(event.target.value)}
/>
       <p>You typed: {searchText}</p>
      <div className="button-row">
        <Button>Find a doctor</Button>
        <Button>Request appointment</Button>
      </div>
      <Card>
        <h2>Dr. Sarah Müller</h2>
        <p>General practitioner</p>
        <Badge>Demo data</Badge>
        <Badge variant="pending">Pending confirmation</Badge>
      </Card>
    </main>
  )
}

export default HomePage