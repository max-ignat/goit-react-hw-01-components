import PropTypes from 'prop-types';
import {
  Table,
  TableRowEl,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
    
    return (
      <Table>
        <TableHead>
          <TableRowEl>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>Currency</TableHeadCell>
          </TableRowEl>
        </TableHead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <TableDataCell>{type}</TableDataCell>
              <TableDataCell>{amount}</TableDataCell>
              <TableDataCell>{currency}</TableDataCell>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};