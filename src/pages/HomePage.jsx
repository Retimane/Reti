import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { doctors } from '../data/doctors'

function HomePage() {
  const [searchText, setSearchText] = useState('')

  const search = searchText.toLowerCase()

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search) ||
    doctor.specialty.toLowerCase().includes(search) ||
    doctor.city.toLowerCase().includes(search)
  )

  return (
    <main>
      <h1>Reti</h1>
      <p>Healthcare made easier.</p>
      <input
       type="search"
       className="search-input"
       placeholder="Search by name, specialty, or city"
       value={searchText}
       onChange={(event) => setSearchText(event.target.value)}
/>
       
      <div className="button-row">
        <Button>Find a doctor</Button>
        <Button>Request appointment</Button>
      </div>
      {filteredDoctors.length === 0 && (
  <p>No doctors found. Try a different name, specialty, or city.</p>
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