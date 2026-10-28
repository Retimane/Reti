import { useState } from 'react'
import Card from './Card'
import Button from './Button'

function BookingRequest({ doctor, onBack }) {
  const [selectedDate, setSelectedDate] = useState('')
  const dates = ['Mon 3 Nov', 'Tue 4 Nov', 'Wed 5 Nov']
  const [selectedTime, setSelectedTime] = useState('')
  const times = ['09:00', '10:30', '14:00']
  const [submitted, setSubmitted] = useState(false)
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
<h3>Choose a time</h3>
<div className="pill-row">
  {times.map((time) => (
    <button
      key={time}
      className={selectedTime === time ? 'pill pill-selected' : 'pill'}
      onClick={() => setSelectedTime(time)}
    >
      {time}
    </button>
  ))}
</div>
{selectedTime && <p>You picked: {selectedTime}</p>}
{selectedDate && selectedTime && (
  <p>
    Your request: {selectedDate} at {selectedTime} with {doctor.name}
  </p>
)}
{selectedDate && selectedTime && !submitted && (
  <Button onClick={() => setSubmitted(true)}>Submit request</Button>
)}
{submitted && (
  <p>
    Demo only: this request was not sent to any clinic. In a real app, the clinic would
    need to confirm it before it becomes an appointment.
  </p>
)}
      </Card>
    </div>
  )
}

export default BookingRequest