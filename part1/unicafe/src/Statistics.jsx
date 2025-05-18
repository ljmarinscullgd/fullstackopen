const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad

    let average = 0
    let positivePercentage = 0 + " %"
    if(total != 0){
        average = (good - bad) / total
        positivePercentage = (good / total) * 100 + " %"
    }

    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positivePercentage} />
        </tbody>
      </table>
    )
  }
  
  const StatisticLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

export default Statistics


