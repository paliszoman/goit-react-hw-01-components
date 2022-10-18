import './statistics.css'


const Statistics = (stats) => { 
    return (
       <section className="statistics">
  <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
          {stats.map(({id,label,percentage}) => (
    <li key={id}>
      <span className="label">{label}</span>
      <span className="quantity">{percentage}%</span>
    </li> ))}
  
  </ul>
</section>
    )
}

export { Statistics } 