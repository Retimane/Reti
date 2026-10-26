import Card from './Card'
import Badge from './Badge'

function DoctorCard({ doctor }) {
  return (
    <Card>
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty} · {doctor.city}</p>
      <Badge>Demo data</Badge>
    </Card>
  )
}

export default DoctorCard