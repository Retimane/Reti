import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'

function HomePage() {
  return (
    <main>
      <h1>Reti</h1>
      <p>Healthcare made easier.</p>
      <div className="button-row">
        <Button>Find a doctor</Button>
        <Button>Request appointment</Button>
      </div>
      <Card>
        <h2>Dr. Sarah Müller</h2>
        <p>General practitioner</p>
        <Badge>Demo data</Badge>
        <Badge variant="pending">Pending confirmation</Badge>
      </Card>
    </main>
  )
}

export default HomePage