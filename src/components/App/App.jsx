import React, { Component } from 'react';
import css from './App.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good } = this.state;
    return this.totalFeedback()
      ? Math.round((good / this.totalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.section}>
        <h1 className={css.main__title}>Please leave your feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrement}
        />
        {this.totalFeedback() ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (
          <h2 className={css.notification}>There is no feedback</h2>
        )}
      </div>
    );
  }
}
