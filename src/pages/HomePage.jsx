import Button from '../components/Button'

function HomePage({ searchText, setSearchText, onGoTo }) {
  return (
    <main>
      <h1>Welcome to Reti</h1>
      <p>Your health matters. We're here to help you find the right care.</p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          onGoTo('search')
        }}
      >
        <input
          type="search"
          className="search-input"
          placeholder="Search for a doctor, specialty, or city"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </form>

      <div className="hero">
        <h2>Need a doctor? We make it simple.</h2>
        <p>Find the right specialist and send an appointment request.</p>
        <Button onClick={() => onGoTo('search')}>Find a doctor</Button>
      </div>

      <h2 className="section-title">Quick actions</h2>
      <div className="quick-grid">
        <button className="quick-card" onClick={() => onGoTo('search')}>
          <strong>Find a doctor</strong>
          <span>Search by specialty or name</span>
        </button>
        <button className="quick-card" onClick={() => onGoTo('appointments')}>
          <strong>Your appointments</strong>
          <span>See your requests</span>
        </button>
      </div>

      <h2 className="section-title">How requests work</h2>
      <ol className="steps">
        <li>Choose a doctor and a time.</li>
        <li>Send your request.</li>
        <li>The clinic confirms it. Until then, it is only a request.</li>
      </ol>
      <p className="demo-note">Reti is a demo. All doctors shown are sample data.</p>
    </main>
  )
}

export default HomePage
