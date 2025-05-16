const Vote = ({vote,onClick})=>{
    if(vote === 0){
        return(
            <>
             <div>
                No votes yet
             </div>
             <button onClick={onClick}>vote</button>
            </>
        )
    }
     return(
            <>
            <div> has {vote} votes</div>
            <button onClick={onClick}>vote</button>
            </>
        )
    
}
     
export default Vote