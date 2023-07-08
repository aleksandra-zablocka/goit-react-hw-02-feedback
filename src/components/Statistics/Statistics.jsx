import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const total = this.props.good + this.props.neutral + this.props.bad;
    const positivePercentage =
      total !== 0 ? ((this.props.good / total) * 100).toFixed(0) : '';
      
    return (
      <div className={css.statistics}>
        <h2>Statistics</h2>
        <div className={css.results}>
          <p>Good: {this.props.good}</p>
          <p>Neutral: {this.props.neutral}</p>
          <p>Bad: {this.props.bad}</p>
        </div>
        <div className={css.summary}>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default Statistics;
