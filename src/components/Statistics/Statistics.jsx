import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <div>
        <p className={css.statistics__text}>Good: {good}</p>
        <p className={css.statistics__text}>Neutral: {neutral}</p>
        <p className={css.statistics__text}>Bad: {bad}</p>
        <p className={css.statistics__text}>Total: {total}</p>
        <p className={css.statistics__text}>Positive: {positivePercentage}%</p>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
