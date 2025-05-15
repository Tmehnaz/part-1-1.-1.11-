import StatisticsLine from "./StaticsLine"

const Statistics = ({c1,c2,c3,total,average,positive})=>{
    if(total === 0){
      return(
        <>
        <div>
           No feedback given 
        </div>
        </>
      )  
    }
    return(
        <>
        <div>
          <StatisticsLine text="good" value={c1} /> 
          <StatisticsLine text="neutral" value={c2} />  

          <StatisticsLine text="bad" value={c3} /> 
          <StatisticsLine text="total" value={total} /> 
          <StatisticsLine text="average" value={average} />
          <p> postive {`${positive.toFixed(2)} %`} </p>
        </div>
        </>
    )

}
export default Statistics