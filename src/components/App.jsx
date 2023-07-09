import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total !== 0 ? ((good / total) * 100).toFixed(0) : '';
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = good + neutral + bad;
    return (
      <div>
        <form className={css.feedback}>
             <Section title="What is your opinion about Expresso Cafe?">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
        </form>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotal()}
            positivePercentage={this.countPositivePercentage()}
          />) : (<Notification message="There is no feedback yet"/>)}
        </Section>
      </div>
    );
  }
}

export default App;
