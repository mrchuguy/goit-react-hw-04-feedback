import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const changeState = type => {
    switch (type) {
      case 'good':
        setGood(prev => ++prev);
        break;
      case 'neutral':
        setNeutral(prev => ++prev);
        break;
      case 'bad':
        setBad(prev => ++prev);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={changeState}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
