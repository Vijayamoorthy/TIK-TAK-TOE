function validateForResult(squares) {

    var isGameOn=true;
    var isDraw=false;
    var winner=null;


    if(squares[0] && (squares[0] === squares[1]  && squares[1] === squares[2])){
        isGameOn=false;
        winner=squares[0];
    }
    
    else if(squares[3] && (squares[3] === squares[4]  && squares[4] === squares[5])){
        isGameOn=false;
        winner=squares[3];
    }

    else if(squares[6] && (squares[6] === squares[7]  && squares[7] === squares[8])){
        isGameOn=false;
        winner=squares[6];
    }

    else if(squares[0] && (squares[0] === squares[4]  && squares[4] === squares[8])){
        isGameOn=false;
        winner=squares[0];
    }

    else if(squares[2] && (squares[2] === squares[4]  && squares[4] === squares[6])){
        isGameOn=false;
        winner=squares[2];
    }

    else if(squares[0] && (squares[0] === squares[3]  && squares[3] === squares[6])){
        isGameOn=false;
        winner=squares[0];
    }

    else if(squares[1] && (squares[1] === squares[4]  && squares[4] === squares[7])){
        isGameOn=false;
        winner=squares[1];
    }

    else if(squares[2] && (squares[2] === squares[5]  && squares[5] === squares[8])){
        isGameOn=false;
        winner=squares[2]
    }

    else{
        var isFilled=squares.filter((val)=>val === null)
        if(isFilled.length === 0)
        {
            isGameOn=false;
            winner=false;
            isDraw=true;
        }
    }

    return{
        isGameOn,
        isDraw,
        winner,
    }

}

export default validateForResult;