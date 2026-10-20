import Button from './components/Button'
import Card from './components/Card'
function App() {
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
        <p>General practitioner · Demo data</p>
      </Card>
    </main>
   )
}

export default App