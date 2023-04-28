import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
      <div>
        <p className={css.statistics__text}>Good: {good}</p>
        <p className={css.statistics__text}>Neutral: {neutral}</p>
        <p className={css.statistics__text}>Bad: {bad}</p>
        <p className={css.statistics__text}>Total: {total}</p>
        <p className={css.statistics__text}>Positive: {positivePercentage}%</p>
      </div>   
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
