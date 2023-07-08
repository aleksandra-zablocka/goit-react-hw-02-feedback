import React, { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <div className={css.statistics}>
        <h2>Statistics</h2>
        <div className={css.results}>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        </div>
      </div>
    );
  }
}

export default Statistics;
