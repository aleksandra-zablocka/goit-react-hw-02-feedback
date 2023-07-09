import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  
  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total !== 0 ? ((good / total) * 100).toFixed(0) : '';
  }

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div>
        <form className={css.feedback}>
          <h2>What is your opinion about Expresso Cafe?</h2>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </form>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotal()}
          positivePercentage={this.countPositivePercentage()}
        />
      </div>
    );
  }
}

export default App;