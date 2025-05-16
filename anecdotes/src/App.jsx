import { useState } from "react"
import Select from "./Select"
import Vote from "./Vote"
function App() {
  const anecdotes =[
    "The software isn't finished until the last user is dead",
    "We have to stop optimizing for programmers and start optimizing for users",
    "Theory is when you know something, but it doesn’t work. Practice is when something works, but you don’t know why. Programmers combine theory and practice: Nothing works and they don’t know why",
    "Building large applications is still really difficult. Making them serve an organisation well for many years is almost impossible",
    "Optimism is an occupational hazard of programming: feedback is the treatment",
    "Adding manpower to a late software project makes it later!",
    "Software projects fail for one of two general reasons: the project team lacks the knowledge to conduct a software project successfully, or the project team lacks the resolve to conduct a project effectively",
    "A common mistake that people make when trying to design something completely foolproof was to underestimate the ingenuity of complete fools",
    "First you listen to the users; then you ignore them",
  ]
  const [selected,setSelected] = useState(0)
  const[vote,setVotes]=useState(Array(anecdotes.length).fill(0))
  
  const handleSelected =()=>{
    const nextIndex = (selected+1)% anecdotes.length
    setSelected(nextIndex)
    console.log(selected)
  }

  const handleVote = ()=>{
    const updatedVotes = [...vote]
    updatedVotes[selected] +=1
    setVotes(updatedVotes)
    console.log(vote)
  }
   
  const allVoted =vote.every((v)=> v>0)
  const copy =[...vote]
  const findMax = copy.indexOf(Math.max(...copy))
  const maxVote = anecdotes[findMax] 
  const maxVoteCount = copy[findMax]

 
  
  
 
  
  return (
    <>
      <h1> Anecdote of the day </h1>
      <div>
        {anecdotes[selected]}
      </div>
     
      <Vote onClick={handleVote} vote={vote[selected]}/>
      <Select onClick={handleSelected} />
      <h1> Anecdote with most votes </h1>
      {allVoted ? <div>{maxVote} has {maxVoteCount} votes</div> : <div> No vote yet </div>
}
    
       
    </>
  )
}

export default App
