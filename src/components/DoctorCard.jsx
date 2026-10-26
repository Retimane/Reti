import Card from './Card'
import Badge from './Badge'
import Button from './Button'

function DoctorCard({ doctor }) {
  return (
    <Card>
      <h2>{doctor.name}</h2>
      <p>{doctor.specialty} · {doctor.city}</p>
      <Badge>Demo data</Badge>
      <Button onClick={() => alert('You clicked ' + doctor.name)}>View profile</Button>
    </Card>
  )
}

export default DoctorCard