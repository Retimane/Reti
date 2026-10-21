import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { doctors } from '../data/doctors'

function HomePage() {
  const [searchText, setSearchText] = useState('')
  const filteredDoctors = doctors.filter((doctor) =>
  doctor.name.toLowerCase().includes(searchText.toLowerCase())
)
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
    {filteredDoctors.length === 0 && (
      <p>No doctors found. Try a different name.</p>
)}
    {filteredDoctors.map((doctor) => (
      <Card key={doctor.id}>
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty} · {doctor.city}</p>
        <Badge>Demo data</Badge>
      </Card>
))}
    </main>
  )
}

export default HomePage