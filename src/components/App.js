import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import "../app.css";

import Header from "./header";
import Info from "./info.js" 
import Board from "./board"
import Feedback from "./feedback";

class App extends React.Component{
    
    state=
        {
               isGameOn:false,
               isDraw:false,
               winner:null,
               player1: null,
               player2: null,
               turn:null
        }

        handleChange=()=>
        {
            console.log("clicked...");
            var { turn } = this.state;
            if(turn === 1){
                this.setState({
                    turn:2
                })
            }else{
                this.setState({
                    turn:1
                })
            }
        }

        updateGame=(flag,winner,isDraw,playerInfo)=>
        {              
           if(flag)
           {
               var randomValue = Math.floor(Math.random()*2)+1;
               console.log("randomValue : ",randomValue);
                this.setState(
                    {
                        isGameOn : true,
                        ...playerInfo,
                        turn : randomValue
                    }
                )
           }
           else
           {
               var won;
               if(winner){
                   won = this.state.turn === 1 ? this.state.player1 : this.state.player2;
               }else{
                   won = this.state.winner;
               }
                this.setState(
                    {
                        isGameOn : false,
                        winner: won,             
                        isDraw: isDraw?isDraw:this.state.isDraw    
                    }
                )
           }
                
                console.log("Clicked..")
        }

render(){
    var { player1,player2,turn } = this.state
    var chance;
    if(turn === 1){
        chance = player1;
    }
    else{
        chance = player2;
    }

    return(
      <Container>
        <Row className="justify-content-center md5 feedback">
            <Header />
        </Row>
        <Row className="mt-3 p-3">
            <Col md={4}>
                <Info className="infobg" isGameOn={this.state.isGameOn} updateGame={this.updateGame}/>
            </Col>
            <Col md={{ span:4 , offset:4 }}>
                <Board player={chance} change={this.handleChange} isGameOn={this.state.isGameOn} updateGame={this.updateGame}/>
            </Col>
        </Row>
        <Row className="justify-content-center mt-5 feedback">
              <Feedback isDraw={this.state.isDraw} winner={this.state.winner} isGameOn={this.state.isGameOn} />    
        </Row>
      </Container>
        )
    }    
}

export default App;
