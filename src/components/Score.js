import React from 'react';

const Score =({score, restart})=>{
 return(
     <div className="score-board">
       <div className="score">You got {score} correct answers!</div>
       <button className="playBtn" onClick={restart}> Play again</button>
     </div>)
}
export default Score;