import React, { useState } from "react";

import { Container, Notification } from "./App.styles";

import FeedbackOptions from "./component/FeedbackOptions/FeedbackOptions";
import Statistics from "./component/Statistics/Statistics";
import Section from "./component/Section/Section";

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    return good + neutral + bad;
  };


    const positiveFeedback = () => {
    const total = totalFeedback();
    return Math.round(good / total * 100);
  }

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1)
        break;

      case 'bad':
        setBad(state => state + 1)
        break;

      default:
        console.log('Invalid feedback type');
    }
  }

  const positive = positiveFeedback();
  const total = totalFeedback();
  const options = Object.keys({ good, neutral, bad });
  const values = ({ good, neutral, bad })

  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {total !== 0 ? <Statistics options={options} values={values} total={total} positive={positive} />
          : <Notification>{"No feedback given"}</Notification>}
      </Section>
    </Container>
  )
}