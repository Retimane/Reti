import Card from './Card'
import Button from './Button'

function BookingRequest({ doctor, onBack }) {
  return (
    <div>
      <Button onClick={onBack}>Back to profile</Button>
      <Card>
        <h2>Request an appointment</h2>
        <p>With {doctor.name} · {doctor.clinic}</p>
        <p>This is a demo. Nothing you do here is sent to a clinic.</p>
      </Card>
    </div>
  )
}

export default BookingRequest