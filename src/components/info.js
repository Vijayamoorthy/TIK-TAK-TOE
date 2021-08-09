import React from "react";
import { Button, Form } from "react-bootstrap";
import "../app.css"

var arr=['player1','player2'];
function getFormData(formdata){
  return arr.reduce((acc,key) => {
    acc[key]=formdata.get(key);
    return acc;
  },{});
}


function Info({ updateGame , isGameOn }) {

  function handleSubmit(e) {
    e.preventDefault();
    var formdata = new FormData(e.target);
    var playerInfo = getFormData(formdata);
    var player1 = formdata.get("player1");
    var player2 = formdata.get("player2");

    console.log({
      player1, player2
    });
    updateGame(true,undefined,undefined,playerInfo);
    e.target.reset();
  }

  return (
    <Form className="infobg" onSubmit={handleSubmit}>
      <h3 className="feedback">Player's Information</h3>
      <Form.Group>
        <Form.Label>Player 1 : </Form.Label>
        <Form.Control className="ip" name="player1" type="text" required></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Player 2 : </Form.Label>
        <Form.Control className="ip" name="player2" type="text" required></Form.Control>
      </Form.Group>
      <Button 
        type="submit" 
        variant="primary" 
        disabled={isGameOn}
        className="btn"
      >
        Start The Game
      </Button>
    </Form>
  );
}


export default Info;