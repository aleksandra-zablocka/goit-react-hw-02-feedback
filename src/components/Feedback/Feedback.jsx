import React, { Component } from 'react';
import css from './Feedback.module.css';
import Statistics from 'components/Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  add = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form className={css.feedback}>
          <h2>What is your opinion about Expresso Cafe?</h2>
          <div className={css.answers}>
            <button
              className={css.answerBtn}
              type="button"
              name="good"
              onClick={this.add}
            >
              Good{' '}
              <div className={css.beans}>
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />
              </div>
            </button>
            <button
              className={css.answerBtn}
              type="button"
              name="neutral"
              onClick={this.add}
            >
              Neutral{' '}
              <div className={css.beans}>
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />{' '}
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />
              </div>
            </button>
            <button
              className={css.answerBtn}
              type="button"
              name="bad"
              onClick={this.add}
            >
              Bad{' '}
              <div className={css.beans}>
                <img
                  src="https://w7.pngwing.com/pngs/504/1013/png-transparent-instant-coffee-espresso-coffee-bean-arabica-coffee-coffee-beans-coffee-snout-bean.png"
                  width="20px"
                  height="12px"
                  alt="coffee bean"
                />
              </div>
            </button>
          </div>
        </form>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
