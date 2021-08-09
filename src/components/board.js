import React from "react";
import Square from "./square";
import { Col, Row } from "react-bootstrap";
import validateForResult from "../utils/board.util";
import "../app.css"
const INIT_STATE = {
        isX : true,
        squares : Array(9).fill(null)
}


class Board extends React.Component{

    state=({
            isX : true,
        squares : Array(9).fill(null)
    })

    handleClick=(idx)=>{
        var { isGameOn }=this.props;
        var { change }=this.props;
        if(isGameOn && (this.state.squares[idx]===null) )
        {   
            change();
            var newSquares = [...this.state.squares];
            newSquares[idx] = this.state.isX ? "X" : "O";
            var result = validateForResult(newSquares);
            this.setState({
                isX : !this.state.isX,
                squares: newSquares
            })
            if(!result.isGameOn)
            {
                setTimeout(()=>this.setState(INIT_STATE),1000);
                this.props.updateGame(false,result.winner,result.isDraw);
            }
        }
    }
    
    
    render()
    {
        console.log(this.state.squares);
        var { squares } = this.state;

        console.log(validateForResult(squares));
        var { handleClick }=this;
        var { player,isGameOn } = this.props;
        return(
        <Row className="justify-content-center boardDiv">
                {(player && isGameOn) && <h4 className="heading">{player}'s Turn
                </h4> }
            <Col md={12} className="p-6 App_board">
                <Row className="App_board_row">
                    {squares.map((val,idx)=>{
                        return <Square placeholder={val} key={idx} click={()=>handleClick(idx)} />
    })}                     
          </Row>
            </Col>
            </Row>         
        );
    }
}

export default Board;