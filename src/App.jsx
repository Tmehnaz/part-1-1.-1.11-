import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'


function App() {
   
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)
  const [total, setTotal] = useState(0)
  const[avg, setAvg] = useState(0)
  const[pos, setPos] = useState(0)
  
  
  const handleGood=()=>{
    
    const goodTotal = goodCount + 1
    setGoodCount(goodTotal)
    const subTotal = goodTotal + neutralCount + badCount
    setTotal(subTotal)
    setAvg(subTotal/3)
    const findPosPercentage = (goodTotal/subTotal)*100
    setPos(findPosPercentage)

    console.log("log good count",goodTotal)
  }
  const handleNeutral = ()=>{
    const neutralTotal = neutralCount +1
    setNeutralCount(neutralTotal)
    const subTotal = goodCount + neutralTotal + badCount
    setTotal(subTotal)
    setAvg(subTotal/3)
    console.log("log neutral coutn", neutralTotal)
  }
  const handleBad = ()=>{
    const badTotal = badCount+1
    setBadCount(badTotal)
    const subTotal = goodCount + neutralCount + badTotal
    setTotal(subTotal)
    setAvg(subTotal/3)

    console.log("Log bad count", badTotal)
  }

  return (
    <>
      <div>
        <Header text="Give feedback"/>
        <Button onClick={handleGood} text="good"/>
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
        <h2> statistics </h2>
        <Statistics c1={goodCount} c2={neutralCount} c3={badCount} total={total} average={avg} positive={pos}/>
        
      </div>
    </>
  )
}
export default App
