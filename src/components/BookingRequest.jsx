import { useState } from 'react'
import Card from './Card'
import Button from './Button'

function BookingRequest({ doctor, onBack }) {
  const [selectedDate, setSelectedDate] = useState('')
  const dates = ['Mon 3 Nov', 'Tue 4 Nov', 'Wed 5 Nov']
  return (
    <div>
      <Button onClick={onBack}>Back to profile</Button>
      <Card>
        <h2>Request an appointment</h2>
        <p>With {doctor.name} · {doctor.clinic}</p>
        <p>This is a demo. Nothing you do here is sent to a clinic.</p>
        <h3>Choose a date</h3>
<div className="pill-row">
  {dates.map((date) => (
    <button
      key={date}
      className={selectedDate === date ? 'pill pill-selected' : 'pill'}
      onClick={() => setSelectedDate(date)}
    >
      {date}
    </button>
  ))}
</div>
{selectedDate && <p>You picked: {selectedDate}</p>}
      </Card>
    </div>
  )
}

export default BookingRequest