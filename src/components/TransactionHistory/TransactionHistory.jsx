import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={css.transactionHistory}>
            
  <thead className={css.tableHeader}>
    <tr>
      <th className={css.tableTitle}>Type</th>
      <th className={css.tableTitle}>Amount</th>
      <th className={css.tableTitle}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id,type,amount,currency}) => (
    <tr key={id} className={css.tableRow}>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableItem}>{amount}</td>
      <td className={css.tableItem}>{currency}</td>
    </tr> ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
  PropTypes.shape({
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
 )
  
}