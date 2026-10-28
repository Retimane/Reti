import Card from './Card'
import Badge from './Badge'
import Button from './Button'

function DoctorProfile({ doctor, onBack, onRequestAppointment }) {
  return (
    <div>
      <Button onClick={onBack}>Back to results</Button>
      <Card>
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty} · {doctor.city}</p>
        <p>Clinic: {doctor.clinic}</p>
        <p>Languages: {doctor.languages}</p>
        <p>Experience: {doctor.experience}</p>
        <Badge>Demo data</Badge>
        <Button onClick={onRequestAppointment}>Request appointment</Button>
      </Card>
    </div>
  )
}

export default DoctorProfile