import PropTypes from 'prop-types';
import { Item, Section, SpanEl, StatsList, Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <SpanEl>{label}</SpanEl>
            <SpanEl>{percentage}%</SpanEl>
          </Item>
        ))}
      </StatsList>
    </Section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
