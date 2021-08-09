import React from "react";

function Feedback({winner, isDraw, isGameOn}){

    if(winner && !isGameOn){
        return <h2>Winner is {winner}</h2>
    }

    if(isDraw && !isGameOn){
        return <h2>Match is Draw</h2>
    }

    if(isGameOn){
        return <h2>Match is ON</h2>
    }

    return(
            <h2>Play TIK TAK TOE</h2>    
    );
}

export default Feedback;