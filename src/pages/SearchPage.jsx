import { useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import DoctorProfile from '../components/DoctorProfile'
import BookingRequest from '../components/BookingRequest'
import { doctors } from '../data/doctors'

const specialties = [
  { label: 'All', value: 'All' },
  { label: 'GP', value: 'General practitioner' },
  { label: 'Dermatology', value: 'Dermatologist' },
  { label: 'Cardiology', value: 'Cardiologist' },
]

function SearchPage({ searchText, setSearchText }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [screen, setScreen] = useState('list')

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

  if (screen === 'profile') {
    return (
      <main>
        <DoctorProfile
          doctor={selectedDoctor}
          onBack={() => {
            setSelectedDoctor(null)
            setScreen('list')
          }}
          onRequestAppointment={() => setScreen('booking')}
        />
      </main>
    )
  }

  if (screen === 'booking') {
    return (
      <main>
        <BookingRequest
          doctor={selectedDoctor}
          onBack={() => setScreen('profile')}
        />
      </main>
    )
  }

  return (
    <main>
      <h1>Find a doctor</h1>
      <input
        type="search"
        className="search-input"
        placeholder="Search by name, specialty, or city"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <div className="pill-row">
        {specialties.map((item) => (
          <button
            key={item.value}
            className={selectedSpecialty === item.value ? 'pill pill-selected' : 'pill'}
            onClick={() => setSelectedSpecialty(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <p>No doctors found. Try a different name, specialty, or city.</p>
      )}

      {filteredDoctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onViewProfile={() => {
            setSelectedDoctor(doctor)
            setScreen('profile')
          }}
        />
      ))}
    </main>
  )
}

export default SearchPage