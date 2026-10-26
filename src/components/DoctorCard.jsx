import Card from './Card'
import Badge from './Badge'
import Button from './Button'

function DoctorCard({ doctor, onViewProfile }) {
  return (
    <Card>
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty} · {doctor.city}</p>
      <Badge>Demo data</Badge>
      <Button onClick={onViewProfile}>View profile</Button>
    </Card>
  )
}

export default DoctorCard