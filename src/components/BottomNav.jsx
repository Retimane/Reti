const items = [
  { id: 'home', label: 'Home' },
  { id: 'search', label: 'Search' },
  { id: 'appointments', label: 'Appointments' },
  { id: 'profile', label: 'Profile' },
]

function BottomNav({ tab, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((item) => (
        <button
          key={item.id}
          className={tab === item.id ? 'nav-item nav-item-active' : 'nav-item'}
          aria-current={tab === item.id ? 'page' : undefined}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default BottomNav