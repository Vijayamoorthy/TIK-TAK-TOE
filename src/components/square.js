import React from "react";
//import { Col } from "react-bootstrap";

function Square({placeholder,click}){
    
    return(
        <div className="App_board_col" onClick={click}>{placeholder}</div>
    );

}


export default Square;