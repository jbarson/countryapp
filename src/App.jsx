import { useEffect, useState } from 'react'
import './App.css'
import '@picocss/pico'
import Country from './components/Country'

function App() {

  const [countries, setCountries] = useState([])
  const [page, setPage] = useState(1)
  const resultsNumber = 10

  useEffect(() => {
    fetch('/api')
      .then(data => data.json())
      .then(jsonData => setCountries(jsonData.sort((a, b) => a.name.common.localeCompare(b.name.common))))
  }, [])
  const handleNext = () => setPage(page + 1)
  const handlePrev = () => setPage(page - 1)
  const displayCountries = countries.slice((page - 1) * resultsNumber, page * resultsNumber)
  return (
    <>

      <h1>Country App</h1>
      <div className="card">
        <button onClick={handlePrev} disabled={page === 1}>Prev</button>
        <button onClick={handleNext} disabled={page === Math.ceil(countries.length / resultsNumber)}>Next</button>
        <br />
        {page} of {Math.ceil(countries.length / resultsNumber)}
        {displayCountries.map((country, id) =>
        <Country country={country} key={id} />
        )}

      </div>

    </>
  )
}

export default App

