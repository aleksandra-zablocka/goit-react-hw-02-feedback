import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.answers}>
    {options.map(option => (
      <button
        className={css.answerBtn}
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}

        {option === 'good' && (
          <div className={css.beans}>
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
          </div>
        )}
        {option === 'neutral' && (
          <div className={css.beans}>
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
          </div>
        )}
        {option === 'bad' && (
          <div className={css.beans}>
            <img
              src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
              width="20px"
              height="12px"
              alt="coffee bean"
              onClick={() => onLeaveFeedback({ target: { name: option } })}
            />
          </div>
        )}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
