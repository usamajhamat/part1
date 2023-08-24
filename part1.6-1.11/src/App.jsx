
import  { useState } from 'react';

const Display = ({ text, value }) => {
  return <div>{text}: {value}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const Total = ({ text, total }) => {
  return <div>{text}: {total}</div>;
};

const Avg = ({ text, avg }) => {
  return <div>{text}: {avg.toFixed(2)}</div>;
};

const Positive = ({ text, positive }) => {
  return <div>{text}: {positive.toFixed(2)}%</div>;
};
const Statisticline = ({text, value})=>{
  return <div>{text} : {value}</div>
}
const Statistics = ({ good, neutral, bad }) => {
  
  const total = good + neutral + bad;
  const average = total / 3;
  const positivePercentage = (good * 100) / total || 0;
  if(total === 0){
    return <div>No Feedback Given</div>
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <tbody>
        <tr>
          <td> <Statisticline text='Good' value={good}/></td>
        </tr>
        <tr>
          <td> <Statisticline text='Neutral' value={neutral}/></td>
        </tr>
        <tr>
          <td> <Statisticline text='Bad' value={bad}/></td>
        </tr>
        <tr>
          <td> <Statisticline text='All' value={total}/></td>
        </tr>
        <tr>
          <td> <Statisticline text='Average' value={average.toFixed(2)}/></td>
        </tr>
        <tr>
          <td> <Statisticline text='Positive' value={positivePercentage.toFixed(2)}/></td>
        </tr>
        </tbody>
      </table>
   
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGoodByOne=()=> setGood(good + 1)
  const increaseBadByOne=()=> setBad(bad + 1)
  const increaseNutralByOne=()=> setNeutral(neutral + 1)
  const isFeedback = good + neutral + bad > 0

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={increaseGoodByOne} text='Good' />
        <Button handleClick={increaseNutralByOne} text='Neutral' />
        <Button handleClick={increaseBadByOne} text='Bad' />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        isFeedback={isFeedback}
      />
    </div>
  );
};

export default App;
