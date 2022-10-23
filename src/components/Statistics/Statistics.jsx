import PropTypes from "prop-types";
import css from './Statistics.module.css'


export const Statistics = ({ title, stats }) => { 
  return (
       <section className={css.statistics}>
      <div>{title ? <h2 className={css.title}>{title}</h2>:null}</div>
    <ul className={css.statList}>
          {stats.map(({id,label,percentage}) => (
    <li key={id} className={css.stat}>
      <span className={css.label}>{label}</span>
      <span className={css.quantity}>{percentage}%</span>
    </li> ))}
  
  </ul>
</section>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }),
 )
  
}