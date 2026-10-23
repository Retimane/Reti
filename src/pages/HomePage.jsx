import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import { doctors } from '../data/doctors'

function HomePage() {
  const [searchText, setSearchText] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')

  const search = searchText.toLowerCase()

  const filteredDoctors = doctors.filter((doctor) => {
  const matchesSearch =
    doctor.name.toLowerCase().includes(search) ||
    doctor.specialty.toLowerCase().includes(search) ||
    doctor.city.toLowerCase().includes(search)

  const matchesSpecialty =
    selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty

  return matchesSearch && matchesSpecialty
})

  return (
    <main>
      <h1>Find the right doctor</h1>
      <p>Search by name, specialty, or city. Reti is a demo project, so all doctors shown are sample data.</p>
      <input
       type="search"
       className="search-input"
       placeholder="Search by name, specialty, or city"
       value={searchText}
       onChange={(event) => setSearchText(event.target.value)}
/>
  <div className="pill-row">
  <button
    className={selectedSpecialty === 'All' ? 'pill pill-selected' : 'pill'}
    onClick={() => setSelectedSpecialty('All')}
  >
    All
  </button>
  <button
    className={selectedSpecialty === 'Dermatologist' ? 'pill pill-selected' : 'pill'}
    onClick={() => setSelectedSpecialty('Dermatologist')}
  >
    Dermatology
  </button>
  <button
    className={selectedSpecialty === 'General practitioner' ? 'pill pill-selected' : 'pill'}
    onClick={() => setSelectedSpecialty('General practitioner')}
  >
    GP
  </button>
  <button
    className={selectedSpecialty === 'Cardiologist' ? 'pill pill-selected' : 'pill'}
    onClick={() => setSelectedSpecialty('Cardiologist')}
  >
    Cardiology
  </button>
</div>
 <p>
        {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} found
</p>
  <button
  className="pill"
  onClick={() => {
    setSearchText('')
    setSelectedSpecialty('All')
  }}
>
  Clear filters
</button>

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