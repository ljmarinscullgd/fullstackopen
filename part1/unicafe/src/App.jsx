import { useState } from 'react'
import Statistics from './Statistics'
import FeedbackButton from './FeedbackButton'
import Title from './Title'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isThereAnyFeedBack = (good + neutral + bad) > 0

  return (
    <div>
      <Title name="Give feedback"/>
      <FeedbackButton label="Good" onClick={() => setGood(good + 1)} />
      <FeedbackButton label="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <FeedbackButton label="Bad" onClick={() => setBad(bad + 1)} />    
      <Title name="Statictics"/>

      {isThereAnyFeedBack ? (
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
          />
      ) : (
        <p>No feedback given</p>
      )}
      </div>
  )
}

export default App
