import React, { useState } from 'react';

const buttonStyle = {
    backgroundColor: "rebeccapurple",
    color: "white",
    padding: "20px",
    borderRadius: "10px"
}

const buttonDisabledStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "20px",
    borderRadius: "10px"
}
const Character = props => {
    // const [state, setState] = useState({
    //     health: props.hp
    // })
    const [health, setHealth] = useState(props.hp);
    const takeDamage = () => setHealth(health - 10);
    return(
        <div>
            <hr />
            <h3>Name: { props.name }</h3>
            <h4>Race: { props.race }</h4>
            <h4>Class: { props.skill }</h4>
            <h4>Health: { health }</h4>
            <button disabled={health == 0} onClick={takeDamage} style={health == 0 ? buttonDisabledStyle : buttonStyle}>{health > 10 ? "Get hit" : health == 0 ? "KO'd" : "Finish him!"}</button>
        </div>
    );
}

export default Character;