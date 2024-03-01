import "./Country.css"
function Country({ country }) {
  const toggleInfoBox = (e) => {
    e.target.nextElementSibling.classList.toggle('show')
  }
  return (
    <div className="card">
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
      <br />
      <button onClick={toggleInfoBox}>More</button>
      <div className="info">
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Subregion: {country.subregion}</p>
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
      </div>
    </div>
  )
}

export default Country