import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import { useState, useEffect } from 'react'
import './App.module.css'

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("clickCount");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0
  }
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks)

  const updateFeedback = feedbackType => {
    setClicks(prevClicks => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1
    })
  )}

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0
      })
  }

  useEffect(() => {
    localStorage.setItem("clickCount", JSON.stringify(clicks))
  },[clicks])

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveCalculation = Math.round((clicks.good / totalFeedback) * 100)

  return (
   <div>
     <Description />
     <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} reset={resetFeedback} />
     {totalFeedback === 0 ? <Notification /> :
     <Feedback value={clicks} totalFeedback={totalFeedback} positive={positiveCalculation} />}    
   </div>
    )
}
